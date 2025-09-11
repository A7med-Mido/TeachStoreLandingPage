const Navbar = () => {
  return (
    <nav
      aria-label="Main navigation"
      className="absolute top-4 right-4 z-20"
    >
      <ul className="p-3 flex items-center gap-12 text-xl">
        <li className="grid place-items-center">
          <a
            href="#"
            className="gradient-text cursor-pointer font-medium hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/30"
          >
            Home
          </a>
        </li>

        <li className="grid place-items-center">
          <a
            href="#"
            className="cursor-pointer hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/30"
          >
            Store
          </a>
        </li>

        <li className="grid place-items-center">
          <a
            href="#"
            className="cursor-pointer hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/30"
          >
            Blog
          </a>
        </li>

        <li className="grid place-items-center">
          <a
            href="#"
            className="cursor-pointer hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/30"
          >
            Basket
          </a>
        </li>

        <li className="grid place-items-center">
          <a
            href="#"
            className="cursor-pointer hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/30"
          >
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
