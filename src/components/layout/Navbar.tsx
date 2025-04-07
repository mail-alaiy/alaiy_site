
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "home", path: "/" },
    { name: "blogs", path: "/blogs" },
    { name: "products", path: "/products" },
    { name: "case studies", path: "/case-studies" },
    { name: "contact", path: "/contact" },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-4 px-6">
      <div className="container mx-auto">

        {/* Desktop Navigation - White bar with centered links */}
        <div className="hidden md:block bg-white py-2 rounded-full shadow-md">
          <nav className="flex items-center justify-center">
            <div className="flex items-center space-x-10">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `font-medium text-sm tracking-wide transition-colors ${
                      isActive
                        ? "text-primary border-b-2 border-secondary"
                        : "text-primary/90 hover:text-primary"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </nav>
        </div>

        {/* Mobile Menu Button - Positioned at right */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white hover:text-secondary absolute right-6 top-4 bg-primary/30 backdrop-blur-sm p-2 rounded-full z-50"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation - Full screen overlay */}
      {isMenuOpen && (
        <nav className="md:hidden fixed inset-0 bg-primary z-40 animate-fade-in">
          <div className="container mx-auto py-20 px-6 flex flex-col space-y-6 h-full">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `font-medium text-xl py-3 px-4 rounded-md transition-colors ${
                    isActive
                      ? "bg-white/10 text-white"
                      : "text-white/80 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
