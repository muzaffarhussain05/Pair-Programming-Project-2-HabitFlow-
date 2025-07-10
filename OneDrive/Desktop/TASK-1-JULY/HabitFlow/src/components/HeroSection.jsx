import { FaMoon } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <header className="flex items-center justify-between px-6 md:px-16 py-4 border-b">
        <div className="flex items-center space-x-2">
          <img src="/logo.svg" alt="Habitflow Logo" className="w-6 h-6" />
          <span className="text-xl font-semibold">Habitflow</span>
        </div>

        <div className="flex items-center space-x-3">
          <button className="p-2 rounded-md border hover:bg-gray-100">
            <FaMoon />
          </button>
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md">
            Login
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="text-center px-6 md:px-0 py-24">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Stay on Track,
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-green-500 to-yellow-500">
            {" "}Stay in Flow.
          </span>
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-8">
          Stay consistent with a habit tracker that feels lighter. Built for the web, simple, personalized — and totally free to use.
        </p>
        <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-md shadow">
          Get Started for Free
        </button>
      </section>
    </div>
  );
};

export default HeroSection;
