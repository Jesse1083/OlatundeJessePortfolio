import React, { useState, useEffect } from "react";
import { FaSun, FaMoon, FaCogs } from "react-icons/fa";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiPython, SiGit, SiFigma, SiSqlite } from "react-icons/si";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-vh-100 bg-light dark:bg-dark text-dark dark:text-light font-serif">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light dark:bg-dark fixed-top shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand" href="#home">Olatunde Jesse</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button className="nav-link" onClick={() => scrollToSection("about")}>About</button>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={() => scrollToSection("skills")}>Skills</button>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={() => scrollToSection("projects")}>Projects</button>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={() => scrollToSection("achievements")}>Achievements</button>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={() => scrollToSection("experience")}>Experience</button>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={() => scrollToSection("contact")}>Contact</button>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={() => scrollToSection("resume")}>Resume</button>
              </li>
            </ul>
            <button onClick={() => setDarkMode(!darkMode)} className="btn btn-outline-secondary ms-3">
              {darkMode ? <FaSun className="text-warning" /> : <FaMoon />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header
        id="home"
        className="container-fluid text-center py-5 mt-5"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div>
          <h1 className="display-1 fw-bolder mb-3 text-uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Olatunde Jesse
          </h1>
          <p className="lead mb-5 text-uppercase" style={{ fontFamily: "'Roboto', sans-serif", fontWeight: "bold", fontSize: "1.5rem" }}>
            Web Designer & Developer
          </p>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="container py-5">
        <h2 className="text-center mb-4">About Me</h2>
        <p className="text-center">
          I’m a passionate web designer and developer with a focus on creating elegant and user-friendly websites.
          I also bring solid experience in automation, billing, Unix systems, and SLA management.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container py-5">
        <h2 className="text-center mb-5">Skills</h2>
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 text-center">
          <div className="col mb-4">
            <div className="card p-3">
              <SiHtml5 size={50} className="text-danger mb-3" />
              <h5>HTML</h5>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card p-3">
              <SiCss3 size={50} className="text-primary mb-3" />
              <h5>CSS</h5>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card p-3">
              <SiJavascript size={50} className="text-warning mb-3" />
              <h5>JavaScript</h5>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card p-3">
              <SiReact size={50} className="text-info mb-3" />
              <h5>React</h5>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card p-3">
              <SiTailwindcss size={50} className="text-cyan-500 mb-3" />
              <h5>TailwindCSS</h5>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card p-3">
              <SiPython size={50} className="text-blue-500 mb-3" />
              <h5>Python</h5>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card p-3">
              <SiGit size={50} className="text-orange-500 mb-3" />
              <h5>Git</h5>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card p-3">
              <SiFigma size={50} className="text-purple-600 mb-3" />
              <h5>Figma</h5>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card p-3">
              <SiSqlite size={50} className="text-green-500 mb-3" />
              <h5>SQL</h5>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container py-5 bg-light">
        <h2 className="text-center mb-4">Projects</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
          <div className="col mb-4">
            <div className="card">
              <img src="https://media.istockphoto.com/id/992782254/photo/close-up-soft-focus-on-telephone-devices-at-office-desk-for-customer-service-support-concept.jpg?b=1&s=612x612&w=0&k=20&c=4zdNz6BLS8UnUnkXW8ZYRw1yyuqftBeIg31jQQJOFE4=" className="card-img-top" alt="Outbound LOB Ticketing Web Application" />
              <div className="card-body">
                <h5 className="card-title">Outbound LOB Ticketing Web Application</h5>
                <p className="card-text">A web-based application developed for managing outbound LOB tickets effectively.</p>
              </div>
            </div>
          </div>

          <div className="col mb-4">
            <div className="card">
              <img src="https://media.istockphoto.com/id/1088363648/photo/marketing-leads-and-sales-concept.jpg?b=1&s=612x612&w=0&k=20&c=zKrS1yUZoxbGii4mvU01M6yqwD4ZF4ZmJ3i9Sd84-gc=" className="card-img-top" alt="Lead Management Web Application" />
              <div className="card-body">
                <h5 className="card-title">Lead Management Web Application</h5>
                <p className="card-text">A web-based tool for the marketing team to manage, submit, and track leads along with complaints and requests.</p>
              </div>
            </div>
          </div>

          <div className="col mb-4">
            <div className="card">
              <img src="https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="NIMC Server Status Display Web Application" />
              <div className="card-body">
                <h5 className="card-title">NIMC Server Status Display Web Application</h5>
                <p className="card-text">A tool developed for IT and customer care teams to fetch and display NIMC server status in real-time.</p>
              </div>
            </div>
          </div>

          <div className="col mb-4">
            <div className="card">
              <img src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=600" />
              <div className="card-body">
                <h5 className="card-title">KYC Validation Web Application</h5>
                <p className="card-text">A web app built to validate customer details during onboarding and ensure KYC compliance.</p>
              </div>
            </div>
          </div>

          <div className="col mb-4">
            <div className="card">
              <img src="https://media.istockphoto.com/id/1468757785/photo/human-resources-and-management-concept-employee-must-complete-the-online-survey-form-marked.jpg?b=1&s=612x612&w=0&k=20&c=ywWxlHtTEGAcdctBB9AZ9Dn4wu7Y19oWiAc7P5h8zDI=" />
              <div className="card-body">
                <h5 className="card-title">SIM Registration Portal Monitor</h5>
                <p className="card-text">A monitoring web app to track SIM registration status and manage real-time updates.</p>
              </div>
            </div>
          </div>

          <div className="col mb-4">
            <div className="card">
              <img src="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="NIN Fetching Software" />
              <div className="card-body">
                <h5 className="card-title">NIN Fetching Software</h5>
                <p className="card-text">Software built to fetch and update user NIN details in real-time for various systems.</p>
              </div>
            </div>
          </div>

          <div className="col mb-4">
            <div className="card">
              <img src="https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="SANJEVINI Web Application" />
              <div className="card-body">
                <h5 className="card-title">SANJEVINI Web Application</h5>
                <p className="card-text">A healthcare-focused web application to manage patient information and records.</p>
              </div>
            </div>
          </div>

          <div className="col mb-4">
            <div className="card">
              <img src="https://images.pexels.com/photos/30945616/pexels-photo-30945616/free-photo-of-bonus-word-on-scrabble-letter-tiles.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="DYD Offer Page Control Web Application" />
              <div className="card-body">
                <h5 className="card-title">DYD Offer Page Control Web Application</h5>
                <p className="card-text">A tool to help admin control and customize offers and promotions displayed on the platform.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Sections like Achievements, Experience, Contact, etc. */}

      <section id="achievements" className="container py-5">
  <h2 className="text-center mb-4">Key Achievements</h2>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">
      ✅ Developed an outbound LOB ticketing web application to streamline ticket management.
    </li>
    <li className="list-group-item">
      ✅ Created a Lead Management web application for the marketing team to track, submit, and manage leads and complaints.
    </li>
    <li className="list-group-item">
      ✅ Built a NIMC Server Status Display web tool for real-time monitoring by IT, activation, and customer care teams.
    </li>
    <li className="list-group-item">
      ✅ Automated key reports and internal operational processes, reducing manual effort and error rates.
    </li>
    <li className="list-group-item">
      ✅ Developed a KYC Validation application to assist the activation team in accurate and compliant customer onboarding.
    </li>
    <li className="list-group-item">
      ✅ Scripted an automated solution using Shell to monitor and restart the SIM registration portal upon failure.
    </li>
    <li className="list-group-item">
      ✅ Created a system that fetches NINs of customers who hadn't submitted them, by securely consuming NIMC endpoints.
    </li>
    <li className="list-group-item">
      ✅ Developed the SANJEVINI web application with marketing-focused modules and functionalities.
    </li>
    <li className="list-group-item">
      ✅ Built the DYD Offer Page Control system, empowering marketing teams to customize and manage offers efficiently.
    </li>
    <li className="list-group-item">
      ✅ Designed and deployed MBA web applications for managing multi-based accounts with advanced user and data controls.
    </li>
  </ul>
