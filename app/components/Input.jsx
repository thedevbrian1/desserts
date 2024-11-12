export function Input({ type, name, id, hasError }) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      className={`px-2 py-1 rounded-lg border ${
        hasError ? "border-red-500" : "border-slate-500"
      } `}
    />
  );
}
