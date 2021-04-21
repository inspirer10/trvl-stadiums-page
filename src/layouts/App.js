import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '../styles/App.css';
import Header from './Header';
import Navigation from './Navigation';
import Blog from './Blog';
import Footer from './Footer';

class App extends React.Component {
    render() {
        return (
            <Router basename={process.env.PUBLIC_URL}>
                <div className="app">
                    <header>
                        {<Header />}
                    </header>
                    <main>
                        <aside>
                            {<Navigation />}
                        </aside>
                        <section className='blog'>
                            {<Blog />}
                        </section>
                    </main>
                    <footer>
                        {<Footer />}
                    </footer>
                </div>
            </Router>
        );
    }
}

export default App;