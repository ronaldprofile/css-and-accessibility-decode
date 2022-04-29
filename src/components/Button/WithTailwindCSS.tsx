export function ButtonWithTailwind() {
  return (
    <div
      className={` p-6 bg-gray-custom_gray flex items-center flex-col 
        gap-3 rounded-md text-center
      `}
    >
      <span className={`text-xl font-bold`}>With Tailwind CSS</span>
      <button
        className={`bg-cyan-800/50 text-white font-bold text-base
        py-3 px-6 rounded-lg ease-out duration-300 hover:scale-125
      `}
      >
        Hello World
      </button>
    </div>
  );
}
