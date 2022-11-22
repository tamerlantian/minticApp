import React from 'react';
import { Parallax, Background } from 'react-parallax';
import {  Grid, Image } from 'semantic-ui-react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function MisionVision() {
    
    return (            
        <div>
        <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={require('./mascotas.jpg')}
        bgImageAlt="the dog"
        strength={-200}
    >        
        <div style={{ height: '400px' }} />
        </Parallax>        
        <div>
        <div className='margen-contenido'>
        <MDBContainer>
        <MDBRow>
            <MDBCol size='md'>
            <div className='bg-image hover-overlay'>
                <img src='https://www.sadenir.com.uy/wp-content/uploads/2020/11/veterinarian-check-ing-puppy-s-health-2.jpg' className='img-fluid' />                    
                        <div className='mask overlay' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)' }}></div>
                    
            </div>
            </MDBCol>
            <MDBCol size='md'>
            <h3>El bienestar de su mascota es nuestra misión</h3>
                    <p>Ofrecer bienestar tanto animal, como a las familias de nuestros pacientes a través de la prestación de servicios médicos veterinarios y complementarios.</p>
                    <p small className='text-muted'> Nuestro grupo de trabajo comparte valores y principios éticos de respeto, responsabilidad y compromiso, entregando calidad y satisfacción en nuestros servicios.</p>
            </MDBCol>
        </MDBRow>
        </MDBContainer>                           
        </div>
        <div className='background-mask'>
        <MDBContainer >
        <MDBRow>            
            <MDBCol size='md'>
            <h3>El bienestar de su mascota es nuestra misión</h3>
                    <p>Ofrecer bienestar tanto animal, como a las familias de nuestros pacientes a través de la prestación de servicios médicos veterinarios y complementarios.</p>
                    <p small className='text-muted'> Nuestro grupo de trabajo comparte valores y principios éticos de respeto, responsabilidad y compromiso, entregando calidad y satisfacción en nuestros servicios.</p>
            </MDBCol>
            <MDBCol size='md'>
            <div className='bg-image hover-overlay'>
                <img src='https://petshopanimal.com.co/wp-content/uploads/2022/05/img-gal-3-clinica-veterinaria-petshop-animal.jpg' className='img-fluid' />                    
                        <div className='mask overlay' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)' }}></div>
                    
            </div>
            </MDBCol>
        </MDBRow>
        </MDBContainer>

        </div>
        </div>
        <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={require('./mascotas2.jpeg')}
        bgImageAlt="the dog"
        strength={-200}
    >        
        <div style={{ height: '400px' }} />
        </Parallax>
        </div>

    

    );
}