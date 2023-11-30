import { createContext, useReducer } from "react";

interface IShopContext {
  addToCart: (productId: string, title: string, price: number) => void;
  removeFromCart: (productId: string) => void;
  deleteFromCart: (productId: string) => void;
  cart: CartObjet[];
}

interface CartObjet {
  quantity: number;
  productId: string;
  title: string;
  price: number;
}
interface IState {
  cart: CartObjet[];
}
interface IAction {
  type: string;
  productId?: string;
  title?: string;
  price?: number;
}
export const ShopContext = createContext({} as IShopContext);

function ShopContextProvider({ children }: React.PropsWithChildren) {
  function reducer(state: IState, action: IAction) {
    switch (action.type) {
      case "addToCart": {
        if (action.productId && action.title && action.price) {
          let cart = [...state.cart];
          const objectInCart = cart.find(
            (object) => object.productId === action.productId
          );
          if (objectInCart) {
            const objectIndex = cart.indexOf(objectInCart);
            cart[objectIndex].quantity++;
          } else {
            cart.push({
              productId: action.productId,
              quantity: 1,
              title: action.title,
              price: action.price,
            });
          }
          localStorage.setItem("cart", JSON.stringify(cart));
          return {
            ...state,
            cart,
          };
        }
        return state;
      }
      case "removeFromCart": {
        if (action.productId) {
          const cart = state.cart.map((o) => Object.assign({}, o));
          const product = cart.find((p) => p.productId === action.productId);
          product?.quantity && product.quantity--;
          localStorage.setItem("cart", JSON.stringify(cart));
          return {
            ...state,
            cart,
          };
        }
        return state;
      }
      case "deleteFromCart": {
        if (action.productId) {
          const cart = state.cart.map((o) => Object.assign({}, o));
          const productIndex = state.cart.findIndex(
            (p) => p.productId === action.productId
          );
          if (productIndex !== -1) {
            cart.splice(productIndex, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            return {
              ...state,
              cart,
            };
          }
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
    addToCart(productId, title, price) {
      dispatch({ type: "addToCart", productId, title, price });
    },
    removeFromCart(productId) {
      dispatch({ type: "removeFromCart", productId });
    },
    deleteFromCart(productId) {
      dispatch({ type: "deleteFromCart", productId });
    },
    cart: state.cart,
  };
  return (
    <ShopContext.Provider value={shopMethods}>{children}</ShopContext.Provider>
  );
}

export default ShopContextProvider;
