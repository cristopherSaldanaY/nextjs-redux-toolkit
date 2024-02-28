import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice"; //importamos el reducer
import { userApi } from "./services/userApi";
import { setupListeners } from "@reduxjs/toolkit/query";

/*
pasamos los reducers, esto le permite decirle a la aplicación
que estas operciones pueden ser ejecutadas en la aplicacion,
esto lo tendremos exportable almacenado en una constante store
*/
/*
[userApi.reducerPath]: usamos el nombre que tenemos el reducePath
userApi.reducer: como valor almacenaremos lo que venga desde userApi.reducer (funciones que puede ejecutar)
*/
/*
Para pasarle funciones usamos middleware
getDefaultMiddleware: son las funciones que se ejecutan antes de llegar
.concat: le añade las peticiones a un array
*/
export const store = configureStore({
  reducer: {
    counterReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) => //manipular datos asincronos
    getDefaultMiddleware().concat([userApi.middleware]),
});

//setupListeners: Para manejar las funciones asincronas
//store.dispatch: la propiedad para ejecutar los actions dentro del store
setupListeners(store.dispatch)

/*
Exportar un type RootState que es el estado raiz del store
Extrar los tipos de datos del store
*/
export type RootState = ReturnType<typeof store.getState>;

/*
Exportamos las funciones que puede ejecutar
exportando un type AppDispatch donde le damos la informacion
de que funciones puede ejecutar
*/
export type AppDispatch = typeof store.dispatch;
