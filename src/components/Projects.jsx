import { Link } from "react-router-dom";
import "./project.css";

const projectsData = [
  {
    id: 1,
    title: "Heart Disease Prediction System",
    description:
      "Machine learning project for predicting heart disease using medical data, including preprocessing, feature engineering, and classification model evaluation.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    github: "https://github.com/MORO-66t",
  },
  {
    id: 2,
    title: "Alphabet Classification using Deep Learning",
    description:
      "Deep learning project using CNNs, Transfer Learning, and Vision Transformer for handwritten alphabet classification using EMNIST dataset.",
    tech: ["Python", "TensorFlow", "CNN", "Transfer Learning", "ViT"],
    github: "https://github.com/MORO-66t",
  },
  {
    id: 3,
    title: "Air Quality Prediction System",
    description:
      "Regression-based machine learning project for predicting air quality using environmental data analysis and feature engineering.",
    tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    github: "https://github.com/MORO-66t",
  },
  {
    id: 4,
    title: "Arabic NLP Auto-Correction",
    description:
      "Arabic text correction system using NLP preprocessing and language-based correction logic.",
    tech: ["Python", "NLP", "Regex", "Arabic Processing"],
    github: "https://github.com/MORO-66t",
  },
  {
    id: 5,
    title: "Generative AI Customer Service Chatbot",
    description:
      "AI chatbot designed for product-specific customer support using LLMs, Retrieval-Augmented Generation, and FastAPI.",
    tech: ["Python", "FastAPI", "LLM", "RAG", "LangChain"],
    github: "https://github.com/MORO-66t",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2>Projects</h2>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-body">
                <h4>{project.title}</h4>
                <p>{project.description}</p>

                <div className="tech-list">
                  {project.tech.map((t, i) => (
                    <span key={i}>{t}</span>
                  ))}
                </div>

                <div className="d-flex gap-2 mt-3 flex-wrap">
                  <Link
                    to={`/projects/${project.id}`}
                    className="details-btn"
                    style={{ textDecoration: "none", display: "inline-block" }}
                  >
                    View Details
                  </Link>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="github-btn"
                  >
                    <i className="fa-brands fa-github"></i> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
