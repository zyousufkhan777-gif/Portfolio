import React from "react";
import { FaGithub } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import yousufimg from "../assets/yousuf.jpg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto min-h-screen flex items-center px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left */}
        <div
          data-aos="fade-right"
          className="flex flex-col gap-8 text-center lg:text-left text-white"
        >
          <div className="space-y-4">
            <p className="text-2xl sm:text-3xl font-bold text-blue-500">
              Hi, I'm
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
              Yousuf Omarzai
            </h1>

            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-blue-500">
              Full Stack Developer
            </h2>

            <p className="text-base sm:text-lg text-gray-300 leading-8 max-w-xl mx-auto lg:mx-0">
              I build modern, fast, responsive, and user-friendly web
              applications using the MERN Stack (MongoDB, Express.js, React.js,
              and Node.js).
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            <button
              onClick={() => navigate("/projects")}
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl font-semibold transition duration-300"
            >
              View Projects
            </button>

            <button
              onClick={() => navigate("/contact")}
              className="border-2 border-white hover:bg-white hover:text-black px-8 py-3 rounded-xl font-semibold transition duration-300"
            >
              Contact Me
            </button>
          </div>

          {/* Social */}
          <div className="flex justify-center lg:justify-start gap-8">
            <a
              href="https://github.com/zyousufkhan777-gif"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="text-4xl sm:text-5xl hover:text-blue-500 hover:scale-110 transition duration-300" />
            </a>

            <a
              href="https://instagram.com/yousuf_omarzai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <BiLogoInstagramAlt className="text-4xl sm:text-5xl hover:text-pink-500 hover:scale-110 transition duration-300" />
            </a>

            <a href="mailto:z.yousufkhan777@gmail.com" aria-label="Email">
              <MdEmail className="text-4xl sm:text-5xl hover:text-red-500 hover:scale-110 transition duration-300" />
            </a>

            <a
              href="https://wa.me/5511922056698"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <IoLogoWhatsapp className="text-4xl sm:text-5xl hover:text-green-500 hover:scale-110 transition duration-300" />
            </a>
          </div>
        </div>

        {/* Right */}
        <div
          data-aos="fade-left"
          className="flex justify-center lg:justify-end"
        >
          <img
            src={yousufimg}
            alt="Yousuf Omarzai"
            loading="lazy"
            className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[430px] lg:h-[430px] rounded-full object-cover border-4 border-blue-600 shadow-2xl hover:scale-105 transition duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
