import { Moon, Menu, X } from "lucide-react";
import { useState } from "react";
import { useAuthStore } from "../store/authStore";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const currentUser = useAuthStore((state) => state.currentUser);
  console.log(currentUser);

  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="fixed left-0 right-0 z-30 flex justify-between items-center px-4 sm:px-6 md:px-10 py-4 bg-transparent backdrop-blur-md border-b border-slate-800">
        <div onClick={() => navigate("/")} className="cursor-pointer">
          <h1 className="bg-gradient-to-r from-white to-neutral-800 inline-block text-transparent bg-clip-text text-[20px] sm:text-[22px] md:text-[24px] font-semibold cursor-pointer">
            MIND BLOCK
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <div className="">
            <h2 className="text-neutral-400 cursor-not-allowed hover:text-white transition-colors">
              Puzzle
            </h2>
          </div>
          <div>
            <h2 className="text-neutral-400 cursor-pointer hover:text-white transition-colors">
              Leaderboard
            </h2>
          </div>
          <div>
            <h2 className="text-neutral-400 cursor-pointer hover:text-white transition-colors">
              About
            </h2>
          </div>
          <div>
            {currentUser ? (
              <Moon
                className="size-9 border-2 border-slate-800 p-2 rounded-sm cursor-pointer hover:border-slate-600 transition-colors"
                // onClick={handleAvatarClick} // for modal/avatar later
              />
            ) : (
              <>
                <button
                  className="px-3 py-1 bg-cyan-700 rounded text-white text-xs hover:bg-cyan-500 transition mr-2"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>
                <button
                  className="px-3 py-1 bg-white text-black rounded text-xs hover:bg-gray-200 transition"
                  onClick={() => navigate("/signup")}
                >
                  Signup
                </button>
              </>
            )}
          </div>
        </div>

        {/* Mobile Navigation - Icons */}
        <div className="flex md:hidden items-center gap-3">
          <Moon className="size-8 border-2 border-slate-800 p-1.5 rounded-sm cursor-pointer hover:border-slate-600 transition-colors" />
          <button className="bg-white p-1 rounded-full">Pro</button>
          <button
            onClick={toggleMenu}
            className="p-1.5 rounded-sm border-2 border-slate-800 hover:border-slate-600 transition-colors"
          >
            {isMenuOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <div className="flex flex-col px-4 py-4 space-y-4">
            <h2 className="text-neutral-400 cursor-pointer hover:text-white transition-colors py-2">
              Puzzle
            </h2>
            <h2 className="text-neutral-400 cursor-pointer hover:text-white transition-colors py-2">
              Leaderboard
            </h2>
            <h2 className="text-neutral-400 cursor-pointer hover:text-white transition-colors py-2">
              About
            </h2>
          </div>
        </div>
      )}

      <hr className="border-slate-800" />
    </div>
  );
};

export default Navbar;
