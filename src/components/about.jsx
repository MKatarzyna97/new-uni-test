import React from "react";

const About = () => (
  
  
  <div style={flexStyles}>
    <h1 className="title is-1">This is the About Page</h1>
    <p>
      Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
      inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus
      et ultrices posuere cubilia curae; Duis consequat nulla ac ex consequat,
      in efficitur arcu congue. Nam fermentum commodo egestas.
    </p>
  </div>
);

const flexStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '4em'
  
 }

export default About;