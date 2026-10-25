import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "EduHub LMS",
    description:
      "A full-stack Learning Management System built with the MERN Stack. Features include authentication, student dashboard, instructor panel, admin dashboard, course management, and responsive UI.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/zyousufkhan777-gif/EduHub-LMS",
    demo: "https://edu-hub-lms-7jkz.vercel.app/",
  },
  {
    id: 2,
    title: "Hospital Management",
    description:
      "A complete hospital management system with appointment booking, doctor dashboard, admin panel, patient management, authentication, and responsive design.",
    technologies: ["React", "Express", "MongoDB", "JWT", "Tailwind CSS"],
    github: "https://github.com/zyousufkhan777-gif/Hospital-booking-system",
    demo: "https://hospital-booking-system-cbrf.vercel.app",
  },
  {
    id: 3,
    title: "E-Commerce Website",
    description:
      "A responsive full-stack e-commerce platform developed with the MERN Stack. Users can browse products, search by category, add items to the cart, place orders, manage their profiles, and complete secure checkout. The application also includes an admin dashboard for product, order, and user management.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Redux Toolkit",
      "Cloudinary",
    ],
    github: "https://github.com/zyousufkhan777-gif/E-commerce-website-project",
    demo: "https://e-commerce-website-project-eight.vercel.app/",
  },
  {
    id: 4,
    title: "Deniza Restaurant",
    description:
      "A responsive full-stack restaurant ordering platform developed with the MERN Stack. Users can browse foods, search by category, create accounts, manage their cart, place orders, and complete checkout. The application also includes a separate admin dashboard for food, order, user, and contact management.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Axios",
      "Cloudinary",
    ],
    github: "YOUR_GITHUB_REPOSITORY_URL",
    demo: "https://deniza-restaurant.vercel.app/",
  },

  {
    id: 5,
    title: "JobHub",
    description:
      "A full-stack job search and recruitment platform developed with the MERN Stack. Users can explore job opportunities, search and filter jobs, view company profiles, save jobs, upload PDF resumes, and apply for positions. The platform also includes authentication, user profile management, company job management, and resume upload functionality.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Redux Toolkit",
      "Axios",
      "Cloudinary",
    ],
    github: "YOUR_JOBHUB_GITHUB_REPOSITORY_URL",
    demo: "https://job-hub-com.vercel.app/",
  },

];

const Projects = () => {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-24 text-white">
      {/* Heading */}
      <div data-aos="fade-up" className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600">
          My Projects
        </h1>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
          Here are some of the projects I have built using the MERN Stack and
          modern web technologies.
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={project.id}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
            className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:-translate-y-2 transition duration-300"
          >
            <h2 className="text-2xl font-bold text-blue-500 mb-4">
              {project.title}
            </h2>

            <p className="text-gray-300 leading-7 mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-blue-600 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-500 transition"
              >
                <FaGithub />
                GitHub
              </a>

              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-green-500 transition"
              >
                <FaExternalLinkAlt />
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
