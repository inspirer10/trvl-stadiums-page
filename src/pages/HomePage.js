import React from 'react';
import { } from 'react-router-dom';
import Article from '../components/Article'

const articles = [
    {
        id: 1,
        title: 'Czym jest teoria strun?',
        author: 'Jan Nowak',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore numquam debitis suscipit hic quisquam aliquid repellendus. Atque esse ratione illo beatae ducimus error blanditiis nesciunt earum, in debitis assumenda iusto?'
    },
    {
        id: 2,
        title: 'Czym jest paradoks fermiego?',
        author: 'Grzegorz Jankowski',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore numquam debitis suscipit hic quisquam aliquid repellendus. Atque esse ratione illo beatae ducimus error blanditiis nesciunt earum, in debitis assumenda iusto?'
    },
    {
        id: 3,
        title: 'Ciemna materia i ciemna energia',
        author: 'Irena Kowalska',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore numquam debitis suscipit hic quisquam aliquid repellendus. Atque esse ratione illo beatae ducimus error blanditiis nesciunt earum, in debitis assumenda iusto?'
    },
]

const HomePage = () => {

    const artList = articles.map(item => (
        <Article key={item.id} text={item.text} author={item.author} title={item.title} />
    ))
    return (
        <div className="home">
            {artList}
        </div>
    )
}

export default HomePage;