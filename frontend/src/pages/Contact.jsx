import React from "react";
import { FaGithub, FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-24 text-white">
      {/* Heading */}
      <div data-aos="fade-up" className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600">
          Contact Me
        </h1>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
          Feel free to contact me through any of the platforms below. I'm always
          open to discussing new projects, opportunities, or collaborations.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Email */}
        <a
          href="mailto:z.yousufkhan777@gmail.com"
          data-aos="fade-up"
          className="bg-gray-900 rounded-2xl p-8 flex flex-col items-center hover:-translate-y-2 hover:shadow-xl transition duration-300"
        >
          <MdEmail className="text-6xl text-red-500 mb-5" />
          <h2 className="text-2xl font-bold mb-2">Email</h2>
          <p className="text-gray-400 text-center break-all">
            z.yousufkhan777@gmail.com
          </p>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/5511922056698"
          target="_blank"
          rel="noopener noreferrer"
          data-aos="fade-up"
          data-aos-delay="100"
          className="bg-gray-900 rounded-2xl p-8 flex flex-col items-center hover:-translate-y-2 hover:shadow-xl transition duration-300"
        >
          <FaWhatsapp className="text-6xl text-green-500 mb-5" />
          <h2 className="text-2xl font-bold mb-2">WhatsApp</h2>
          <p className="text-gray-400">+55 11 92205-6698</p>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/zyousufkhan777-gif"
          target="_blank"
          rel="noopener noreferrer"
          data-aos="fade-up"
          data-aos-delay="200"
          className="bg-gray-900 rounded-2xl p-8 flex flex-col items-center hover:-translate-y-2 hover:shadow-xl transition duration-300"
        >
          <FaGithub className="text-6xl mb-5" />
          <h2 className="text-2xl font-bold mb-2">GitHub</h2>
          <p className="text-gray-400">View My Projects</p>
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com/yousuf_omarzai"
          target="_blank"
          rel="noopener noreferrer"
          data-aos="fade-up"
          data-aos-delay="300"
          className="bg-gray-900 rounded-2xl p-8 flex flex-col items-center hover:-translate-y-2 hover:shadow-xl transition duration-300"
        >
          <FaInstagram className="text-6xl text-pink-500 mb-5" />
          <h2 className="text-2xl font-bold mb-2">Instagram</h2>
          <p className="text-gray-400">Follow Me</p>
        </a>
      </div>
    </section>
  );
};

export default Contact;
