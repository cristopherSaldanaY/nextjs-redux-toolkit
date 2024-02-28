"use client";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { decrement, increment } from "@/redux/features/counter/counterSlice";
import { useGetUsersQuery } from "@/redux/services/userApi";

//useAppDispatch: permite que podemos ejecutar algo
//useappSelector: extrar un valor del estado

function HomePage() {
  // del state queremos extraer el counterReducer y el valor counter
  const count = useAppSelector((state) => state.counterReducer.counter);

  //usamos la llamada a la api
  const { data, error, isLoading, isFetching } = useGetUsersQuery(null);

  //si esta cargando la data
  if (isLoading || isFetching) {
    return <p>Loading...</p>;
  }

  if (error) return <p>some error</p>;

  // usamos el useAppDispatch para usar las funciones
  //exportaremos increment y decrement desde el counterSlice
  const dispatch = useAppDispatch();

  return (
    <>
      <h1 className="text-center text-2xl">Total: {count}</h1>
      <div className="flex justify-center mt-4 gap-5">
        <button
          className="bg-green-500 px-3 py-2 rounded-md"
          onClick={() => {
            dispatch(increment());
          }}
        >
          Increment
        </button>
        <br />
        <button
          className="bg-blue-500 px-3 py-2 rounded-md"
          onClick={() => {
            dispatch(decrement());
          }}
        >
          Decrement
        </button>
      </div>
      <div className="flex flex-wrap gap-10 mt-10 justify-center">
      {data?.map((user) => (
        <div key={user.id} className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="p-6">
          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {user.name}
          </h5>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            {user.username}
          </p>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            {user.email}
          </p>
        </div>
      </div>
      ))}
      </div>
    </>
  );
}

export default HomePage;
