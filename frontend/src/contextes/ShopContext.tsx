import { createContext, useState } from "react";

interface IShopContext {
  addToCart: (productId: string) => void;
  removeFromCart: () => void;
}
export const ShopContext = createContext({} as IShopContext);

function ShopContextProvider({ children }: React.PropsWithChildren) {
  const [state, setState] = useState(5);

  const shopMethods: IShopContext = {
    addToCart(productId) {
      console.log("COUCOU");
    },
    removeFromCart() {},
  };
  return (
    <ShopContext.Provider value={shopMethods}>{children}</ShopContext.Provider>
  );
}

export default ShopContextProvider;
