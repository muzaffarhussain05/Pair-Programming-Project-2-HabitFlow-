import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, login, logout } = useAuth();

  return (
    <nav className="w-full px-6 md:px-16 py-4 bg-white border-b shadow-sm flex items-center justify-between sticky top-0 z-20">
      <Link
        to="/"
        className="text-2xl font-extrabold text-indigo-700 hover:text-indigo-900 transition"
      >
        HabitFlow
      </Link>

      {user ? (
        <div className="flex items-center gap-3">
          <img
            src={user.photoURL}
            alt="avatar"
            className="w-9 h-9 rounded-full border object-cover"
          />
          <span className="hidden sm:inline text-gray-700 font-medium">
            {user.displayName}
          </span>
          <Link
            onClick={logout}
            to="/"
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 text-sm rounded-md shadow transition"
          >
            Log out
          </Link>
        </div>
      ) : (
        <button
          onClick={login}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 text-sm rounded-md shadow transition"
        >
          Sign in with Google
        </button>
      )}
    </nav>
  );
};

export default Navbar;
