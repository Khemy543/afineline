import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';



class Slideview extends Component {
  render(){
    return(
      <div>
        <Carousel>
        <Carousel.Item>
    <img
      className="d-block w-100"
      src={require("../images/img5.jpg")}
      alt="Third slide"
      style={{height:"320px"}}
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require("../images/img6.jpg")}
      alt="First slide"
      style={{height:"320px"}}
     
      
    />
    
    </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require("../images/img4.jpg")}
      alt="Third slide"
      style={{height:"320px"}}
    />

    
  </Carousel.Item>

  
</Carousel>
        </div>
    );
  }
}


export default Slideview;