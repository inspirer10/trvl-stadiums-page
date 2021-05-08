import  { useEffect } from "react";
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards.js';
import Footer from '../Footer.js';

//import Info from '../Data.js'

function Home() {
    useEffect(() => {
        document.title = 'T R V L ';
    },[]);

    return (
        <>
            <HeroSection />
            <Cards data={data} />
            <Footer />
        </>
    )
}

const data = [
    {
        id: 1,
        src: '/images/img1.jpg',
        text: 'Camp Nou - the biggest stadium in the whole Europe',
        label: 'Barcelona',
        path: '/Barcelona',
        stadium: 'Camp Nou',
    },
    {
        id: 2,
        src: '/images/img2.jpg',
        text: 'Old Trafford second-largest football stadium in the United Kingdom',
        label: 'Manchester',
        path: '/Manchester',
        stadium: 'Old Trafford',
    },
    {
        id: 3,
        src: '/images/img3.jpg',
        text: 'The architecture of the Allianz Arena is unique worldwide. Its facade consists of the largest membrane shell in the world',
        label: 'Monachium',
        path: '/Monachium',
        stadium: 'Allianz Arena',
    },
    {
        id: 4,
        src: '/images/img4.jpg',
        text: 'Wembley is one of the most famous stadium\'s in the world',
        label: 'London',
        path: '/London',
        stadium: 'Wembley',
    },
    {
        id: 5,
        src: '/images/img5.jpg',
        text: 'San Siro, officially known as Stadio Giuseppe Meazza is the home of A.C. Milan and Internazionale',
        label: 'Milan',
        path: '/Milan',
        stadium: 'San Siro',
    },
    {
        id: 6,
        src: '/images/img6.jpg',
        text: 'The Parc des Princes is the iconic stadium of Paris Saint-Germain (PSG), one of the top European football clubs',
        label: 'Paris',
        path: '/Paris',
        stadium: 'Parc des Princes',
    },
    {
        id: 7,
        src: '/images/img7.jpg',
        text: 'Kiev Olympic Stadium is the Ukrainian national stadium and home of FC Dynamo Kiev',
        label: 'Kiev',
        path: '/Kiev',
        stadium: 'Olympic Stadium',
    },
]

export default Home;