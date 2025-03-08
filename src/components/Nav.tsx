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
        className={`fixed top-0 left-0 w-full px-10 py-5 flex items-center justify-between z-50 transition-all duration-300 ${
          scrolled ? "bg-green-500 text-white shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="text-4xl font-bold border-2 border-black px-2 py-1 mr-10">
          IB
        </div>
        <div className="flex items-center gap-x-16">
          {["Featured Work", "Tech Stack", "Media"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-3xl font-semibold text-black transition-all hover:text-green-800"
            >
              {item}
              <span className=" text-4xl absolute left-0 bottom-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
        <button className="text-4xl border-2 border-black px-2 py-1 rounded-lg hover:bg-black hover:text-white transition ml-10">
          Contact Me
        </button>
      </nav>
    </>
  );
};

export default Nav;
