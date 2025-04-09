import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 font-serif">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 shadow-md fixed top-0 w-full z-50 bg-white dark:bg-gray-800">
        <div className="text-2xl font-bold cursor-pointer" onClick={() => scrollToSection("home")}>
          Olatunde Jesse
        </div>
        <div className="space-x-6 hidden md:block">
          <button onClick={() => scrollToSection("about")}>About</button>
          <button onClick={() => scrollToSection("skills")}>Skills</button>
          <button onClick={() => scrollToSection("projects")}>Projects</button>
          <button onClick={() => scrollToSection("contact")}>Contact</button>
          <button onClick={() => scrollToSection("resume")}>Resume</button>
        </div>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-700" />}
        </button>
      </nav>

      {/* Hero */}
      <header id="home" className="pt-24 text-center bg-gradient-to-br from-blue-100 to-purple-200 dark:from-gray-800 dark:to-gray-700 transition-all">
        <h1 className="text-5xl font-bold">Olatunde Jesse</h1>
        <p className="text-xl mt-4">Web Designer & Developer</p>
      </header>

      {/* About Section */}
      <section id="about" className="container mx-auto px-6 py-16 max-w-5xl">
        <h2 className="text-3xl font-semibold mb-4 text-center">About Me</h2>
        <p className="text-lg leading-relaxed text-center">
          I’m a passionate web designer and developer with a focus on creating elegant and user-friendly websites.
          I also bring solid experience in automation, billing, Unix systems, and SLA management.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container mx-auto px-6 py-16 max-w-6xl">
        <h2 className="text-3xl font-semibold mb-10 text-center">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-lg">
          {[
            { title: "HTML & CSS", color: "blue", desc: "Responsive and modern layouts." },
            { title: "JavaScript", color: "green", desc: "Interactive and dynamic interfaces." },
            { title: "React & Tailwind", color: "yellow", desc: "Modern, scalable web apps." },
            { title: "Python", color: "purple", desc: "Scripting and automation tools." },
            { title: "Node.js", color: "orange", desc: "Backend APIs and services." },
            { title: "Git", color: "teal", desc: "Version control and collaboration." },
            { title: "UI/UX Design", color: "indigo", desc: "Intuitive and accessible designs." },
            { title: "Unix", color: "red", desc: "Working with Unix-based systems." },
            { title: "SQL", color: "blue", desc: "Data querying and database management." },
            { title: "Automation", color: "pink", desc: "Workflow optimization and scripting." },
            { title: "Billing", color: "gray", desc: "Billing systems and financial processes." },
            { title: "SLA", color: "yellow", desc: "Service Level Agreement compliance." }
          ].map((skill, i) => (
            <div key={i} className={`bg-${skill.color}-100 dark:bg-gray-800 p-6 rounded-lg shadow-md`}>
              <h3 className={`font-semibold text-xl text-${skill.color}-600 dark:text-${skill.color}-300`}>
                {skill.title}
              </h3>
              <p className="mt-3 text-gray-700 dark:text-gray-300">{skill.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-6 py-16 max-w-6xl">
        <h2 className="text-3xl font-semibold mb-10 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Portfolio Website",
              image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d",
              desc: "A sleek, responsive portfolio built with React and Tailwind CSS."
            },
            {
              title: "E-commerce Homepage",
              image: "https://images.unsplash.com/photo-1599658880436-c61792e70672",
              desc: "Modern homepage design for online stores, mobile-first."
            },
            {
              title: "Landing Page UI",
              image: "https://images.unsplash.com/photo-1510924014959-7e1849088bfe",
              desc: "Minimalist and high-conversion layout using HTML/CSS."
            }
          ].map((project, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-3 text-gray-600 dark:text-gray-300">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Resume Download Section */}
      <section id="resume" className="text-center py-16 bg-gradient-to-r from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <h2 className="text-3xl font-semibold mb-6">Resume</h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300">Download a copy of my resume in PDF format.</p>
        <a
          href="/OlatundeJesse.pdf"
          download
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition"
        >
          Download Resume
        </a>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-6 py-16 max-w-5xl">
        <h2 className="text-3xl font-semibold mb-6 text-center">Contact</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-lg">
          <div className="flex items-center space-x-4">
            <span className="font-semibold">Email:</span>
            <span>olatundejesse@gmail.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="font-semibold">Phone:</span>
            <span>08103165387</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Olatunde Jesse. All rights reserved.
      </footer>
    </div>
  );
}
