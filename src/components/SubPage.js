import React, { useState, useEffect } from "react";
import '../components/SubPage.css';
import Footer from '../components/Footer.js';

const revievs = Math.floor(Math.random() * (80 - 20 + 1)) + 20;//poza funkcją => nie renderuje się za każdym kliknięciem buttona

function SubPage({ label, src, stadium, availableTickets }) {
    const [count, setCount] = useState(0);
    const [tickets, setTickets] = useState(availableTickets);

    const handleClick = () => {
        setCount(0);
        setTickets(tickets - count);
    }

    useEffect(() => {
        document.title = `${label} - ${stadium} !`;
    });

    return (
        <>
            <div className="item">
                <div className="item-half">
                    <div className="item-pic">
                        <img src={src} className="item-img" alt="Stadium pic"/>
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis, sem et iaculis aliquam, elit nisi tristique purus, a consectetur turpis tortor id quam. Pellentesque sit amet dolor dignissim, tincidunt risus vulputate, efficitur justo. Sed sit amet justo tempus dui iaculis suscipit sit amet vel risus. In commodo nulla non est rutrum consequat. Integer convallis purus et lorem sagittis auctor. Suspendisse ut sollicitudin turpis. Donec tempus gravida lorem ac faucibus. Aenean eget tortor vitae tellus egestas iaculis. Aliquam rutrum ipsum sit amet velit sodales fermentum.
                    </div>
                    {tickets === 0
                        ? <p className="tickets">No available tickets</p>
                        : <p className="tickets">Available {tickets === 1
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
            <Footer />
        </>
    )
}

export default SubPage;