import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function MascotaListRead() {       
    
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
            <h2>Listado de solicitudes de afiliación de mascotas</h2>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>                        
                        <Table.HeaderCell>Nombre</Table.HeaderCell>                        
                        <Table.HeaderCell>Especie</Table.HeaderCell>
                        <Table.HeaderCell>Estado</Table.HeaderCell>
                        <Table.HeaderCell>Comentario</Table.HeaderCell>
                        <Table.HeaderCell>Ver</Table.HeaderCell>
                        <Table.HeaderCell>Actualizar</Table.HeaderCell>
                        <Table.HeaderCell>Cambiar estado</Table.HeaderCell>
                        <Table.HeaderCell>Eliminar</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {mascotas.map((data, index) => {
                        return (
                            <Table.Row key={index}>
                                <Table.Cell>{data.nombre}</Table.Cell>                               
                                <Table.Cell>{data.especie}</Table.Cell>
                                <Table.Cell>{data.estado}</Table.Cell>
                                <Table.Cell>{data.comentario}</Table.Cell>
                                
                                    <Table.Cell> 
                                    <Link to='/MascotaView'>
                                        <Button onClick={() => setData(data)}>Ver</Button>
                                    </Link>
                                    </Table.Cell>
                                    <Table.Cell> 
                                <Link to='/MascotaUpdate'>
                                <Button onClick={() => setData(data)}>Actualizar</Button>
                                </Link>
                                    </Table.Cell>
                                    <Table.Cell>
                                <Link to='/EstadoUpdate'>
                                <Button onClick={() => setData(data)}>Cambiar estado</Button>
                                </Link> 
                                    </Table.Cell>
                                
                                <Table.Cell>
                                    <Button onClick={() => onDelete(data.id)} >Eliminar</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}