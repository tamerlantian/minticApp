import React, { useEffect, useState } from 'react';
import { Button } from 'semantic-ui-react';
import axios from 'axios';
import { MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBRow,
    MDBCol,
    MDBCardLink,
    MDBListGroup,
    MDBListGroupItem
  } from 'mdb-react-ui-kit';


export default function MascotaView2() {
    const [mascotas, setmascotas] = useState([]);       
    
    useEffect(() => {

        axios.get('http://localhost:3000/mascotas')
        .then((response)=>{
            console.log(response.data)
            setmascotas(response.data)
            
        });

        }, []);

        const setData = (data) => {
            let { id, nombre, foto, estado, especie, comentario, usuarioId, planId } = data;
            localStorage.setItem('IdM', id);
            localStorage.setItem('TNombreM', nombre);
            localStorage.setItem('FotoM', foto);
            localStorage.setItem('EstadoM', estado);
            localStorage.setItem('EspecieM', especie);
            localStorage.setItem('ComentarioM', comentario);
            localStorage.setItem('UsuarioIdM', usuarioId);
            localStorage.setItem('PlanIdM', planId)
        } 


    //Buscar usuario por ID
        
          
        var nombreusuario = ([""]);
        const getDataU = (usuarioId) => {
            console.log(usuarioId)
            axios.get(`http://localhost:3000/usuarios/${usuarioId}`)
            .then((response)=>{
                console.log(response.data)
                nombreusuario = response.data.nombre            
                console.log(nombreusuario)
            }
            
            )}            
        

        //Listar planes para la selección del ID
        
        //const [plan, setplan] = useState([]);   

        const getDataP =(planId) => {
            axios.get(`http://localhost:3000/plans/${planId}`)
            .then((response)=>{
            console.log(response.data)
            //setplan(response.data);
        })        }

    const getData = () => {
        axios.get(`http://localhost:3000/mascotas`)
            .then((getData) => {
                setmascotas(getData.data);
            
            })
    }
    
    const onDelete = (id) => {
        axios.delete(`http://localhost:3000/mascotas/${id}`)
        .then(() => {
            getData();
        })
    }

    return (
        <div>
            <h2>Listado de solicitudes de afiliación de Mascotas</h2>

            <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
                {mascotas.map((data, index) => {
                    return (
                    <MDBCol key={index}>
                        <MDBCard style={{ maxWidth: '540px' }}>
                            <MDBRow className='g-0'>
                                <MDBCol md='4'>
                                <MDBCardImage src='{data.foto}' alt='...' fluid />
                                </MDBCol>
                                <MDBCol md='8'>
                                <MDBCardBody>
                                    <MDBCardTitle>{data.nombre}</MDBCardTitle>                                    
                                    </MDBCardBody>
                                    <MDBListGroup flush>
                                        <MDBListGroupItem>Especie: {data.especie} </MDBListGroupItem>
                                        {getDataU(data.usuarioId)}
                                        <MDBListGroupItem>Dueño: {getDataU.usuario}</MDBListGroupItem>
                                        
                                        
                                        <MDBListGroupItem>Plan: {getDataP(data.planId)}</MDBListGroupItem>
                                        
                                        <MDBListGroupItem>Estado: {data.estado}</MDBListGroupItem>
                                        <MDBListGroupItem>Comentario: {data.comentario}</MDBListGroupItem>
                                    </MDBListGroup>
                                    <MDBCardBody>
                                        <MDBCardLink href='/MascotaUpdate'>
                                        <Button onClick={() => setData(data)}>Actualizar</Button>
                                        </MDBCardLink>
                                        <MDBCardLink href='/EstadoUpdate'>
                                        <Button onClick={() => setData(data.id)} >Cambiar estado</Button>
                                        </MDBCardLink>
                                        <Button onClick={() => onDelete(data.id)} >Eliminar</Button>
                                    </MDBCardBody>
                                </MDBCol>
                            </MDBRow>
                            </MDBCard>
                    </MDBCol>
                            )})}      
                </MDBRow>            
        </div>
    )
}