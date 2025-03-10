import React from "react";
import ncNewsImg from "../assets/Images/ncnews.png";
import LawvelyImg from "../assets/Images/Law-vely.png";
import profilePictureImage from "../assets/Images/d396b836-6d3e-4b43-887b-47c0e66ad476.jpeg";

const techStack = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Tailwind",
    icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    name: "SQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Supabase",
    icon: "https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png",
  }, // Custom logo
  {
    name: "Netlify",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "C#",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  },
];

const Home: React.FC = () => {
  return (
    <div className="w-full">
      <section id="homePageProfile">
        <div className="max-w-full h-screen flex flex-col justify-center items-center bg-gray-200">
          <img
            src={profilePictureImage}
            alt="profile"
            className="w-85 h-85 rounded-full border-4 border-black shadow-lg object-cover object-top"
          />
          <div className="max-w-240">
            <h1 className="text-5xl font-bold mt-4 text-center line-clamp-5">
              Hey, I'm <span className="text-green-500">Ilyas Baggelaar</span>.
              Here, you can check out what I'm working on. I try my best to
              create things with ❤️
            </h1>
          </div>
        </div>
      </section>
      <section id="featured-work" className="bg-gray-900 text-white py-12">
        <h2 className="text-center text-3xl font-bold">Featured Work</h2>
        <div className="flex justify-center gap-6 mt-8">
          <div className="bg-green-500 p-4 rounded-lg w-64">
            <a href="https://law-vely.netlify.app/">
              <img src={LawvelyImg} className="h-[120px] rounded-b-[] w-full" />
              <h3 className="font-bold">Law-vely</h3>
              <p>Simplifying legislations through OpenAI's API</p>
            </a>
          </div>

          <div className="bg-purple-400 p-4 rounded-lg w-64">
            <a href="https://preeminent-rolypoly-17b3b1.netlify.app/">
              <img src={ncNewsImg} className="h-[120px]" />
              <h3 className="font-bold">NC-News Front-end</h3>
              <p>A news web app that provides user interactivity</p>
            </a>
          </div>

          <div className="bg-blue-400 p-4 rounded-lg w-64">
            <a href="https://nc-news-f67l.onrender.com/api/articles">
              <img
                src="https://community.retool.com/uploads/default/original/3X/3/9/391b836c2f6732b9493891120784fd099b249a6c.png"
                className="h-[120px] rounded-b-none w-full"
              />
              <h3 className="font-bold">NC-News Back-end</h3>
              <p>A fully functional back-end API created from scratch</p>
            </a>
          </div>
        </div>
      </section>

      {/* My Projects - Full Width */}
      <section id="tech-stack" className="w-full py-12 bg-gray-200">
        <h2 className="text-center text-4xl font-bold mb-8">Tech stack</h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-13 gap-6 mx-auto">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="w-24 h-24 flex justify-center items-center bg-white shadow-lg rounded-lg"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-16 h-16 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
