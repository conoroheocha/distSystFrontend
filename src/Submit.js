import { useState } from "react";
import DateTimePicker from 'react-datetime-picker';
import { Col, Container } from "react-bootstrap";
import { Button } from "bootstrap";

function Submit() {
    const [message, setMessage] = useState("");
    const [value, onChange] = useState(new Date());

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("https://httpbin.org/post", {
                method: "POST",
                body: JSON.stringify({
                    // email: email,
                    // password: password,
                    // availability: availability
                }),
            });
            let resJson = await res.json();
            if (res.status === 200) {
                setMessage("Successful Submission");
            } else {
                setMessage("Something went wrong");
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="Submit">
            <Col fluid>

                <DateTimePicker onChange={onChange} value={value} />

                <form onSubmit={handleSubmit}>
                    <button type="submit">Submit</button>

                    <div className="message">{message ? <p>{message}</p> : null}</div>
                </form>
            </Col>
        </div>
    );
}

export default Submit;
