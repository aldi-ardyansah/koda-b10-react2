function Button({variant, onClick}) {
  return (
    <button type="button" onClick={() => onClick(variant)} className="text-white bg-blue-500 p-4 rounded-md cursor-pointer hover:bg-blue-700">
      {variant === "plus" ? "+" : "-"}
    </button>
  );
}

export default Button;