import { createContext, useReducer } from "react";

interface IShopContext {
  addToCart: (productId: string) => void;
  removeFromCart: () => void;
  cart: string[];
}

interface CartObjet{
  quantity: number;
  productId: string;
}
interface IState {
  cart: string[];
}
interface IAction {
  type: string;
  productId?: string;
}
export const ShopContext = createContext({} as IShopContext);

function ShopContextProvider({ children }: React.PropsWithChildren) {
  function reducer(state: IState, action: IAction) {
    switch (action.type) {
      case "addToCart": {
        if (action.productId) {
          const cart = [...state.cart, action.productId];
          localStorage.setItem("cart", JSON.stringify(cart));
          return {
            ...state,
            cart,
          };
        }
        return state;
      }
      default:
        throw new Error(`Unhandled action type: ${action.type}`);
    }
  }

  const [state, dispatch] = useReducer(reducer, {} as IState, () => {
    if (typeof window !== "undefined") {
      const cart = localStorage.getItem("cart");
      if (cart) {
        return { cart: JSON.parse(cart) } as IState;
      }
    }
    return { cart: [] } as IState;
  });

  const shopMethods: IShopContext = {
    addToCart(productId) {
      dispatch({ type: "addToCart", productId });
    },
    removeFromCart() {},
    cart: state.cart,
  };
  return (
    <ShopContext.Provider value={shopMethods}>{children}</ShopContext.Provider>
  );
}

export default ShopContextProvider;
