import React from 'react'
import SubPage from '../../components/SubPage.js'
import '../../components/Details.css';

function Milan() {
    return (
        <div>
            <SubPage
                src={data.src}
                text={data.text}
                label={data.label}
                stadium={data.stadium}
                availableTickets={data.tickets}
            />
        </div>
    )
}

const availableTickets = Math.floor(Math.random() * (25 - 7 + 1)) + 7;

const data = {
    id: 5,
    src: "/images/img5.jpg",
    text: "San Siro, officially known as Stadio Giuseppe Meazza is the home of A.C. Milan and Internazionale",
    label: "Milan",
    stadium: 'San Siro',
    tickets: availableTickets,
}

export default Milan;