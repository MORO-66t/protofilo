import { Container, Row, Col } from "react-bootstrap";
import "./skills.css";

const skillGroups = [
  {
    category: "Core AI",
    items: [
      { name: "Generative AI", level: "Advanced" },
      { name: "NLP", level: "Advanced" },
      { name: "Machine Learning", level: "Advanced" },
      { name: "Deep Learning", level: "Advanced" },
      { name: "Computer Vision", level: "Intermediate" },
      { name: "Prompt Engineering", level: "Advanced" },
    ],
  },
  {
    category: "Frameworks & Tools",
    items: [
      { name: "Python", level: "Advanced" },
      { name: "FastAPI", level: "Intermediate" },
      { name: "Scikit-learn", level: "Advanced" },
      { name: "TensorFlow", level: "Intermediate" },
      { name: "PyTorch", level: "Intermediate" },
      { name: "Pandas", level: "Advanced" },
      { name: "NumPy", level: "Advanced" },
    ],
  },
  {
    category: "Deployment & Engineering",
    items: [
      { name: "Git", level: "Intermediate" },
      { name: "API Integration", level: "Intermediate" },
      { name: "Model Evaluation", level: "Intermediate" },
      { name: "Data Preprocessing", level: "Advanced" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills py-5">
      <Container>
        <h2 className="skills-title">Skills</h2>

        {skillGroups.map((group, gi) => (
          <div key={gi} className="mb-5">
            <h4 className="skills-category">{group.category}</h4>
            <Row className="gy-4 justify-content-center">
              {group.items.map((skill, index) => (
                <Col key={index} xs={12} sm={6} lg={3}>
                  <div className="skill-card">
                    <h5>{skill.name}</h5>
                    <span className="skill-level">{skill.level}</span>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Container>
    </section>
  );
};

export default Skills;
