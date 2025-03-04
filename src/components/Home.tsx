import React from "react";
import ncNewsImg from "../assets/Images/ncnews.png"
import LawvelyImg from "../assets/Images/Law-vely.png"

const techStack = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Supabase", icon: "https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png" }, // Custom logo
  { name: "Netlify", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
];

const Home: React.FC = () => {
  return (
    <div className="w-full">
      <div className="max-w-full h-screen flex flex-col justify-center items-center bg-gray-200">
        <img
          src="https://media.licdn.com/dms/image/v2/D4E35AQEEIwbVfHMcJA/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1738593775769?e=1741708800&v=beta&t=VkFEHV88rhY3Zm86yYOS5ujBP6DmDix-Dhh-2ttR17Q"
          alt="Profile"
          className="w-85 h-85 rounded-full border-4 border-black shadow-lg"
        />
        <div className="max-w-240">
        <h1 className="text-5xl font-bold mt-4 text-center line-clamp-5">
          Hey, I'm <span className="text-green-500">Ilyas Baggelaar</span>. Here, you can check out what I'm working on.
          I try my best to create things with ❤️
        </h1>
        </div>
      </div>

      <section className="bg-gray-900 text-white py-12">
        <h2 className="text-center text-3xl font-bold">Featured Work</h2>
        <div className="flex justify-center gap-6 mt-8">
          <div className="bg-green-500 p-4 rounded-lg w-64">
            <img src={LawvelyImg} className="h-[120px] rounded-b-[] w-full"/>
            <h3 className="font-bold">Law-vely</h3>
            <p>Simplifying legislations through OpenAI's API</p>
          </div>
          <div className="bg-purple-400 p-4 rounded-lg w-64">
            <img src={ncNewsImg} className="h-[120px]" />
            <h3 className="font-bold">NC-News Front-end</h3>
            <p>A news web app that provides user interactivity</p>
          </div>
          <div className="bg-blue-400 p-4 rounded-lg w-64">
            <img src="https://community.retool.com/uploads/default/original/3X/3/9/391b836c2f6732b9493891120784fd099b249a6c.png" className="h-[120px] rounded-b-none w-full" />
            <h3 className="font-bold">NC-News Back-end</h3>
            <p>A fully functional back-end API created from scratch</p>
          </div>
        </div>
      </section>

      {/* My Projects - Full Width */}
      <section className="w-full py-12 bg-gray-200">
        <h2 className="text-center text-4xl font-bold mb-8">Tech stack</h2>
        <div className="flex justify-center">

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-15 gap-6 justify-center">
          {techStack.map((tech) => (
            <div key={tech.name} className="w-24 h-24 flex justify-center items-center bg-white shadow-lg rounded-lg">
              <img src={tech.icon} alt={tech.name} className="w-16 h-16 object-contain"/>
            </div>
          ))}
        </div>

        </div>

      </section>
    </div>
  );
};

export default Home;
