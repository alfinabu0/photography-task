'use client';
import { HiMoon, HiSun } from "react-icons/hi2";
import { useTheme } from "next-themes";

const Navbar: React.FC = () => { 
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
    return (
      <nav className="p-5 w-full h-16 flex items-center justify-between border-b border-solid border-black/8 dark:border-white/[.145]  mb-8">
        <div>Inekas PhotoGraphy</div>
        <div className="flex items-center h-5 w-5 ">
          <button onClick={toggleTheme} aria-label="Toggle dark mode" className="cursor-pointer">
            {theme === "light" ? (
              <HiMoon  />
            ) : (
              <HiSun  />
            )}
          </button>
        </div>
      </nav>
    );
};

export default Navbar;