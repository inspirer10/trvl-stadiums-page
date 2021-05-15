import React from 'react'
import SubPage from '../../components/SubPage.js'
import '../../components/Details.css';

function Barcelona() {
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
    id: 1,
    src: '/images/img1.jpg',
    text: "Camp Nou - the biggest stadium in the whole Europe",
    label: "Barcelona",
    stadium: 'Camp Nou',
    tickets: availableTickets,
    lat: 41.38092528437357,
    lng: 2.1228155670258837,
}

export default Barcelona;