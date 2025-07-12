import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="flex-1 w-full overflow-hidden bg-white text-gray-900 flex items-center justify-center px-4">
      <section className="text-center max-w-3xl py-20 md:py-24">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          Stay on Track,
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-green-500 to-yellow-500">
            {" "}
            Stay in Flow.
          </span>
        </h1>
        <p className="text-gray-500 text-lg mb-10">
          Stay consistent with a habit tracker that feels lighter. Built for the
          web, simple, personalized — and totally free to use.
        </p>
        <Link to="/dashboard">
          <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300 ease-in-out">
            Get Started for Free
          </button>
        </Link>
      </section>
    </div>
  );
};

export default HeroSection;
