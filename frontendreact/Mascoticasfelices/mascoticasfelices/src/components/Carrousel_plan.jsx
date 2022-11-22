import React from 'react';
import { useEffect, useState } from "react";
import axios from 'axios';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBRow,
  MDBCardHeader,
  MDBCol
} from 'mdb-react-ui-kit';

export default function Carrouselplan() {
  const [products, setproducts] = useState([]);       
    
  useEffect(() => {

      axios.get('http://localhost:3000/producto-servicios')
      .then((response)=>{
          console.log(response.data)
          setproducts(response.data);
      });

      }, []); 

  
  return (    
    <div className='container margen-contenido'>
            <h2>Conoce nuestros productos y servicios</h2>
    <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
    {products.map((data, index) => {
                        return (
      <MDBCol>
        <MDBCard className='h-100'>
        <MDBCardHeader background='transparent' border='success'>
        {data.tipo}
        </MDBCardHeader>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/041.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>{data.nombre}</MDBCardTitle>
            <MDBCardText>{data.descripcion}
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter>
            <small className='text-muted'>Precio: {data.precio} COP</small>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
                        )})}      
    </MDBRow>
    </div>
  );
}