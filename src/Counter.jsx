function Counter({children}) {
  return (
    <div className="bg-black w-[25vw] h-[25vh] min-w-50 min-h-30 rounded-md flex flex-row items-center justify-center gap-4">
      {children}
    </div>
  );
}

export default Counter;