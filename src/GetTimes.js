import { Component } from "react";

class GetTimes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            records: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(records => {
                this.setState({
                    records: records
                })
            })
            .catch(error => console.log(error))
    }

    renderListing() {
        let recordList = []
        this.state.records.map(record => {
            return recordList.push(<tr key={record.id}><th style={{
                border: "1px solid #ddd",
                padding: "8px"
            }}>{record.name}</th><th style={{
                border: "1px solid #ddd",
                padding: "8px"
            }}>{record.email}</th></tr>)
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