import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["Home", "Store", "Blog", "Basket", "Login"];

  return (
    <nav aria-label="Main navigation" className="absolute top-4 right-4 z-20">
      {/* Desktop Menu */}
      <ul className="p-3 hidden md:flex items-center gap-12 text-xl">
        {menuItems.map((item) => (
          <li key={item} className="grid place-items-center">
            <a
              href="#"
              className={`cursor-pointer font-medium hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/30 ${
                item === "Home" ? "gradient-text" : ""
              }`}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger Button */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-3 focus:outline-none"
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
      >
        <span className="h-0.5 w-6 bg-white transition-transform" />
        <span className="h-0.5 w-6 bg-white transition-opacity" />
        <span className="h-0.5 w-6 bg-white transition-transform" />
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex flex-col items-center justify-center z-50"
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-white text-3xl focus:outline-none outline-none"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>

            {/* Menu Items */}
            <ul className="flex flex-col gap-8 text-2xl text-white">
              {menuItems.map((item) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href="#"
                    className={`hover:opacity-80 outline-none ${
                      item === "Home" ? "gradient-text" : ""
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
