import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function SucursalListRead() {
    const [sucursales, setsucursales] = useState([]);       
    
    useEffect(() => {

        axios.get('http://localhost:3000/sucursals')
        .then((response)=>{
            console.log(response.data)
            setsucursales(response.data);
        });

        }, []);

    const setData = (data) => {
        let { id, departamento, ciudad, direccion, telefono} = data;
        localStorage.setItem('Id', id);
        localStorage.setItem('Departamento', departamento);
        localStorage.setItem('Ciudad', ciudad);
        localStorage.setItem('Dirección', direccion);
        localStorage.setItem('Telefono', telefono)
    }

    const getData = () => {
        axios.get(`http://localhost:3000/sucursals`)
            .then((getData) => {
                setsucursales(getData.data);
            })
    }
    
    const onDelete = (id) => {
        axios.delete(`http://localhost:3000/sucursals/${id}`)
        .then(() => {
            getData();
        })
    }

    return (
        <div>
            <h2>Listado de sucursales</h2>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>                        
                        <Table.HeaderCell>Departamento</Table.HeaderCell>
                        <Table.HeaderCell>Ciudad</Table.HeaderCell>
                        <Table.HeaderCell>Dirección</Table.HeaderCell>
                        <Table.HeaderCell>Actualizar</Table.HeaderCell>
                        <Table.HeaderCell>Eliminar</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {sucursales.map((data, index) => {
                        return (
                            <Table.Row key={index}>
                                <Table.Cell>{data.departamento}</Table.Cell>
                                <Table.Cell>{data.ciudad}</Table.Cell>
                                <Table.Cell>{data.direccion}</Table.Cell>
                                <Table.Cell>{data.telefono}</Table.Cell>
                                <Link to='/SucursalUpdate'>
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