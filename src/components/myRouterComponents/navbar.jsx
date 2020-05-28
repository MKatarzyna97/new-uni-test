import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const styles = {
        color: "white"
    }
    return (
        <nav className="myNav">
           <Link style={styles} to="/"> <h3>Logo</h3> </Link>
            <ul>
               <Link style={styles} to="/about"> <li>About</li>
               </Link>
                <Link style={styles} to="/Profile"><li>Profile</li></Link>
                <Link style={styles} to="/Shop"><li>Shop</li></Link>
            </ul>
        </nav>
    )
}
 
 export default Navbar;