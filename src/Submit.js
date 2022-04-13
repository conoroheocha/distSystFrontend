import React, { useState, Component } from "react";
import DateTimePicker from 'react-datetime-picker';
import DatePicker from "react-date-picker";
import { Col, Container } from "react-bootstrap";
import { Button } from "bootstrap";
import {Map, TitleLayer} from "react-leaflet";
import osm from "./osm-providers";
import "leaflet/dist/leaflet.css";




function Submit() {
    const [message, setMessage] = useState("");
    const [value, onChange] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());
    const[center, setCenter] = useState({lat: 40.730610, lng: -73.935242});
    const ZOOM_LEVEL = 9;
    // eslint-disable-next-line no-undef
    const mapRef = useRef();


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

                <DateTimePicker selected={selectedDate} 
                onChange={onChange} value={value}
                dateFormat = 'dd/MM/yyyy HH:mm'
                minDate={new Date()}
                isClearable
                showYearDropdown
                showMonthDropdown
                scrollableMonthYearDropdown
                />

                
                    
                    <div classname="row">
                        <div classname="col text-center">
                            <h2>Openstreet Maps</h2>
                            <p>Loading maps</p>
                            <div className="col">
                                <Map
                                    center={center}
                                    zoom={ZOOM_LEVEL}
                                    ref={mapRef}
                                >
                                    <TitleLayer 
                                        url={osm.maptiler.url} 
                                        attribution={osm.maptiler.attribution} />
                                </Map>
                            </div>
                        </div>
                    </div>

               

                <form onSubmit={handleSubmit}>
                    <button type="submit">Submit</button>

                    <div className="message">{message ? <p>{message}</p> : null}</div>
                </form>
            </Col>
        </div>
    );
}

export default Submit;
