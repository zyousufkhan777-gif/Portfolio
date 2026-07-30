import React from "react";

const About = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-24 text-white">
      <div data-aos="fade-up" className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-600">
          About Me
        </h2>

        <p className="text-gray-400 mt-4 max-w-3xl mx-auto text-lg leading-8">
          I'm a passionate Full Stack MERN Developer who enjoys building modern,
          responsive, and user-friendly web applications. I love solving
          real-world problems through clean code and continuously improving my
          skills by learning new technologies.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div data-aos="fade-right" className="space-y-6">
          <h3 className="text-3xl font-bold text-blue-500">Who I Am</h3>

          <p className="text-gray-300 leading-8">
            My name is{" "}
            <span className="text-white font-semibold">Yousuf Omarzai</span>. I
            specialize in developing full-stack web applications using the MERN
            Stack. I enjoy creating clean, responsive, and scalable websites
            with excellent user experiences.
          </p>

          <p className="text-gray-300 leading-8">
            My goal is to become a professional software engineer and work on
            impactful projects while continuously improving my programming
            skills.
          </p>
        </div>

        {/* Right */}
        <div data-aos="fade-left">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-900 rounded-2xl p-6 text-center hover:scale-105 transition duration-300 shadow-lg">
              <h3 className="text-4xl font-bold text-blue-500">2+</h3>
              <p className="text-gray-300 mt-2">Years Learning</p>
            </div>

            <div className="bg-gray-900 rounded-2xl p-6 text-center hover:scale-105 transition duration-300 shadow-lg">
              <h3 className="text-4xl font-bold text-blue-500">3+</h3>
              <p className="text-gray-300 mt-2">Projects Completed</p>
            </div>

            <div className="bg-gray-900 rounded-2xl p-6 text-center hover:scale-105 transition duration-300 shadow-lg">
              <h3 className="text-4xl font-bold text-blue-500">10+</h3>
              <p className="text-gray-300 mt-2">Technologies</p>
            </div>

            <div className="bg-gray-900 rounded-2xl p-6 text-center hover:scale-105 transition duration-300 shadow-lg">
              <h3 className="text-4xl font-bold text-blue-500">100%</h3>
              <p className="text-gray-300 mt-2">Passion</p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div data-aos="fade-up" className="mt-24">
        <h3 className="text-3xl font-bold text-center text-blue-600 mb-10">
          My Skills
        </h3>

        <div className="flex flex-wrap justify-center gap-4">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Tailwind CSS",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Git",
            "GitHub",
            "REST API",
            "JWT",
          ].map((skill, index) => (
            <span
              key={index}
              className="px-6 py-3 bg-blue-600 rounded-full font-semibold hover:bg-blue-700 transition duration-300 cursor-pointer"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
