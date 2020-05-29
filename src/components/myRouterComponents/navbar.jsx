import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const styles = {
        color: "white",
        textDecoration: "none"
    }
    return (
        <nav className="myNav">
           <Link style={styles} to="/home"> <h3>HelloApp</h3> </Link>
            <ul>
               <Link style={styles} to="/about"> <li>About</li>
               </Link>
                <Link style={styles} to="/Galeria"><li>Galeria</li></Link>
                
                <Link style={styles} to="/Inspiration"><li>Znajdź inspirację</li></Link>
            </ul>
        </nav>
    )
}
 
 export default Navbar;