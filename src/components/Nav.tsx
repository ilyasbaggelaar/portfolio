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
  className={`fixed top-0 left-0 w-full px-5 sm:px-15 py-4 flex items-center justify-between z-50 transition-all duration-300 ${
    scrolled ? "bg-green-500 text-white shadow-lg" : "bg-transparent"
  }`}
>
  <a href="#home">
    <div className="text-2xl sm:text-3xl md:text-4xl font-bold border-2 border-black px-2 py-1 mr-4 sm:mr-10">
      IB
    </div>
  </a>
  <div className="hidden md:flex items-center gap-x-6 lg:gap-x-16">
    {[
      { name: "Featured Work", link: "#featured-work" },
      { name: "Tech Stack", link: "#tech-stack" },
    ].map((item) => (
      <a
        key={item.name}
        href={item.link}
        className="relative group text-lg sm:text-xl font-semibold text-black hover:text-green-800 transition"
      >
        {item.name}
        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
      </a>
    ))}
  </div>
  <a href="#contact-me">
    <button className="text-lg sm:text-xl border-2 border-black px-2 py-1 rounded-lg hover:bg-black hover:text-white transition ml-2 sm:ml-10">
      Contact Me
    </button>
  </a>
</nav>
    </>
  );
};

export default Nav;
