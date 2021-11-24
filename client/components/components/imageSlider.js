import React from 'react';
import {Carousel,Image} from 'react-bootstrap'
import {Container,CardMedia} from '@mui/material';

function ImageSlider(props) {

    return (
      <div>
            <Carousel>
              <Carousel.Item>
                       <img style={{width:300}}
                      //  style={{height:400,width:'auto'}} 
                        className="d-block w-100"
                          src={props.photo}
                        alt="First slide"
                        />
                          <Carousel.Caption>
                        <h3>{props.title}</h3>
                  </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            </div>
    );
}

export default ImageSlider;