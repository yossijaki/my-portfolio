import { Col, Container, Row } from "react-bootstrap"
import logo from "../assets/img/logo.svg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/yossijaki/"><img src={navIcon1} /></a>
                            <a href="https://github.com/yossijaki"><img src={navIcon2} /></a>
                            <a href="https://twitter.com/yossijaki_"><img src={navIcon3} /></a>
                        </div>
                        <p>Copyright 2023. All rights reserved by Yossijaki J.A.C.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}