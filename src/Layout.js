import { Component } from "react";
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginContainer from './Login';
import Submit from './Submit';
import { Col, Row, Container } from "react-bootstrap";
import GetTimes from './GetTimes';

class Layout extends Component {
    setLogin(login) {
        this.setState({ login: login });
    }

    render() {
        return (
            <Row md={4}>
                <Col md={4}>
                    <div><LoginContainer /></div>
                </Col>
                <Col md={4}>
                    <div><Submit /></div>
                </Col>
                <Col md={4}>
                    <div><GetTimes /></div>
                </Col>
            </Row>
        )
    }
}

export default Layout