export default function Button({ children, onClick, variant = "primary" }) {
  return (
    <button
      onClick={onClick}
      className={`btn btn-${variant} m-2`}
    >
      {children}
    </button>
  );
}
