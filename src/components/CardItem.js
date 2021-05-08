import React from 'react';
import { Link } from 'react-router-dom';

function CardItem({ label, src, text, id, path }) {
    return (
        <>
            <li id={id} className="card-item">
                <Link className="card-item-link" to={path}>
                    <figure className="cards-item-pic" data-category={label}>
                        <img src={src} className="card-item-img" alt="Stadium pic"/>
                    </figure>
                    <div className="card-item-info">
                        <h5 className="card-item-text">{text}</h5>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default CardItem;