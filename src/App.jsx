
import "./App.css";
import myPhoto from "./myphoto.jpeg";

const projects = [
  {
    number: "01",
    title: "DrishtiVoice",
    category: "AI • Accessibility • Communication",
    description:
      "Hands-free communication with your eyes and face. Choose meaning with your eyes and face; AI turns it into natural speech. The project aims to help people communicate more easily through an accessible interface.",
    link: "https://drive.google.com/file/d/1jOgFyyfEFMnB22p1ITNZs3e3j0XqA7ro/view?usp=drivesdk",
    button: "View Project PPT",
  },
  {
    number: "02",
    title: "Agent AutoTuner",
    category: "AI • Intelligent Agents • Automation",
    description:
      "We are developing an agent that automatically searches for and selects the best agent to complete a task given by a developer. The goal is to simplify agent selection and improve task execution.",
    link: "https://drive.google.com/file/d/10-xzubIQ4-j7nQ7dTvIyWQHksathLNtX/view?usp=drivesdk",
    button: "View Project PPT",
  },
];

const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

function App() {
  return (
    <div className="portfolio">
      <header className="navbar">
        <a className="logo" href="#home">
          LK<span>.</span>
        </a>

        <nav>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-content">
            <p className="eyebrow">STUDENT • DEVELOPER • DREAMER</p>
            <h1>
              Hi, I'm <span>Lakshmi K.</span>
            </h1>
            <h2>A Computer Science Student & Aspiring Product Developer</h2>
            <p className="hero-description">
              I enjoy exploring technology, developing ideas, and building
              solutions that can make a meaningful difference.
            </p>

            <div className="hero-buttons">
              <a className="btn primary-btn" href="#projects">
                Explore My Projects ↗
              </a>
              <a className="btn secondary-btn" href="#contact">
                Contact Me
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/lakshmi-gowda-b001a9331"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://github.com/Lakshmik21"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <div className="image-decoration"></div>
            <img
              src={myPhoto}
              alt="Lakshmi K. - Student Profile"
              className="profile-photo"
            />
            <div className="floating-card">
              <span>🎓</span>
              <div>
                <strong>BTech CSE</strong>
                <p>3rd Year Student</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="section-heading">
            <p className="eyebrow">GET TO KNOW ME</p>
            <h2>About <span>Me</span></h2>
          </div>

          <div className="about-grid">
            <div className="about-card">
              <span className="card-icon">💡</span>
              <h3>Who I Am</h3>
              <p>
                I'm Lakshmi K., a Computer Science and Engineering student at
                CMR University, Lakeside Campus. I'm interested in technology,
                creative problem-solving, and developing useful digital
                products.
              </p>
            </div>

            <div className="about-card goal-card">
              <span className="card-icon">🚀</span>
              <h3>Short-Term Goal</h3>
              <p>
                My short-term goal is to become a product developer, turn ideas
                into practical solutions, and develop my technical and
                problem-solving skills.
              </p>
            </div>

            <div className="about-card goal-card">
              <span className="card-icon">🌍</span>
              <h3>Long-Term Goal</h3>
              <p>
                My long-term goal is to travel across the world, explore
                different cultures, discover new places, and gain experiences
                that broaden my perspective.
              </p>
            </div>
          </div>
        </section>

        <section className="section education-section" id="education">
          <div className="section-heading">
            <p className="eyebrow">MY LEARNING JOURNEY</p>
            <h2>My <span>Education</span></h2>
            <p>Every step has helped shape the person I am becoming.</p>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-number">01</span>
                <h3>Schooling</h3>
                <h4>Amara Jyothi School of Institutions</h4>
                <p>
                  Completed my schooling and built the foundation for my
                  academic journey.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-number">02</span>
                <h3>High School</h3>
                <h4>New Baldwin Group of Institutions</h4>
                <p>
                  Completed my high school education and continued developing
                  my academic interests.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-number">03</span>
                <h3>Undergraduate Education</h3>
                <h4>CMR University, Lakeside Campus</h4>
                <p>
                  Currently pursuing BTech in Computer Science and Engineering
                  (CSE), in my third year.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">WHAT I WORK WITH</p>
            <h2>My <span>Skills</span></h2>
          </div>

          <div className="skills-list">
            {skills.map((skill) => (
              <div className="skill-chip" key={skill}>
                <span>✦</span> {skill}
              </div>
            ))}
          </div>
          <p className="skills-note">
            Continuously learning, experimenting, and improving my development
            skills.
          </p>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">IDEAS INTO ACTION</p>
            <h2>Featured <span>Projects</span></h2>
            <p>Explore the projects I'm working on and the ideas behind them.</p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-symbol">↗</span>
                </div>

                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <a
                  className="project-link"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.button} <span>↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-card">
            <p className="eyebrow">LET'S CONNECT</p>
            <h2>Have an idea? Let's <span>connect.</span></h2>
            <p>
              I'm always interested in learning, exchanging ideas, and
              connecting with people who enjoy building meaningful things.
            </p>

            <a className="btn primary-btn" href="mailto:lakshmigowda0033@gmail.com">
              Send Me an Email ↗
            </a>

            <div className="contact-details">
              <div>
                <span>EMAIL</span>
                <a href="mailto:lakshmigowda0033@gmail.com">
                  lakshmigowda0033@gmail.com
                </a>
              </div>

              <div>
                <span>LINKEDIN</span>
                <a
                  href="https://www.linkedin.com/in/lakshmi-gowda-b001a9331"
                  target="_blank"
                  rel="noreferrer"
                >
                  View LinkedIn Profile ↗
                </a>
              </div>

              <div>
                <span>GITHUB</span>
                <a
                  href="https://github.com/Lakshmik21"
                  target="_blank"
                  rel="noreferrer"
                >
                  View GitHub Profile ↗
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="logo" href="#home">
          LK<span>.</span>
        </a>
        <p>Designed with purpose by Lakshmi K.</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
