import React, { useEffect, useState } from "react";

const Nav: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full px-8 py-4 flex items-center justify-between z-50 transition-all duration-300 ${
          scrolled ? "bg-green-500 text-white shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="text-lg font-bold border-2 border-black px-2 py-1">
          IB
        </div>
        <div className="flex space-x-10">
          {["Projects", "Extras", "Media"].map((item) => (
            <a
              key={item}
              href="#"
              className="relative font-semibold text-black transition-all hover:text-green-500"
            >
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
        <button className="border-2 border-black px-4 py-1 rounded-lg hover:bg-black hover:text-white transition">
          Contact Me
        </button>
      </nav>
    </>
  );
};

export default Nav;
