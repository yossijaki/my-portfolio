import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg"
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { TypeAnimation } from 'react-type-animation';

export const Banner = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility once>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeInUp" : ""}>
                                    <span className="tagline">Welcome to my Portfolio</span>
                                    <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">{`Hey! I'm`}</h1>
                                    <TypeAnimation 
                                            sequence={[
                                                'Developer', // Types 'One'
                                                2000, // Waits 2s
                                                'Frontend', // Deletes 'One' and types 'Two'
                                                300, // Waits 3ms
                                                'Backend',
                                                200, // Waits 3ms
                                                'FullStack',
                                                1200, // Waits 1.5s
                                                'Yossijaki',
                                                2000,
                                                () => {
                                                    console.log('Sequence completed');
                                                },
                                            ]}
                                            wrapper="span"
                                            cursor={true}
                                            repeat={Infinity}
                                            style={{ fontSize: '65px', display: 'inline-block' }}
                                        />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25} /></button>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Image" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}