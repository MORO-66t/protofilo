import { Container, Row, Col } from "react-bootstrap";
import "./experience.css";

const experiences = [
  {
    title: "Generative AI Engineering Trainee",
    org: "Digital Egypt Pioneers Initiative (DEPI)",
    description:
      "Hands-on training in Generative AI, prompt engineering, LLM APIs, AI automation, and practical AI applications.",
  },
  {
    title: "Independent AI Projects Developer",
    org: "Self-Directed",
    description:
      "Building AI solutions in NLP, deep learning, optimization, and predictive systems — from data preprocessing to model deployment.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience py-5">
      <Container>
        <h2 className="experience-title">Experience</h2>

        <Row className="gy-4 justify-content-center">
          {experiences.map((exp, index) => (
            <Col key={index} md={6}>
              <div className="experience-card">
                <h5>{exp.title}</h5>
                <span className="exp-org">{exp.org}</span>
                <p>{exp.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