</section>

<section id="experience" className="container py-5">
  <h2 className="text-center mb-4">Professional Experience</h2>
  
  <div className="mb-4">
    <h4 className="fw-bold">Lead TechOps Engineer – Tecnoree (2024 – Present)</h4>
    <p>
      Oversee and manage the wholesale billing system (WBS), ensuring seamless automation and real-time SLA monitoring across partner networks. Led major integrations and resolved technical incidents with efficiency.
    </p>
    <ul>
      <li>Managed and automated reports for wholesale billing systems.</li>
      <li>Built internal tools to monitor SLA KPIs and ensure proactive alerting.</li>
      <li>Improved partner integration time by automating onboarding steps.</li>
    </ul>
  </div>

  <div className="mb-4">
    <h4 className="fw-bold">CRM Analyst – 9mobile (2023 – 2024)</h4>
    <p>
      Played a central role in customer data analysis, CRM platform maintenance, and team support operations across the Huawei BES and Alepo CRM systems.
    </p>
    <ul>
      <li>Handled integration and report delivery across multiple CRM platforms.</li>
      <li>Developed scripts for automated CRM data extraction and transformation.</li>
      <li>Worked closely with marketing and activation teams to improve data visibility.</li>
    </ul>
  </div>

  <div className="mb-4">
    <h4 className="fw-bold">Billing Engineer – Spectranet (2019 – 2023)</h4>
    <p>
      Supported the CSMART CRM and TopENG billing systems with a focus on system uptime, billing cycle accuracy, and customer care troubleshooting tools.
    </p>
    <ul>
      <li>Optimized and maintained monthly billing cycles across multiple plans.</li>
      <li>Reduced error rates in bill generation by implementing automated QA checks.</li>
      <li>Developed and supported internal dashboards for usage and performance reports.</li>
    </ul>
  </div>
