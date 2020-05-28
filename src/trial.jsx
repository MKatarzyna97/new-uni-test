import React, {useState, useEffect } from 'react';


function Category ({match}) {
   useEffect(() => {
       fetchItem();
       console.log(match);
   })
 

  const [item, setItem] = useState([]);

  const fetchItem = async () => {
      const fetchItem = await fetch(
          `https://reqres.in/api/users?page=2=${match.params.id}`
      );
      const item = await fetchItem.json();
      setItem(item);
      console.log(item);
  }

  return (
  <div><h1>This is {item.title}</h1></div>
  )

      
  }

  export default Category