import { Component } from "react";
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginContainer from './Login';
import Submit from './Submit';
import { Col, Container, Row } from "react-bootstrap";
import GetTimes from './GetTimes';

class Layout extends Component {
    constructor(props) {
        super(props);

        this.setADOLogin = this.setADOLogin.bind(this);
        this.setAthleteLogin = this.setAthleteLogin.bind(this);

        this.state = { athleteLogin: "", adoLogin: "" }
    }

    setADOLogin = (login) => {
        console.log(login)
        this.setState({ adoLogin: login });
    }

    setAthleteLogin = (login) => {
        this.setState({ athleteLogin: login });
    }

    submit() {
        if (this.state.athleteLogin !== "") {
            return (
                <Col>
                    <Submit email={this.state.athleteLogin} />
                </Col>
            )
        }
        else {
            return (
                <Col>
                    <LoginContainer name={"Athlete Login"} setLogin={this.setAthleteLogin} type={"/loginAthlete"} />
                </Col>
            )
        }
    }

    times() {
        if (this.state.adoLogin !== "") {
            return (
                <Col>
                    <GetTimes email={this.state.adoLogin} />
                </Col>
            )
        }
        else {
            return (
                <Col>
                    <LoginContainer name={"ADO Login"} setLogin={this.setADOLogin} type={"/loginAdo"} />
                </Col>
            )
        }
    }

    render() {
        return (
            <Container fluid="true">
                <Row>
                    <Col>
                        {this.submit()}
                    </Col>
                    <Col>
                        {this.times()}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Layout