</section>



      {/* Resume Download Section */}
      <section id="resume" className="container text-center py-5">
        <h2 className="mb-4">Download My Resume</h2>
        <p className="mb-3">Click the button below to download my resume in PDF format.</p>
        <a
          href="/resume.pdf"
          download="OlatundeJesse.pdf"
          className="btn btn-primary btn-lg"
        >
          Download Resume
        </a>
      </section>

      <section id="contact" className="container py-5">
  <h2 className="text-center mb-4">Contact</h2>
  
  <div className="row justify-content-center">
    <div className="col-md-6 text-center">
      <p className="fs-5">
        Feel free to reach out for collaborations, project discussions, or professional inquiries.
      </p>

      <div className="my-4">
        <h5>Email</h5>
        <a href="mailto:olatundejesse@gmail.com" className="text-decoration-none">
          olatundejesse@gmail.com
        </a>
      </div>

      <div className="my-4">
        <h5>Phone</h5>
        <a href="tel:08103165387" className="text-decoration-none">
          08103165387
        </a>
      </div>

      <div className="d-flex justify-content-center gap-3 mt-4">
        <a href="https://www.linkedin.com/in/jesse-o-9a390a82/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">
          LinkedIn
        </a>
        <a href="https://jesse1083.github.io/OlatundeJessePortfolio/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark">
          GitHub
        </a>
      </div>
    </div>
  </div>
</section>

<footer className="bg-light dark:bg-dark text-center py-4 mt-5 border-top">
  <div className="container">
    <p className="mb-2">
      &copy; {new Date().getFullYear()} <strong>Olatunde Jesse</strong>. All rights reserved.
    </p>
    <div className="d-flex justify-content-center gap-3">
      <a href="mailto:olatundejesse@gmail.com" className="text-decoration-none text-muted">
        Email
      </a>
      <a href="https://www.linkedin.com/in/jesse-o-9a390a82/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-muted">
        LinkedIn
      </a>
      <a href="https://jesse1083.github.io/OlatundeJessePortfolio/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-muted">
        GitHub
      </a>
    </div>
  </div>
</footer>


    </div>
  );
}
