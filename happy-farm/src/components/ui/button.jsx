export function Button({ children, onClick, disabled, className='' }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-3 py-1 rounded border bg-white hover:bg-gray-50 disabled:opacity-50 ${className}`}
    >
      {children}
    </button>
  );
}