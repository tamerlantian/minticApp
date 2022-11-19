import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBIcon,
    MDBBtn,
    MDBCollapse
} from 'mdb-react-ui-kit';

export default function Navbar() {
    const [showBasic, setShowBasic] = useState(false);
  return (
    <>      
      <MDBNavbar dark bgColor='dark'>
        <MDBContainer fluid>
          <MDBNavbarBrand tag="span" className='mb-0 h1'>MASCOTICAS FELICES</MDBNavbarBrand>
          <span className='navbar-text'> Atención: 7:00 - 17:00 / Lunes a Domingo / +57 320 8897458 - 4454578 </span>
          </MDBContainer>
      </MDBNavbar>

      <MDBNavbar expand='lg' dark bgColor='dark'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>✧</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
                Inicio
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>Productos y servicios</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>Contáctenos</MDBNavbarLink>
            </MDBNavbarItem>          
           
          </MDBNavbarNav>

          
        </MDBCollapse>
        <form className='justify-content-start'>            
            <MDBBtn outline color='secondary' className='me-2' type='button' >Registrarse</MDBBtn>
            <MDBBtn outline color='light' className='me-2' type='button'>Ingresar</MDBBtn>
          </form>
      </MDBContainer>
    </MDBNavbar>
    </>
  );
}