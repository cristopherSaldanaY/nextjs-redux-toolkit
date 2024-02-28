'use client'
import { Provider } from "react-redux";
import { store } from "./store";

/*
Componente que englobara la aplicación
Provider necesita que le entreguemos un store lo que seria el valor de lo que almacenara
*/
export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

