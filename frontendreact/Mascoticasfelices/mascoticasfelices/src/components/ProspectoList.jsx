import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function ProspectListRead() {
    const [users, setusers] = useState([]);       
    
    useEffect(() => {

        axios.get('http://localhost:3000/prospectos')
        .then((response)=>{
            console.log(response.data)
            setusers(response.data);
        });

        }, []);

    const setData = (data) => {
        let { id, nombre, apellido, correo, celular, comentario } = data;
        localStorage.setItem('Id', id);
        localStorage.setItem('NombrePr', nombre);
        localStorage.setItem('ApellidoPr', apellido);        
        localStorage.setItem('CorreoPr', correo);
        localStorage.setItem('Celular', celular);
        localStorage.setItem('Comentario', comentario)
    }

    const getData = () => {
        axios.get(`http://localhost:3000/prospectos`)
            .then((getData) => {
                setusers(getData.data);
            })
    }
    
    const onDelete = (id) => {
        axios.delete(`http://localhost:3000/prospectos/${id}`)
        .then(() => {
            getData();
        })
    }

    return (
        <div>
            <h2>Listado de prospectos</h2>
            <Table singleLine>
                <Table.Header>
                    <Table.Row> 
                        <Table.HeaderCell>Nombre</Table.HeaderCell>
                        <Table.HeaderCell>Apellido</Table.HeaderCell>
                        <Table.HeaderCell>Correo</Table.HeaderCell>
                        <Table.HeaderCell>Celular</Table.HeaderCell>
                        <Table.HeaderCell>Comentario</Table.HeaderCell>
                        <Table.HeaderCell>Actualizar</Table.HeaderCell>
                        <Table.HeaderCell>Eliminar</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {users.map((data, index) => {
                        return (
                            <Table.Row key={index}>
                                <Table.Cell>{data.nombre}</Table.Cell>
                                <Table.Cell>{data.apellido}</Table.Cell>                                
                                <Table.Cell>{data.correo}</Table.Cell>
                                <Table.Cell>{data.celular}</Table.Cell>
                                <Table.Cell>{data.comentario}</Table.Cell>
                                <Link to='/ProspectoUpdate'>
                                    <Table.Cell> 
                                        <Button onClick={() => setData(data)}>Actualizar</Button>
                                    </Table.Cell>
                                </Link>
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