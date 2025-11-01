const ThreeDots = () => {
  return (
    <div className="mt-6 flex justify-center gap-3">
      <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></div>
      <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse delay-150"></div>
      <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse delay-300"></div>
    </div>
  );
};

export default ThreeDots;
