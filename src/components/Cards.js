import React from 'react';
import CardItem from '../components/CardItem';
import '../components/Cards.css';

function Cards({data}) {

    const cards = data.map((card) =>
        <CardItem
            src={card.src}
            text={card.text}
            label={card.label}
            key={card.id}
            path={card.path}
        />
    )

    return (
        <div className="cards">
            <h1>Checkout these epic destinations !</h1>
            <div className="cards-coinainer">
                <div className="cards-wrapper">
                    <ul className="cards-items">
                        {cards.length < 3 ? cards : cards.splice(0, 2) }
                    </ul>

                    <ul className="cards-items">
                        {cards.length < 3 ? cards : cards.splice(2, 5) }
                    </ul>

                    <ul className="cards-items">
                        {cards.length ? cards : cards.splice(3) }
                    </ul>

                </div>
            </div>
        </div>
    )
}


export default Cards;
