import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import '../components/SubPage.css';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import Footer from '../components/Footer.js';

const MyMapComponent = withScriptjs(withGoogleMap(({ isMarkerShown, lat, lng }) => {
    return (
        <GoogleMap
            defaultZoom={9}
            defaultCenter={{ lat: lat, lng: lng }}
        >
            {isMarkerShown && <Marker position={{ lat: lat, lng: lng }} />}
        </GoogleMap>
    )
}))

const revievs = Math.floor(Math.random() * (80 - 20 + 1)) + 20;//poza funkcją => nie renderuje się za każdym kliknięciem buttona

function SubPage({ label, src, stadium, availableTickets, text, lat, lng }) {
    const [count, setCount] = useState(0);
    const [tickets, setTickets] = useState(availableTickets);
    const { pathname } = useLocation();

    const handleClick = () => {
        setCount(0);
        setTickets(tickets - count);
    }

    useEffect(() => {
        document.title = `${label} - ${stadium} !`;
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: 'auto', // <- The scrolling happens in a single jump
        });
    },[pathname,label,stadium]);

    return (
        <>
            <div className="item">
                <div className="item-half">
                    <div className="item-pic">
                        <img src={process.env.PUBLIC_URL + src} className="item-img" alt="Stadium pic"/>
                    </div>
                </div>

                <div className="item-half">
                    <p>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <span>{revievs} revievs</span>
                    </p>
                    <h2>{`${label}・${stadium}`}</h2>
                    <h1>$ 449.99</h1>
                    <div className="item-info">
                        {text}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis, sem et iaculis aliquam, elit nisi tristique purus, a consectetur turpis tortor id quam. Pellentesque sit amet dolor dignissim, tincidunt risus vulputate, efficitur justo. Sed sit amet justo tempus dui iaculis suscipit sit amet vel risus. In commodo nulla non est rutrum consequat. Integer convallis purus et lorem sagittis auctor. Suspendisse ut sollicitudin turpis.
                    </div>
                    {tickets === 0
                        ? <p className="tickets">No available tickets</p>
                        : <p className="tickets">Available{tickets === 1
                            ? ' ticket' : ' tickets'}
                            : {tickets}
                        </p>
                    }

                    <div className="btns">
                        <button className="setTicket" disabled={count <= 0 && 'disabled'} onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
                        <span>{count}</span>
                        <button className="setTicket" disabled={count >= tickets && 'disabled'} onClick={() => setCount(prevCount => prevCount + 1)}>+</button>

                        <button className="reserveBtn btn-outline btn-large" onClick={handleClick}>
                            RESERVE
                        </button>
                    </div>
                </div>
            </div>
            <MyMapComponent
                isMarkerShown
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBuOk2YaK7pILzO2KEjzOJrQ8I3GDeI3Qw"
                lat={lat}
                lng={lng}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `550px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
            <Footer />
        </>
    )
}

export default SubPage;