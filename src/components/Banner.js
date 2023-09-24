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
                                    <span className="tagline">Welcome to my space</span>
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
                                    <p>I'm a little too much multifaceted person, I know different things from different areas and I apply those knowledges to my day to day life, not only at work but also on every activity I do on my life and I love it! Because those knowledges have taken me to where I am now and I hope way more far.</p>
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