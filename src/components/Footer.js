import { Container, Row } from "react-bootstrap"
import { MailchimpForm } from "./MailchimpForm"
import { logo } from "../assets/img/logo.svg";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <MailchimpForm/>
                    <Col sm={6}>
                        <img src={logo} alt="logo" />
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}