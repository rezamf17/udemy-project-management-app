export default function Input({ isTextarea, type, label, value, change }) {
  return (
    <div>
      <p>
        {" "}
        {label}
        {isTextarea ? (
          <textarea
            value={value}
            onChange={change}
            className="w-full text-slate-600 bg-white border border-slate-300 appearance-none rounded-lg px-3.5 py-2.5 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
          />
        ) : (
          <input
            type={type}
            value={value}
            onChange={change}
            className="peer h-10 w-full rounded-md bg-white-50 border border-slate-300 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400"
          />
        )}
      </p>
    </div>
  );
}
