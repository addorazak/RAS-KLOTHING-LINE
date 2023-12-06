import { createContext } from "react";

export const CheckoutContext = createContext({});

export const CheckoutProvider = ({ children }) => {
  <CheckoutContext.Provider>{children}</CheckoutContext.Provider>;
};
