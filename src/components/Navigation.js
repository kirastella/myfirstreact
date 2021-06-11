import React from 'react';
import NavLink from './NavLink';

const Navigation = () => {
    return ( 
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
     );
}
 
export default Navigation;