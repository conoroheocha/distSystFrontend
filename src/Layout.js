import { Component } from "react";
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginContainer from './Login';
import Submit from './Submit';
import { Col, Row } from "react-bootstrap";
import GetTimes from './GetTimes';

class Layout extends Component {
    constructor(props) {
        super(props);

        this.ADOLogin = this.setADOLogin.bind(this);
        this.AthleteLogin = this.setAthleteLogin.bind(this);

        this.state = { athleteLogin: "a", adoLogin: "a" }
    }

    setADOLogin = (login) => {
        this.setState({ adoLogin: login });
    }

    setAthleteLogin = (login) => {
        this.setState({ athleteLogin: login });
    }

    submit() {
        if (this.state.athleteLogin !== "") {
            return (
                <Col md={4}>
                    <Submit email={this.state.athleteLogin} />
                </Col>
            )
        }
        else {
            return (
                <Col md={4}>
                    <LoginContainer name={"Athlete Login"} setLogin={this.setAthleteLogin} />
                </Col>
            )
        }
    }

    times() {
        console.log("Hello there")
        console.log(this.state.adoLogin)
        if (this.state.adoLogin !== "") {
            return (
                <Col md={4}>
                    <GetTimes email={this.state.adoLogin} />
                </Col>
            )
        }
        else {
            return (
                <Col md={4}>
                    <LoginContainer name={"Athlete Login"} setLogin={this.setADOLogin} />
                </Col>
            )
        }
    }

    render() {
        return (
            <Row>
                <Col md={4}>
                    {this.submit()}
                </Col>
                <Col md={4}>
                    {this.times()}
                </Col>
            </Row>
        )
    }
}

export default Layout