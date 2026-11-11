function Button({variant, onClick}) {
  return (
    <button type="button" onClick={() => onClick(variant)} className="text-white bg-gray-500 p-4 rounded-md cursor-pointer hover:bg-gray-600">
      {variant === "plus" ? "+" : "-"}
    </button>
  );
}

export default Button;