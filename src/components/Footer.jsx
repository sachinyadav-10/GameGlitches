import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ThemeContext } from '../context/ThemeContext';

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className="footer border-top py-4">
      <Container>
        <Row className="gy-2 d-flex align-items-center">
          <Col xs={12} md={3} className="text-center text-md-start">
            <h2 className="footer-logo">GamesAtlas</h2>
          </Col>
          <Col xs={6} md={3}>
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="footer-link">Gaming</a></li>
              <li><a href="#" className="footer-link">Product</a></li>
              <li><a href="#" className="footer-link">Social Network</a></li>
              <li><a href="#" className="footer-link">Community</a></li>
            </ul>
          </Col>
          <Col xs={6} md={3}>
            <h5 className="footer-heading">Support</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="footer-link">Setting & Privacy</a></li>
              <li><a href="#" className="footer-link">Help & Support</a></li>
              <li><a href="#" className="footer-link">Live Actions</a></li>
              <li><a href="#" className="footer-link">Our News</a></li>
            </ul>
          </Col>
          <Col md={3} className="text-center text-md-end">
            <ul className="list-inline footer-bottom-links mb-0">
              <li className="list-inline-item"><a href="#" className="footer-link">Home</a></li>
              <li className="list-inline-item"><a href="#" className="footer-link">Help Center</a></li>
              <li className="list-inline-item"><a href="#" className="footer-link">Contact</a></li>
              <li className="list-inline-item"><a href="#" className="footer-link">Terms</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
