import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { useState, useEffect } from "react";

export function Portfolio() {
  const [activeSection, setActiveSection] = useState("about");
  const projects = [
    {
      professional: [
        {
          title: "Secure Truck Parking",
          description:
            "Contributed to authentication and login modules. Developed and maintained CRUD functionalities. Assisted in implementing and enhancing application features and user workflows.",
          link: "https://github.com/monikabagiyal588/securetruckparking",
        },
        {
          title: "Digital Business Card (DBC)",
          description: `Developed a full-stack application using Angular, Node.js, and
                  MySQL. Integrated PayPal payment gateway for online
                  transactions. Implemented dynamic business card generation and
                  real-time card preview functionality. Developed user-specific
                  dashboard features and email-related functionalities. Built
                  and integrated REST APIs for seamless frontend-backend
                  communication.`,
          link: "https://github.com/monikabagiyal588/DBC-FrontEnd",
        },
        {
          title: "WebTeachers",
          description: `Worked on frontend development using Angular. Developed
                  responsive UI components and integrated APIs. Improved user
                  experience and application usability.`,
          link: "https://github.com/monikabagiyal588/Webteachers",
        },
        {
          title: "Incus (Entrance Exam Platform)",
          description: `Contributed to frontend development using Angular. Developed
                  and maintained user interface components. Implemented form
                  validations and integrated backend APIs. Assisted in enhancing
                  application performance and user experience.`,
          link: "https://github.com/monikabagiyal588/incus-entrance-exam",
        },
      ],
      personalProject: [
        {
          title: "AI Premium Landing Page",
          liveLink: "https://wondrous-starship-5cdb4d.netlify.app/",
          github: "https://github.com/monikabagiyal588/design-ai-page",
          list: [
            {
              description: `Created clean layouts, reusable components, and
                    mobile-friendly user interfaces.`,
            },
            {
              description: `Designed and developed a modern, responsive landing page
                    using HTML and Tailwind CSS.`,
            },
          ],
        },
        {
          title: "Mobile Shopping App UI",
          liveLink: "https://spontaneous-biscuit-eab5a3.netlify.app/",
          github:
            "https://github.com/monikabagiyal588/bycycle-shopping-app-design",
          list: [
            {
              description: `Developed responsive e-commerce pages using HTML and
                    Tailwind CSS.`,
            },
            {
              description: ` Implemented modern UI components, product listings, and
                    mobile-first design principles.`,
            },
          ],
        },
        {
          title: "Task Management Application (MERN Stack)",
          liveLink: "https://task-management-umber-two.vercel.app/",
          github: "https://github.com/monikabagiyal588/task-management",
          list: [
            {
              description: `Built a full-stack task management application using
                    MongoDB, Express.js, React, and Node.js.`,
            },
            {
              description: `Implemented task creation, editing, deletion, and status
                    management features.`,
            },
            {
              description: `Developed REST APIs and integrated frontend with backend
                    services.`,
            },
          ],
        },
        {
          title: "Smart Hiring Assistant (MERN Stack)",
          list: [
            {
              description: `Currently developing a full-stack recruitment platform using
                    the MERN Stack`,
            },
            {
              description: ` Implementing features such as job posting, candidate
                    management, application tracking, and recruiter dashboards.`,
            },
            {
              description: ` Exploring AI-powered features for candidate screening, job
                    matching, and recruitment workflow automation.`,
            },
          ],
        },
      ],
    },
  ];

  useEffect(() => {
    const section = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(entry);
          if (entry.isIntersecting) {
            console.log("ob 1", entry.target.id);
            setActiveSection(entry.target.id);
            console.log(activeSection);
          }
        });
      },
      {
        threshold: 0.5,
      },
    );

    section.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [activeSection]);
  return (
    <div className="min-h-screen bg-[#182138] text-white  ">
      <div className="grid grid grid-cols-1 md:grid-cols-2  p-20 h-screen ">
        {/* Left section */}
        <div className=" sticky h-fit  ">
          <div className="intro">
            <h1 className="text-4xl font-bold tracking-tight py-2">
              MONIKA RAWAT
            </h1>
            <span className="text-lg text-white font-bold">
              Full stack Developer
            </span>
            <p className="py-2 pr-10">
              I'm a Full Stack Developer with 3.9+ years of experience in
              Angular, Node.js, MySQL, and MongoDB. I have worked on both MEAN
              and MERN stack applications and enjoy building modern, responsive,
              and user-friendly web solutions.
            </p>
          </div>
          <div className="navbar mt-10">
            <ul className="">
              <li
                className={`transition-all duration-300 flex py-2 ${activeSection === "about" ? "!font-bold !text-white !translate-x-5" : "text-gray-400 "}`}
              >
                {" "}
                <hr className="inset-0 my-auto mr-2" />
                <a href="#about">About </a>
              </li>
              <li
                className={` transition-all duration-300 flex py-2 ${activeSection === "experience" ? "!font-bold !text-white !translate-x-5" : "text-gray-400 "}`}
              >
                {" "}
                <hr className="inset-0 my-auto mr-2" />
                <a href="#experience">Experience </a>
              </li>
              <li
                className={`transition-all duration-300 flex py-2 ${activeSection === "projects" ? "!font-bold !text-white !translate-x-5" : "text-gray-400 "}`}
              >
                {" "}
                <hr className="inset-0 my-auto mr-2" />
                <a href="#projects">Projects </a>
              </li>
              <li
                className={`transition-all duration-300 flex py-2 ${activeSection === "personal-project" ? "!font-bold !text-white !translate-x-5" : "text-gray-400 "}`}
              >
                {" "}
                <hr className="inset-0 my-auto mr-2" />
                <a href="#personal-project">
                  Professional Development & Personal Projects
                </a>
              </li>
              <li
                className={`transition-all duration-300 flex py-2 ${activeSection === "skills" ? "!font-bold !text-white !translate-x-5" : "text-gray-400 "}`}
              >
                {" "}
                <hr className="inset-0 my-auto mr-2" />
                <a href="#skills">Skills </a>
              </li>
            </ul>
          </div>
          <div className="left-footer mt-10 py-2">
            <div className="flex gap-5 justify-center">
              {/* GitHub Button */}
              <a
                href="https://github.com/monikabagiyal588/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaGithub className="size-8" />
              </a>
              {/* LinkedIn Button */}
              <a
                href="https://www.linkedin.com/in/monika-bagiyal-8b5b01173/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#0077B5] transition-colors duration-300"
              >
                <FaLinkedin className="size-8" />
              </a>
              {/* Contact Button */}

              <a
                onClick={() =>
                  window.open(
                    "https://mail.google.com/mail/?view=cm&fs=1&to=monikabagiyal8@gmail.com",
                    "_blank",
                  )
                }
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#0077B5] transition-colors duration-300"
              >
                <FaPhone className="size-8" />
              </a>
            </div>
          </div>
        </div>
        {/* RIght section */}
        <div className="main-content py-2 overflow-y-auto  hide-scrollbar w-full ">
          <section id="about" className="about ">
            <p>
              <b>I'm</b>  a Full Stack Developer with 3.9+ years of experience in
              designing and developing web applications. My expertise includes
              Angular, React, Node.js, Express.js, JavaScript, MongoDB, and
              MySQL.
            </p>
            &nbsp;
            <p>
              {" "}
              During my career break, I continued to enhance my technical skills
              by building several full-stack applications using the MERN stack.
              This allowed me to gain hands-on experience with React, MongoDB,
              Express.js, and Node.js .
            </p>
            &nbsp;
            <p>
              {" "}
              I enjoy building scalable, user-friendly, and efficient web
              applications that solve real-world problems. During my career
              break, I continued to strengthen my technical skills by learning
              modern technologies and building several hands-on projects using
              the MERN Stack. These projects helped me gain practical experience
              in React, MongoDB, REST APIs, authentication, CRUD operations, and
              full-stack application development.
            </p>
          </section>
          <section
            id="experience"
            className="experience flex py-20 gap-8 mt-10 "
          >
            <div className="w-[20%] text-lg font-[500]">2019 – 2023</div>
            <div className="w-[80%]">
              <h1 className="text-lg font-[500] ">Full Stack Developer</h1>
              <p className="">
                Worked on the development and maintenance of web applications
                using Angular, Node.js, JavaScript, and MySQL.{" "}
              </p>
              &nbsp;
              <p>
                Collaborated with cross-functional teams to design, develop,
                test, and deploy scalable and user-friendly applications.
              </p>
              &nbsp;
              <h4 className="font-bold">Key Responsibilities:</h4>
              <ul>
                <li>
                  Developed responsive and interactive user interfaces using
                  Angular.
                </li>
                <li>
                  Built and maintained RESTful APIs using Node.js and
                  Express.js.
                </li>
                <li>
                  Designed and managed MySQL databases and optimized database
                  queries.
                </li>
                <li>
                  Integrated frontend applications with backend services and
                  third-party APIs.
                </li>
                <li>
                  Implemented form validations, error handling, and
                  authentication features.
                </li>
                <li>
                  Participated in code reviews, bug fixing, and application
                  performance improvements.
                </li>
                <li>
                  Worked closely with team members throughout the software
                  development lifecycle.
                </li>
              </ul>
              
              <div className="skills flex flex-wrap gap-2 py-4">
                <span className="border rounded-xl px-2">Angular</span>
                <span className="border rounded-xl px-2">Nodejs </span>
                <span className="border rounded-xl px-2">Mysql </span>
                <span className="border rounded-xl px-2">JavaScript</span>
                <span className="border rounded-xl px-2">TypeScript</span>
                <span className="border rounded-xl px-2">Bootstrap</span>
                <span className="border rounded-xl px-2">Github</span>
              </div>
            </div>
          </section>
          <div className="projects ">
            {/* Professional projects */}
            <section id="projects">
              <h1 className="text-2xl font-bold  py-5 underline">Professional Projects (2019–2023)</h1>
              {projects[0].professional.map((project) => (
                <div>
                  <div className="flex gap-5">
                    <h1 className="text-lg font-[500] py-2">{project.title}</h1>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <FaGithub className="size-7" />
                    </a>
                  </div>
                  <p className="pb-7">{project.description}</p>
                </div>
              ))}
            </section>
            {/* Personal projects  */}
            <section id="personal-project">
              <h1 className=" text-2xl font-bold  py-5 underline" >Personal Projects 2023 – Present</h1>
              <p className="pb-7">
                During my career break, I continued to enhance my technical
                skills by learning modern web technologies and building hands-on
                projects. I focused on strengthening my expertise in the MERN
                Stack, frontend development, responsive UI design, and
                full-stack application development.
              </p>
              {projects[0].personalProject.map((project) => (
                <div>
                  <div className="flex gap-5">
                    <a
                      href= { project.liveLink && project.liveLink}
                      target="_blank"
                      className={project.liveLink? `text-blue-600 no-underline hover:underline text-lg font-[500] py-2` :'text-lg font-[500] py-2'}
                  
                    >
                      {project.title}
                    </a>
                    {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-300 inset-0 my-auto"
                    >
                      <FaGithub className="size-7" />
                    </a>
                    )}
                  </div>

                  <ul className="pb-7">
                    {project.list.map((list) => (
                      <li> {list.description} </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
            <div className="py-10">
              <a href="/MONIKAResumeMay2026_lates.pdf" target="_blank">
                <button className="cursor-pointer border rounded-[10px] px-10 py-5 text-xl font-bold">
                  View Full Resume
                </button>
              </a>
            </div>
          </div>
          <section id="skills">
            <div>
              <h1 className=" text-2xl font-bold  py-5 underline">Technical Skills - :</h1>
              <div className="skills flex flex-wrap items-center  gap-2 py-4">
                <span className="border rounded-xl px-2">Angular</span>
                <span className="border rounded-xl px-2">Nodejs </span>
                <span className="border rounded-xl px-2">JavaScript </span>
                <span className="border rounded-xl px-2">TypeScript</span>
                <span className="border rounded-xl px-2">Express.js</span>
                <span className="border rounded-xl px-2">MySQL</span>
                <span className="border rounded-xl px-2">REST APIs</span>
                <span className="border rounded-xl px-2">HTML</span>
                <span className="border rounded-xl px-2">CSS</span>
                <span className="border rounded-xl px-2">Bootstrap</span>
                <span className="border rounded-xl px-2">Github</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
