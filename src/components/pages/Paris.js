import React from 'react'
import SubPage from '../../components/SubPage.js'
import '../../components/Details.css';

function Paris() {
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
    id: 6,
    src: "/images/img6.jpg",
    text: "The Parc des Princes is the iconic stadium of Paris Saint-Germain (PSG), one of the top European football clubs",
    label: "Paris",
    stadium: 'Parc des Princes',
    tickets: availableTickets,
    lat: 48.841505411453916,
    lng: 2.2530870110404324,
}

export default Paris;