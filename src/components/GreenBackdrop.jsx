export default function GreenBackdrop() {
  return (
    <div className="absolute inset-0 -z-0">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-emerald-50"></div>
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl opacity-40 bg-emerald-300"></div>
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full blur-3xl opacity-40 bg-emerald-300"></div>
    </div>
  );
}
