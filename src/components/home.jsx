
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
  state = {  }

  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }
  
  componentDidMount() {
    fetch('https://reqres.in/api/users?page=2')
    .then(response => response.json())
    .then(json => {
      this.setState({
        items: json,
      })
    })
   }


  render() { 
    let {items} = this.state;

    let myTest = (<div> 
      <ul className='itemsList'>
      {items.map(item => (<div><hr></hr><li key={item.itemid}><Link to={`/home/${item.itemid}`}>{item.id}</Link></li></div>))}
          </ul>
          </div>);
    return (
      <div className="mainHomeDiv">
        
      <h1>This is the Home Page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida,
        risus at dapibus aliquet, elit quam scelerisque tortor, nec accumsan eros
        nulla interdum justo. Pellentesque dignissim, sapien et congue rutrum,
        lorem tortor dapibus turpis, sit amet vestibulum eros mi et odio.
      </p>
    {myTest}
    </div>
    
      );
  }
}
 
export default Home;
  
