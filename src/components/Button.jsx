const Button = ({ children, click, ref }) => {
  return (
    <div>
      <button
        ref={ref}
        onClick={() => click()}
        className="relative px-8 py-3 rounded-full font-semibold tracking-wider text-white uppercase overflow-hidden transition-all duration-300
                   bg-linear-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20
                   border border-gray-700 hover:border-cyan-400
                   backdrop-blur-md shadow-[0_0_25px_-10px_rgba(0,0,0,0.8)]
                   hover:shadow-[0_0_35px_-5px_rgba(56,189,248,0.4)]"
      >
        <span className="relative z-10">{children}</span>
        <div className="absolute inset-0 bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-0 hover:opacity-20 blur-xl transition-opacity duration-500"></div>
        <div className="absolute -inset-px rounded-full bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-40 blur-sm group-hover:opacity-70 transition-opacity"></div>
      </button>
    </div>
  );
};

export default Button;
