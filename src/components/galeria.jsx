import React from 'react';

function Galeria () {
    
    const flexStyles = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '4em',
        color: '#348074'
        
       }
    return (
       <div style={flexStyles}> <h2>To jest galeria, która nie jest galerią</h2></div>
    )
}

export default Galeria;