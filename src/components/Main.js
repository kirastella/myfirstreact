import React from 'react';
import { Router } from '@reach/router';
import Home from './Home';
import Contact from './Contact';


const Main = () => {
    return ( 
        <main>
            <Router>
                <Home path="/" />
                <Contact path="contact" />
            </Router>
        </main>
     );
}
 
export default Main;