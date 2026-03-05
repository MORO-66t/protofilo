import { Container, Row, Col } from "react-bootstrap";
import "./contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact py-5">
      <Container>
        <h2 className="display-6 fw-bold mb-2 text-center">Get in Touch</h2>

        <p className="text-muted text-center mb-5 fs-5">
          Interested in collaborating on AI projects? Let's connect.
        </p>

        <Row className="gy-4 justify-content-center">
          <Col md={6} lg={4}>
            <a
              href="mailto:moro.se.ai@gmail.com"
              className="text-decoration-none"
            >
              <div className="card h-100 border-warning text-center">
                <div className="card-body">
                  <i className="fa-solid fa-envelope text-warning fs-1 mb-3"></i>
                  <h5 className="card-title fw-bold">Email</h5>
                  <p className="text-muted">moro.se.ai@gmail.com</p>
                </div>
              </div>
            </a>
          </Col>

          <Col md={6} lg={4}>
            <a
              href="https://www.linkedin.com/in/mohamed-ragab-se"
              target="_blank"
              rel="noreferrer"
              className="text-decoration-none"
            >
              <div className="card h-100 border-warning text-center">
                <div className="card-body">
                  <i className="fa-brands fa-linkedin text-warning fs-1 mb-3"></i>
                  <h5 className="card-title fw-bold">LinkedIn</h5>
                  <p className="text-muted">mohamed-ragab-se</p>
                </div>
              </div>
            </a>
          </Col>

          <Col md={6} lg={4}>
            <a
              href="https://github.com/MORO-66t"
              target="_blank"
              rel="noreferrer"
              className="text-decoration-none"
            >
              <div className="card h-100 border-warning text-center">
                <div className="card-body">
                  <i className="fa-brands fa-github text-warning fs-1 mb-3"></i>
                  <h5 className="card-title fw-bold">GitHub</h5>
                  <p className="text-muted">MORO-66t</p>
                </div>
              </div>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
