import React from 'react'
import SubPage from '../../components/SubPage.js'
import '../../components/Details.css';

function Monachium() {
    return (
        <SubPage
            src={data.src}
            text={data.text}
            label={data.label}
            stadium={data.stadium}
            availableTickets={data.tickets}
            lat={data.lat}
            lng={data.lng}
        />
    )
}

const availableTickets = Math.floor(Math.random() * (25 - 7 + 1)) + 7;

const data = {
    id: 3,
    src: "/images/img3.jpg",
    text: "The architecture of the Allianz Arena is unique worldwide. Its facade consists of the largest membrane shell in the world",
    label: "Monachium",
    stadium: 'Allianz Arena',
    tickets: availableTickets,
    lat: 48.21877897900465,
    lng: 11.624756960565184,
}


export default Monachium;