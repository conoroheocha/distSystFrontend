import { Component } from "react";
import { getTimesUrl } from "./config"

class GetTimes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            records: []
        }
    }

    componentDidMount() {
        this.fetchData()
    }

    async fetchData() {
        try {
            await fetch(getTimesUrl + "/read", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ADO_email: "lindamartinez@example.com",
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

    render() {
        return (
            <table style={{ border: "1px solid black" }}>{this.renderListing()}</table>
        );
    }
}

export default GetTimes