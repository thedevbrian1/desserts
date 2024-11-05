export function Input({ type, name, id }) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      className="px-2 py-1 rounded-lg border border-slate-500"
    />
  );
}
