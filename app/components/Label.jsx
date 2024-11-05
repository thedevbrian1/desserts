export function Label({ children, htmlFor }) {
  return (
    <label htmlFor={htmlFor} className="text-sm">
      {children}
    </label>
  );
}
