import React from 'react'
import SubPage from '../../components/SubPage.js'
import '../../components/Details.css';

function London() {
    return (
        <>
            <SubPage
                src={data.src}
                text={data.text}
                label={data.label}
                stadium={data.stadium}
                availableTickets={data.tickets}
            />
        </>
    )
}

const availableTickets = Math.floor(Math.random() * (25 - 7 + 1)) + 7;

const data = {
    id: 4,
    src: "./images/img4.jpg",
    text: "Wembley is one of the most famous stadium's in the world",
    label: "London",
    stadium: 'Wembley',
    tickets: availableTickets,
}

export default London;