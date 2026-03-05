import { useState, useEffect } from "react";
import "./hero.css";

const roles = ["Generative AI", "NLP", "Deep Learning"];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      const delta = isDeleting ? 60 : 100;
      timeout = setTimeout(() => {
        setText(current.substring(0, text.length + (isDeleting ? -1 : 1)));
      }, delta);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section id="home" className="hero">
      <div className="container">

        <div className="row align-items-center gy-5">

          {/* Left Content */}
          <div className="col-lg-7 text-center text-lg-start">
            <p className="hero-label">Applied AI Engineer</p>
            <h1 className="hero-title">
              Hi, I'm <span>Mohamed Ragab</span>
            </h1>

            <p className="hero-typing">
              <span className="typing-text">{text}</span>
              <span className="typing-cursor">|</span>
            </p>

            <p className="hero-desc">
              I build intelligent systems powered by Generative AI, NLP, and Deep Learning &mdash;
              from LLM-driven chatbots and prediction pipelines to end-to-end machine learning solutions.
            </p>

            <div className="d-flex gap-3 mt-4 justify-content-center justify-content-lg-start">
              <a href="#projects" className="primary-btn">
                Explore My Work
              </a>
              <a href="#contact" className="secondary-btn">
                Let's Connect
              </a>
            </div>

            {/* Social Links */}
            <div className="hero-socials justify-content-center justify-content-lg-start">
              <a
                href="https://github.com/MORO-66t"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/mohamed-ragab-se"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Right — Photo */}
          <div className="col-lg-5 text-center">
            <div className="hero-img-wrapper">
              <img
                src={process.env.PUBLIC_URL + "/M.jpg"}
                alt="Mohamed Ragab"
                className="hero-img"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
