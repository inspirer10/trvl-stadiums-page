import React from 'react'
import SubPage from '../../components/SubPage.js'
import '../../components/Details.css';

function Manchester() {
    return (
        <div>
            <SubPage
                src={data.src}
                text={data.text}
                label={data.label}
                stadium={data.stadium}
                availableTickets={data.tickets}
                lat={data.lat}
                lng={data.lng}
            />
        </div>
    )
}

const availableTickets = Math.floor(Math.random() * (25 - 7 + 1)) + 7;

const data = {
    id: 2,
    src: "/images/img2.jpg",
    text: "Old Trafford second-largest football stadium in the United Kingdom",
    label: "Manchester",
    stadium: 'Old Trafford',
    tickets: availableTickets,
    lat: 53.463058,
    lng: -2.291340,
}

export default Manchester;