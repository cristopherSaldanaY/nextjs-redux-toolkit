import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type User = {
  id: number;
  name: string;
  email: string;
  username: string;
};

//reducerPath: nombre a todas las funciones
//baseQuery: url usando fetchBaseQuery donde pasamos el dominio
//endpoints : lo que pedira
//builder: biblioteca que tiene funciones
//getUsers puede ser cualquier nombre
//query: cuando queremos hacer una peticion get
//mutation: cuando queremos alterar datos en el backend (post, put, delete)
//query: () => "users" es la solicitud que hara despues de la baseUrl /users y lo almacenara en getUsers
// query<User[], null> indicamos que retornara un arreglo de usuarios y no recibira nada más
// query<User, id: string> indicamos que retornara un usuario y que reciba un segundo valor id
export const userApi = createApi({
  reducerPath: "userAPI", //nombre para todas las funciones
  baseQuery: fetchBaseQuery({ 
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({ 
    getUsers: builder.query<User[], null>({ 
      query: () => "users", //es igual a http://domain/users
    }),
    getUserById: builder.query<User, { id: string }>({
      query: ({ id }) => `users/${id}`,
    }),
  }),
});

/*
para utilizar las peticiones, lo que hace la constante userApi es tomar la configuración
y va a crear unos hooks de react que guardaran en el state.
extraemos el usegetUsersQuery y useGetUserByIdQuery de userApi
*/
export const { useGetUsersQuery, useGetUserByIdQuery } = userApi