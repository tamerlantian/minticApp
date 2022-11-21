import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function PlanListRead() {
    const [planes, setplanes] = useState([]);       
    
    useEffect(() => {

        axios.get('http://localhost:3000/plans')
        .then((response)=>{
            console.log(response.data)
            setplanes(response.data);
        });

        }, []);

    const setData = (data) => {
        let { id, nombre, descripcion, precio } = data;
        localStorage.setItem('Id', id);
        localStorage.setItem('Nombre', nombre);
        localStorage.setItem('Descripción', descripcion);
        localStorage.setItem('Precio', precio)
    }

    const getData = () => {
        axios.get(`http://localhost:3000/plans`)
            .then((getData) => {
                setplanes(getData.data);
            })
    }
    
    const onDelete = (id) => {
        axios.delete(`http://localhost:3000/plans/${id}`)
        .then(() => {
            getData();
        })
    }

    return (
        <div>
            <h2>Listado de planes</h2>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>                        
                        <Table.HeaderCell>Nombre</Table.HeaderCell>
                        <Table.HeaderCell>Descripción</Table.HeaderCell>
                        <Table.HeaderCell>Precio</Table.HeaderCell>
                        <Table.HeaderCell>Actualizar</Table.HeaderCell>
                        <Table.HeaderCell>Eliminar</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {planes.map((data, index) => {
                        return (
                            <Table.Row key={index}>
                                <Table.Cell>{data.nombre}</Table.Cell>
                                <Table.Cell>{data.descripcion}</Table.Cell>
                                <Table.Cell>{data.precio}</Table.Cell>
                                <Link to='/PlanUpdate'>
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