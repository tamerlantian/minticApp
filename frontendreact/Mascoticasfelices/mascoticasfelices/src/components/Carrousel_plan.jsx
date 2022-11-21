import React from 'react';
import { useEffect, useState } from "react";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Carrouselplan() {
    /*const [planes, setplanes] = useState(null);    
    const planlist = []
    const results = []
        const requestOption = {
        method: 'GET',
        headers : {
            'Content-Type': 'application/json'
        }
    }

    useEffect(() => {

        fetch('http://localhost:3000/plans', requestOption)
        .then(res => res.json())        
        .then(data =>{
            console.log(data)
            setplanes(data.message);
        });

        }, []);

        /*planes.forEach(data => {
            planlist.push(
                <div key={data.id}>
                    <h2>Nombre: {data.nombre}</h2>
                    <h2>Descripción: {data.descripcion}</h2>
                    <h2>Precio: {data.precio}</h2>
                    
                </div>,
            );
            
        });*/

        


  return (
    <MDBCarousel showControls showIndicators dark fade>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://fondosmil.com/fondo/17538.jpg'
        alt='...'
      >
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://fondosmil.com/fondo/17538.jpg'
        alt='...'
      >
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
         className='w-100 d-block'
         itemId={3}
         src='https://fondosmil.com/fondo/17538.jpg'
         alt='...'  
      >
        <MDBCard>
      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}