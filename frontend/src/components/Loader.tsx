export default function Loader() {
  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="text-center">
        <div className="flex gap-1 text-lg font-extrabold text-slate-700">
          {'LOADING...'.split('').map((letter, i) => (
            <span
              key={i}
              className="text-indigo-500"
              style={{ animation: `pulse 1.5s ${i * 0.1}s infinite` }}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}