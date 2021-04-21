import React from 'react';
import { } from 'react-router-dom';



const Article = ({title, author, text}) => {
    return (
        <article >
            <h3>{title}</h3>
            <h6>{author}</h6>
            <p>{text}</p>
        </article>
    )
}

export default Article;