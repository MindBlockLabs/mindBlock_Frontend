import { Link } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { useState } from "react";

const Navigation = () => {
  const currentUser = useAuthStore((state) => state.currentUser);
  const logout = useAuthStore((state) => state.logout);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Custom Sign Up Button Component - Fixed overflow issues
  const SignUpButton = ({
    className = "",
    onClick,
  }: {
    className?: string;
    onClick?: () => void;
  }) => {
    return (
      <Link
        to="/signup"
        onClick={onClick}
        className={`relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-cyan-600 rounded-md group ${className}`}
      >
        <span className="absolute top-0 right-0 inline-block w-3 h-3 transition-all duration-500 ease-in-out bg-cyan-800 rounded group-hover:-mr-2 group-hover:-mt-2">
          <span className="absolute top-0 right-0 w-4 h-4 rotate-45 translate-x-1/3 -translate-y-1/3 bg-white" />
        </span>
        <span className="absolute bottom-0 rotate-180 left-0 inline-block w-3 h-3 transition-all duration-500 ease-in-out bg-cyan-800 rounded group-hover:-ml-2 group-hover:-mb-2">
          <span className="absolute top-0 right-0 w-4 h-4 rotate-45 translate-x-1/3 -translate-y-1/3 bg-white" />
        </span>
        <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-cyan-700 rounded-md group-hover:translate-x-0" />
        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white text-sm font-medium">
          Sign Up
        </span>
      </Link>
    );
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-800 shadow-lg overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link
              to="/"
              className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors"
            >
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-gray-900 font-bold text-sm">M</span>
              </div>
              <span className="font-semibold text-lg tracking-wide">
                MIND <span className="text-gray-400">BLOCK</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/puzzles"
              className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Puzzles
            </Link>
            <Link
              to="/leaderboard"
              className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Leaderboard
            </Link>
            <Link
              to="/learn"
              className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              About
            </Link>
          </div>

          {/* Right Side - Theme Toggle, Auth & Profile */}
          <div className="flex items-center space-x-4 flex-shrink-0">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>

            {/* Desktop Auth */}
            <div className="hidden md:flex items-center space-x-3">
              {currentUser ? (
                <>
                  <Link
                    to="/dashboard"
                    className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    Dashboard
                  </Link>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-medium">
                        {currentUser.username?.charAt(0).toUpperCase() || "U"}
                      </span>
                    </div>
                    <button
                      onClick={logout}
                      className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                    >
                      Logout
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    Login
                  </Link>
                  <div className="overflow-hidden">
                    <SignUpButton />
                  </div>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/puzzles"
                className="block text-gray-300 hover:text-white px-3 py-2 text-base font-medium transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Puzzles
              </Link>
              <Link
                to="/leaderboard"
                className="block text-gray-300 hover:text-white px-3 py-2 text-base font-medium transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Leaderboard
              </Link>
              <Link
                to="/about"
                className="block text-gray-300 hover:text-white px-3 py-2 text-base font-medium transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>

              {/* Mobile Auth */}
              <div className="border-t border-gray-800 pt-3 mt-3">
                {currentUser ? (
                  <>
                    <div className="flex items-center px-3 py-2">
                      <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-sm font-medium">
                          {currentUser.username?.charAt(0).toUpperCase() || "U"}
                        </span>
                      </div>
                      <span className="text-gray-300 text-sm">
                        {currentUser.username}
                      </span>
                    </div>
                    <Link
                      to="/dashboard"
                      className="block text-gray-300 hover:text-white px-3 py-2 text-base font-medium transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setIsMobileMenuOpen(false);
                      }}
                      className="block w-full text-left text-gray-300 hover:text-white px-3 py-2 text-base font-medium transition-colors duration-200"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="block text-gray-300 hover:text-white px-3 py-2 text-base font-medium transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Login
                    </Link>
                    <div className="px-3 mt-2 overflow-hidden">
                      <SignUpButton
                        className="w-full justify-center"
                        onClick={() => setIsMobileMenuOpen(false)}
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
