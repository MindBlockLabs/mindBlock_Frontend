import { Button } from "../atoms/GlassInput/Button";
import { Brain } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo with fade effect */}
          <div className="flex items-center">
            <Brain className="w-5 h-5 text-white mr-2" />
            <span className="font-sans text-2xl text-white relative">
              <span className=" arial block w-full bg-gradient-to-r from-white to-transparent bg-clip-text text-transparent">
                MIND BLOCK
              </span>
            </span>
          </div>

          {/*navbar remains unchanged */}
          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-8">
              <a href="#puzzles" className="text-gray-300 hover:text-white text-sm font-medium">
                Puzzles
              </a>
              <a href="#leaderboard" className="text-gray-300 hover:text-white text-sm font-medium">
                Leaderboard
              </a>
              <a href="#about" className="text-gray-300 hover:text-white text-sm font-medium">
                About
              </a>
            </div>

            <div className="flex items-center gap-4">
              <a 
                href="#login" 
                className="text-white text-sm font-medium border border-white/50 rounded-sm px-3 py-1.5 hover:border-white transition-colors"
              >
                Login
              </a>
              <Button
                variant="white"
                className="text-sm font-medium px-4 py-1.5"
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};