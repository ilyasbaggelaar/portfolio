import React from "react";

const Home: React.FC = () => {
  return (
    <div className="w-full">
      <div className="max-w-full h-screen flex flex-col justify-center items-center bg-gray-200">
        <img
          src="https://media.licdn.com/dms/image/v2/D4E35AQEEIwbVfHMcJA/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1738593775769?e=1740664800&v=beta&t=HqE2Y93eF_s7Im8KNcACzTV-zIh7p1iSZTBh9pFYrL8"
          alt="Profile"
          className="w-40 h-40 rounded-full border-4 border-black shadow-lg"
        />
        <h1 className="text-5xl font-bold mt-4">
          Hey, I'm <span className="text-green-500">Ilyas Baggelaar</span>.
        </h1>
        <p className="mt-4 text-xl text-gray-700 max-w-2xl text-center">
          Here, you can check out what I'm working on. I try my best to create
          things with ❤️
        </p>
      </div>

      <section className="bg-gray-900 text-white py-12">
        <h2 className="text-center text-3xl font-bold">Featured Work</h2>
        <div className="flex justify-center gap-6 mt-8">
          <div className="bg-green-500 p-4 rounded-lg w-64">
            <h3 className="font-bold">Law-vely</h3>
            <p>Simplifying legislations through OpenAI's API</p>
          </div>
          <div className="bg-purple-400 p-4 rounded-lg w-64">
            <h3 className="font-bold">NC-News Front-end</h3>
            <p>A news web app that provides user interactivity</p>
          </div>
          <div className="bg-blue-400 p-4 rounded-lg w-64">
            <img src="https://community.retool.com/uploads/default/original/3X/3/9/391b836c2f6732b9493891120784fd099b249a6c.png"/>
            <h3 className="font-bold">NC-News Back-end</h3>
            <p>A fully functional back-end API created from scratch</p>
          </div>
        </div>
      </section>

      {/* My Projects - Full Width */}
      <section className="w-full py-12 bg-gray-200">
        <h2 className="text-center text-4xl font-bold">My Projects</h2>
      </section>
    </div>
  );
};

export default Home;
