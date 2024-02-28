import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

export const counterSlice = createSlice({
  name: "counter", //puede ser cualuier nombre
  initialState, //usamos el valor inicial
  reducers: { //especificamos las funciones
    increment: (state) => { //funcion que incrementa el valor, usamos el state para acceder al valor del counter y agregarle un 1
      state.counter += 1;
    },
    decrement: (state) => { //funcion que decrementa el valor, usamos el state para acceder al valor del counter y quitarle un 1
      state.counter -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions //para que pueda ser llamado por otros elementos
export default counterSlice.reducer //indicamos al store el valor inicial