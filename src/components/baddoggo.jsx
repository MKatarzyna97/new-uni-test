import React, { Component } from 'react';
import Angrydoggo from '../photos/angrydoggo.jpg';
import Sadface from '../photos/sadface.png';

class BadDoggo extends Component {
    state = { 
        imageUrl: Sadface,
     }

     flexStyles = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
       }
  
       imageStyles = {
         height: '400px',
         width: '400px',
         borderColor: 'white',
         borderRadius: '20%',
         borderStyle: 'solid',
         
  
       }

       ulStyle = {
       
        marginLeft: '0.5em',
        marginRight: '0.5em',
        height: '150px',
        width: '150px',
       }

       picsDisplay = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
       }
    
       picsStyle = {
        marginLeft: '0.5em',
        marginRight: '0.5em',
        height: '250px',
        width: '350px',
        borderColor: '#348074',
        borderStyle: 'solid'
       }

      
       myPStyle = {
         fontSize: '18px',
         marginTop: '0',
         paddingTop: '0',
        

       }
    

     componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
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
      
    render()
    
    {  let {items} = this.state;
    let mainImage = this.imageUrl;

        return ( <div>

             {mainImage}

        <div nameClass="lineOne"><hr/></div>

            <div style={this.flexStyles}>

          <h1 style={{fontWeight: 'bold'}}>Wyjdź, proszę.</h1>
          <img style={this.imageStyles} src={Angrydoggo} alt='obrazek z zawiedzionym pieskiem' />
          </div>

        <div style={this.flexStyles} className="morePhotos">
          <hr style={{width: '200px'}}></hr>
          <p>Popatrz na więcej piesków i doceń je!</p>
          <p style={this.myPStyle}>ps. Tak naprawdę to nie pieski, niech Ci będzie :(</p>
            </div>
<div style={this.picsDisplay}>
     
    {items.map(item => (<img key={item.id} style={this.picsStyle} src={item.url} alt='' />))}
        

        </div>
        </div> );
    }
}
 
export default BadDoggo;