import { Col } from "react-bootstrap";
import WorkInProgress from "../assets/img/worki-in-progress.svg"

export const UnderConstruction = () => {
    return (
        <Col sm={12} md={12}>
            <div className="work-in-progress">
                <h3>This section is under construction</h3>
                <img src={WorkInProgress} />
            </div>
        </Col>
    )
}