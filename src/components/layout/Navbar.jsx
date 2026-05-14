export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        <h1 className="font-bold text-2xl">
          AeroMind AI
        </h1>

        <div className="flex gap-6 text-sm">
          <a href="#">Dashboard</a>
          <a href="#">Analytics</a>
          <a href="#">Privacy</a>
        </div>
      </div>
    </nav>
  );
}