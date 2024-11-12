export function Button({ children }) {
  return (
    <button className="mt-4 bg-orange-500 hover:bg-orange-300 duration-300 transition ease-in-out px-4 py-2 text-black rounded-md min-w-40 min-h-10 grid place-items-center">
      {children}
    </button>
  );
}
