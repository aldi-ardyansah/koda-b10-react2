function Button({variant, onClick}) {
    return (
        <button onClick={() => onClick(variant)} className="text-white bg-gray-500 p-4 rounded-md cursor-pointer">
            {variant === 'plus' ? '+' : '-'}
        </button>
    );
}

export default Button;