import React, { Component } from 'react';

class RandomQuote extends Component {
  state = { 
    quote: '',
   }

  

 

   componentDidMount() {
    fetch('https://programming-quotes-api.herokuapp.com/quotes/lang/en')
    .then(response => response.json())
    .then(json => {
      this.setState({
        items: json,
      })
    })
   }

   constructor(props) {
      super(props);
      this.state = {
        items: []
      }
    }

    randomQuote = () => {
      this.setState({
          quote: items[Math.floor(Math.random() * items.en)]
        }) 
  }

  render() { 

    let {items} = this.state;
    

    return ( <div>
      <h1 className='title'>Jeśli potrzebujesz inspiracji, jesteś w dobrym miejscu {randomQuote}!</h1>
      
    </div> );
  }
}
 
export default RandomQuote;