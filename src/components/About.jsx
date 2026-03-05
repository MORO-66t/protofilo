import "./about.css";

const About = () => {
  return (
    <section id="about" className="about py-5">
      <div className="container">

        {/* About Me */}
        <div className="about-hero mb-5 text-center mx-auto">
          <h2 className="fw-bold mb-3">About Me</h2>

          <p className="fs-5 text-muted">
            I'm an <span>Applied AI Engineer</span> specialized in Generative AI,
            NLP, and building practical machine learning solutions.
          </p>

          <p className="text-muted">
            I design and develop intelligent systems that go beyond academic models &mdash;
            from LLM-powered applications and AI chatbots to prediction pipelines
            and deep learning models. I combine model development, API integration,
            and problem-solving to deliver real-world AI solutions.
          </p>
        </div>

        {/* Education */}
        <div className="about-section mb-5">
          <h3 className="fw-semibold mb-4 text-center">Education</h3>

          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-5">
              <div className="card border-warning p-4 text-center">
                <h5 className="mb-1">Faculty of Computers & Artificial Intelligence</h5>
                <span className="text-muted">Artificial Intelligence Department &mdash; Helwan University</span>
              </div>
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="about-section mb-5 text-center">
          <h3 className="fw-semibold mb-4">Technologies I Work With</h3>

          <div className="d-flex flex-wrap gap-2 justify-content-center">
            {[
              "Python",
              "TensorFlow",
              "PyTorch",
              "Scikit-learn",
              "FastAPI",
              "Pandas",
              "NumPy",
              "LLM APIs",
              "Prompt Engineering",
              "Git & GitHub",
            ].map((tech, i) => (
              <span
                key={i}
                className="badge bg-light text-dark px-3 py-2"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
