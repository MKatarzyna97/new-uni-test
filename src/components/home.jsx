
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Happydoggo2 from '../photos/happydoggo2.png'
import Angrydoggo from '../photos/angrydoggo.jpg';
import Whitesmile from '../photos/whitesmile.png'
import Sadface from '../photos/sadface.png'




class Home extends Component {
  state = { 
      imageUrl: 'https://picsum.photos/200', 
      username: '',
      showName: false,
      doggoFriend: false,
      doggoEnemy: false,
   }

   

//STYLOWANIE

   flexStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
   }

   imageStyles = {
     height: '500px',
     width: '500px',
     borderColor: 'white',
     borderRadius: '20%',
     borderStyle: 'solid',
     margin: '1.5em'

   }

   mainImgStyle = {
     width: '200px',
     height: '200px'
   }

   buttonStyle = {
    borderRadius: '10px',
    marginTop: '1em',
    borderColor: "white",
    borderStyle: 'solid',
    borderWidth: 'thin',
    color: 'white',
    backgroundColor: '#348074',
    width: '150px',
    height: '30px',
    textAlign: 'center',
    margin: "1em",
   }


   submitStyle = {
    borderRadius: '10px',
    marginTop: '1em',
    borderColor: "white",
    borderStyle: 'solid',
    borderWidth: 'thin',
    color: 'white',
    backgroundColor: '#348074',
    float: 'right',
    width: '40%',
    height: '30px',
    textAlign: 'center',
   }

   moreDoggosStyle = {
    width: '200px',
    height: '200px',
    borderRadius: '40px',
   }

   ulStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap'
   }

   myPStyle = {
     fontSize: '18px',
     marginTop: '0',
     paddingTop: '0'
   }

   linkStyles = {
 color: "white",
    
    textDecoration: "none",
}


   //KONIEC STYLOWANIA

   constructor(props) {
     super(props);
     this.helloFunction = this.helloFunction.bind(this);
     this.doggoSwitchFriend = this.doggoSwitchFriend.bind(this);
     this.doggoSwitchEnemy = this.doggoSwitchEnemy.bind(this);
     
   }

   helloFunction = (event) => {
     this.setState({username: event.target.value});
   }

   mySubmitHandler = (event) => {
     event.preventDefault();
     this.setState({
       showName: true
     })
 
   }


   doggoSwitchFriend = (event) => {
     event.preventDefault();
     this.setState({
       doggoFriend: true
     })
   }

   doggoSwitchEnemy = (event) => {
    event.preventDefault();
    this.setState({
      doggoEnemy: true
    })
  }
  

  render() { 
    
    //STRONA STARTOWA 
    let whatName = <h1 className="titleName">Witaj, jak masz na imię?</h1>;
   
    if (this.state.showName) {
      whatName = ''
    } else {
      whatName = <h1 className="titleName">Witaj, jak masz na imię?</h1>;
    }


    let myForm =(<div style={this.flexStyles}>
      <form onSubmit={this.mySubmitHandler}>
      <input className="nameInput" type="text" placeholder="Tutaj wpisz swoje imię" onChange={this.helloFunction}/>
      <br></br>
      <input onMouseEnter={changeBackground} onMouseLeave={noChange} style={this.submitStyle} type="submit"/>
    </form></div>)

    // STRONA PO WPISANIU IMIENIA

    let myWelcome = (<div><h1 className="nameGreeting" style={this.flexStyles}><span style={{display: "block"}}>Dzień dobry, <span className='myName' style={{color: "#9DE5C6"}}>{this.state.username}</span>!</span></h1>
    <p style={this.flexStyles}>Czy lubisz pieski?</p>
   
   <button  onMouseEnter={changeBackground} onMouseLeave={noChange} style={this.buttonStyle} onClick={this.doggoSwitchFriend}><Link style={this.linkStyles} to="/gooddoggo">Oczywiście!</Link></button>
   <button onMouseEnter={changeBackground} onMouseLeave={noChange} style={this.buttonStyle} onClick={this.doggoSwitchEnemy}> <Link style={this.linkStyles} to="/baddoggo"> Nie...</Link></button> 
    </div>
    );
    
    let mainImage = (<img style={this.mainImgStyle} src='https://picsum.photos/200' alt='obrazki w logo' />)

    

    //WARUNEK: NIE LUBI PSÓW

   

    function changeBackground(col) {
      col.target.style.background = 'white';
      col.target.style.color = '#348074'
    }

    function noChange(col) {
      col.target.style.background = "#348074"
      col.target.style.color = 'white'
    }
      return ( 
    <div style={this.flexStyles}>
        <div className="welcomeHeader">
      <div nameClass="header"> 
      
     {mainImage}
      
       <div nameClass="lineOne"><hr/></div>
       </div>
       
       {whatName}
       

        </div>
        {this.state.showName ? myWelcome : myForm}
        
        
        </div> 
        
      );

     
    
  }


}
 
export default Home;
  
