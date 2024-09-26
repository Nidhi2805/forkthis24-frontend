import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-black h-[80px] p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="logo-placeholder font-press">Logo</div>
          <Link
            href="/about"
            className="text-white uppercase px-3 py-2 rounded hover:bg-gray-700 font-press"
          >
            About
          </Link>
          <Link
            href="/dashboard"
            className="text-white uppercase px-3 py-2 rounded hover:bg-gray-700 font-press"
          >
            Dashboard
          </Link>
          <Link
            href="/leaderboard"
            className="text-white uppercase px-3 py-2 rounded hover:bg-gray-700 font-press"
          >
            Leaderboard
          </Link>
        </div>
        <div>
          <Link
            href="/resources"
            className="text-white uppercase px-3 py-2 rounded hover:bg-gray-700 font-press"
          >
            Resources
          </Link>
          <Link
            href="/resources"
            className="text-white uppercase px-3 py-2 rounded hover:bg-gray-700 font-press"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;