import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const styles = {
        color: "white",
        textDecoration: "none",
        fontSize: "16px",
        letterSpacing: "3px"
    }

    const stylesLogo = {
        color: "white",
        textDecoration: "none",
        fontSize: "20px",
        letterSpacing: '10px',
        marginLeft: '4em'

    }

 const ulStyle = {
    marginRight: '4em'
}

    return (
        <nav className="myNav">
           <Link style={stylesLogo} to="/home"> <h3>HelloApp</h3> </Link>
            <ul style={ulStyle}>
               <Link style={styles} to="/about"> <li>About</li>
               </Link>
                <Link style={styles} to="/Galeria"><li>Galeria</li></Link>
                
                <Link style={styles} to="/Inspiration"><li>Znajdź inspirację</li></Link>
            </ul>
        </nav>
    )
}
 
 export default Navbar;