import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function PlanUpdate() {
    let history = useNavigate();
    const [id, setID] = useState(null);
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('');

    useEffect(() => {
        setID(localStorage.getItem('Id'))
        setNombre(localStorage.getItem('Nombre'));
        setDescripcion(localStorage.getItem('Descripción'));
        setPrecio(localStorage.getItem('Precio'));
    }, []);

    const updatePlanData = () => {
        axios.put(`http://localhost:3000/plans/${id}`, {
            nombre,
            descripcion,
            precio: parseInt(precio)
        }).then(() => {
            history('/PlanList')
        })
    }
    return (
        <div>
            <h2>Actualizar planes</h2>
            <Form className="create-form">
                <Form.Field>
                    <label>Nombre:</label>
                    <input placeholder='Nombre' value={nombre} onChange={(e) => setNombre(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Descripción:</label>
                    <input placeholder='Descripción' value={descripcion} onChange={(e) => setDescripcion(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Precio:</label>
                    <input placeholder='Precio' value={precio} onChange={(e) => setPrecio(e.target.value)}/>
                </Form.Field>
                <Button type='submit' onClick={updatePlanData}>Actualizar</Button>
            </Form>
        </div>
    )
}

