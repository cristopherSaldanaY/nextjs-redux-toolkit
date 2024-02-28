import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";

/*
usedispatch le indicaremos los tipos de datos o que puede llamar
donde le pasaremos el counterReducer que definimos en AppDispatch en el store
*/
export const useAppDispatch = () => useDispatch<AppDispatch>()


/*
useSelector para usar un selector del estado 
*/
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector