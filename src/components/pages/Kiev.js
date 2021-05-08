import React from 'react'
import SubPage from '../SubPage.js'
import '../../components/Details.css';

function Kiev() {
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
    id: 7,
    src: './images/img7.jpg',
    text: 'Kiev Olympic Stadium is the Ukrainian national stadium and home of FC Dynamo Kiev',
    label: 'Kiev',
    stadium: 'Olympic Stadium',
    tickets: availableTickets,
}


export default Kiev;