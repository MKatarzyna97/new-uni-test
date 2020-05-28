import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Shop() {
useEffect(() => {
    fetchItems();
}, []);

const [items, setItems] = useState([]);

const fetchItems = async () => {
    const data = await fetch(`https://programming-quotes-api.herokuapp.com/quotes/lang/en`);

    const items = await data.json();
    console.log(items);
    setItems(items);
};


return (
   
    <div> 
    <ul className='itemsList'>
    {items.map(item => (<div><hr></hr><li key={item.itemid}><Link to={`/shop/${item.itemid}`}>{item.en}</Link></li></div>))}
        </ul>
        </div>
)
}

export default Shop;