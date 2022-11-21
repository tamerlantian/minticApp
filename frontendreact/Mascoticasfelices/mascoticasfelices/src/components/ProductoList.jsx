import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function ProductListRead() {
    const [products, setproducts] = useState([]);       
    
    useEffect(() => {

        axios.get('http://localhost:3000/producto-servicios')
        .then((response)=>{
            console.log(response.data)
            setproducts(response.data);
        });

        }, []);

    const setData = (data) => {
        let { id, tipo, nombre, descripcion, precio } = data;
        localStorage.setItem('Id', id);
        localStorage.setItem('Tipo', tipo);
        localStorage.setItem('NombreP', nombre);
        localStorage.setItem('DescripciónP', descripcion);
        localStorage.setItem('PrecioP', precio)
    }

    const getData = () => {
        axios.get(`http://localhost:3000/producto-servicios`)
            .then((getData) => {
                setproducts(getData.data);
            })
    }
    
    const onDelete = (id) => {
        axios.delete(`http://localhost:3000/producto-servicios/${id}`)
        .then(() => {
            getData();
        })
    }

    return (
        <div>
            <h2>Listado de produtos y servicios</h2>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>    
                        <Table.HeaderCell>Tipo</Table.HeaderCell>                    
                        <Table.HeaderCell>Nombre</Table.HeaderCell>
                        <Table.HeaderCell>Descripción</Table.HeaderCell>
                        <Table.HeaderCell>Precio</Table.HeaderCell>
                        <Table.HeaderCell>Actualizar</Table.HeaderCell>
                        <Table.HeaderCell>Eliminar</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {products.map((data, index) => {
                        return (
                            <Table.Row key={index}>
                                 <Table.Cell>{data.tipo}</Table.Cell>
                                <Table.Cell>{data.nombre}</Table.Cell>
                                <Table.Cell>{data.descripcion}</Table.Cell>
                                <Table.Cell>{data.precio}</Table.Cell>
                                <Link to='/ProductoUpdate'>
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