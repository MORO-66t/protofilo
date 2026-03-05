import { useParams, Link } from "react-router-dom";
import "./project.css";

const projectsData = [
  {
    id: 1,
    title: "Heart Disease Prediction System",
    details:
      "A comprehensive machine learning project that leverages medical data to predict heart disease. The system covers the full ML pipeline including data cleaning, exploratory data analysis, feature engineering, model training, and evaluation using multiple classification algorithms.",
    features: [
      "Data preprocessing and handling missing values in medical datasets.",
      "Feature engineering and selection for optimal model performance.",
      "Comparative evaluation of multiple classification algorithms.",
      "Performance metrics analysis including accuracy, precision, and recall.",
    ],
    Myrole: [
      "Designed the end-to-end ML pipeline from data preprocessing to model evaluation.",
      "Implemented and compared multiple classification models.",
      "Performed feature engineering and data analysis for better predictions.",
    ],
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    github: "https://github.com/MORO-66t",
  },
  {
    id: 2,
    title: "Alphabet Classification using Deep Learning",
    details:
      "A deep learning project for classifying handwritten alphabet characters using the EMNIST dataset. The project explores multiple architectures including custom CNNs, Transfer Learning with pre-trained models, and Vision Transformer (ViT) to achieve high-accuracy character recognition.",
    features: [
      "Custom CNN architecture for character feature extraction.",
      "Transfer Learning with pre-trained models for improved accuracy.",
      "Vision Transformer (ViT) implementation for state-of-the-art results.",
      "Data augmentation techniques to enhance model generalization.",
    ],
    Myrole: [
      "Built and trained CNN, Transfer Learning, and ViT models.",
      "Optimized model hyperparameters and architecture design.",
      "Performed comparative analysis across different deep learning approaches.",
    ],
    tech: ["Python", "TensorFlow", "CNN", "Transfer Learning", "ViT"],
    github: "https://github.com/MORO-66t",
  },
  {
    id: 3,
    title: "Air Quality Prediction System",
    details:
      "A regression-based machine learning project focused on predicting air quality indices using environmental and meteorological data. Includes thorough data analysis, feature engineering, and evaluation of multiple regression models.",
    features: [
      "Environmental data analysis and visualization.",
      "Feature engineering from meteorological variables.",
      "Multiple regression model comparison and evaluation.",
      "Data-driven insights for air quality monitoring.",
    ],
    Myrole: [
      "Conducted exploratory data analysis on environmental datasets.",
      "Engineered features and built regression models for prediction.",
      "Evaluated model performance using standard regression metrics.",
    ],
    tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    github: "https://github.com/MORO-66t",
  },
  {
    id: 4,
    title: "Arabic NLP Auto-Correction",
    details:
      "An NLP-based text correction system designed specifically for Arabic language. Utilizes text preprocessing, tokenization, and language-specific correction algorithms to automatically detect and fix errors in Arabic text.",
    features: [
      "Arabic text tokenization and preprocessing.",
      "Language-based error detection and correction logic.",
      "Support for common Arabic spelling and grammar errors.",
      "NLP pipeline for Arabic natural language processing.",
    ],
    Myrole: [
      "Developed the NLP preprocessing pipeline for Arabic text.",
      "Implemented correction algorithms using linguistic rules.",
      "Tested and refined accuracy on real-world Arabic text samples.",
    ],
    tech: ["Python", "NLP", "Regex", "Arabic Processing"],
    github: "https://github.com/MORO-66t",
  },
  {
    id: 5,
    title: "Generative AI Customer Service Chatbot",
    details:
      "An AI-powered chatbot designed for product-specific customer support. Built with Large Language Models and Retrieval-Augmented Generation (RAG) to provide accurate, context-aware responses. Served via a FastAPI backend for scalable deployment.",
    features: [
      "LLM-powered conversational AI for customer support.",
      "Retrieval-Augmented Generation (RAG) for accurate, grounded responses.",
      "FastAPI backend for scalable API deployment.",
      "Product-specific knowledge base integration.",
    ],
    Myrole: [
      "Designed the RAG architecture and knowledge retrieval pipeline.",
      "Integrated LLM APIs and built the FastAPI backend.",
      "Developed prompt engineering strategies for domain-specific responses.",
    ],
    tech: ["Python", "FastAPI", "LLM", "RAG", "LangChain"],
    github: "https://github.com/MORO-66t",
  },
];

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === Number(id));

  if (!project) return <p>Project not found</p>;

  return (
    <section className="project-details-page">
      <div className="projects-container">
        <Link to="/" className="back-btn">
          &larr; Back
        </Link>

        <h2>{project.title}</h2>
        <p className="details-text">{project.details}</p>

        <h3>Key Features:</h3>
        <ul className="features-list">
          {project.features &&
            project.features.map((f, i) => <li key={i}>{f}</li>)}
        </ul>

        <h3>Technologies Used:</h3>
        <div className="tech-list">
          {project.tech.map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>

        <h3>My Role:</h3>
        <ul className="role-list">
          {project.Myrole &&
            project.Myrole.map((r, i) => <li key={i}>{r}</li>)}
        </ul>

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="github-btn mt-4"
          style={{ display: "inline-block" }}
        >
          <i className="fa-brands fa-github"></i> View on GitHub
        </a>
      </div>
    </section>
  );
};

export default ProjectDetails;
