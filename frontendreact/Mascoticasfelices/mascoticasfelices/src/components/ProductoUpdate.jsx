import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function ProductUpdate() {
    let history = useNavigate();
    const [id, setID] = useState(null);
    const [tipo, setTipo] = useState('');
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('');

    useEffect(() => {
        setID(localStorage.getItem('Id'))
        setTipo(localStorage.getItem('Tipo'))
        setNombre(localStorage.getItem('NombreP'));
        setDescripcion(localStorage.getItem('DescripciónP'));
        setPrecio(localStorage.getItem('PrecioP'));
    }, []);

    const updateProductData = () => {
        axios.put(`http://localhost:3000/producto-servicios/${id}`, {
            tipo,    
            nombre,
            descripcion,
            precio: parseInt(precio)
        }).then(() => {
            history('/ProductoList')
        })
    }
    return (
        <div>
            <h2>Actualizar productos y servicios</h2>
            <Form className="create-form">
                <Form.Field>
                    <label className='form__label'>Tipo:</label>
                    <select className='form__input'placeholder='Rol' value={tipo} onChange={(e) => setTipo(e.target.value)}>
                        <option value="product">Producto</option>
                        <option value="service">Servicio</option>
                    </select>                
                </Form.Field>
                <Form.Field>
                    <label className='form__label'>Nombre:</label>
                    <input className='form__input' placeholder='NombreP' value={nombre} onChange={(e) => setNombre(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label className='form__label'>Descripción:</label>
                    <input className='form__input' placeholder='DescripciónP' value={descripcion} onChange={(e) => setDescripcion(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label className='form__label'>Precio:</label>
                    <input className='form__input' placeholder='PrecioP' value={precio} onChange={(e) => setPrecio(e.target.value)}/>
                </Form.Field>
                <Button type='submit' className='form__submit' onClick={updateProductData}>Actualizar</Button>
            </Form>
        </div>
    )
}

