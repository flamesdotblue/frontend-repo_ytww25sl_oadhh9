export default function FormField({ label, htmlFor, type = "text", placeholder, value, onChange, required = false }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium text-gray-700">
        {label}{required && <span className="text-emerald-600"> *</span>}
      </label>
      <input
        id={htmlFor}
        name={htmlFor}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
      />
    </div>
  );
}
