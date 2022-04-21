import { Component } from "react";
import { Col, Row } from "react-bootstrap";
import { getTimesUrl } from "./config"

class GetTimes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            records: []
        }
        this.state = { athleteEmail: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ athleteEmail: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.athleteEmail);
        event.preventDefault();
    }

    async fetchData() {
        try {
            await fetch(getTimesUrl + "/read", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ADO_email: this.props.email,
                    Athlete_email: "brandicollins@example.net"
                }),
            })
                .then(response => response.json())
                .then(data => {
                    if (true) {
                        this.setState({ records: data })
                    }
                    else {
                        return false;
                    }
                }
                )

        } catch (err) {
            console.log(err);
        }
    }

    renderListing() {
        let recordList = [<tr>
            <th style={{
                border: "1px solid #ddd",
                padding: "8px"
            }}><h3>Time</h3></th>
            <th style={{
                border: "1px solid #ddd",
                padding: "8px"
            }}><h3>Latitude</h3></th>
            <th style={{
                border: "1px solid #ddd",
                padding: "8px"
            }}><h3>Longitude</h3></th>
        </tr>]
        this.state.records.map(record => {
            return recordList.push(
                <tr key={record.time_slot_start}>
                    <th style={{
                        border: "1px solid #ddd",
                        padding: "8px"
                    }}>{Date(record.time_slot_start)}</th>
                    <th style={{
                        border: "1px solid #ddd",
                        padding: "8px"
                    }}>{record.location.lat}</th><th style={{
                        border: "1px solid #ddd",
                        padding: "8px"
                    }}>{record.location.lng}</th></tr>)
        })
        return recordList;
    }

    showTable() {
        if (this.state.records) {
            <Row>
                <table style={{ border: "1px solid black" }}>{this.renderListing()}</table>
            </Row>
        }
        return <div>No athlete yet</div>
    }

    render() {
        return (
            <Col>
                <Row>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Athlete Email:
                            <input type="text" value={this.state.athleteEmail} onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </Row>

                {this.showTable()}

            </Col>





        );
    }
}

export default GetTimes