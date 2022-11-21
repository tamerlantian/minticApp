import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function SucursalUpdate() {
    let history = useNavigate();
    const [id, setID] = useState(null);
    const [departamento, setDepartamento] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [direccion, setDireccionSuc] = useState('');
    const [telefono, setTelefonoSuc] = useState('');

    useEffect(() => {
        setID(localStorage.getItem('Id'))
        setDepartamento(localStorage.getItem('Departamento'));
        setCiudad(localStorage.getItem('Ciudad'));
        setDireccionSuc(localStorage.getItem('DirecciónSuc'));
        setTelefonoSuc(localStorage.getItem('TelefonoSuc'))
    }, []);

    const updateSucursalData = () => {
        axios.put(`http://localhost:3000/usuarioss/${id}`, {
            departamento,
            ciudad,
            direccion,
            telefono
        }).then(() => {
            history('/SucursaList')
        })
    }
    return (
        <div>
            <h2>Actualizar sucursal</h2>
            <Form className="create-form">
                <Form.Field>
                    <label className='form__label'>Departamento:</label>
                    <input className='form__input'placeholder='Departamento' value={departamento} onChange={(e) => setDepartamento(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label className='form__label'>Ciudad:</label>
                    <input className='form__input'placeholder='Ciudad' value={ciudad} onChange={(e) => setCiudad(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label className='form__label'>Dirección:</label>
                    <input className='form__input'placeholder='DirecciónSuc' value={direccion} onChange={(e) => setDireccionSuc(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label className='form__label'>Telefono:</label>
                    <input className='form__input'placeholder='TelefonoSuc' value={telefono} onChange={(e) => setTelefonoSuc(e.target.value)}/>
                </Form.Field>
                
                <Button type='submit' className='form__submit' onClick={updateSucursalData}>Actualizar</Button>
            </Form>
        </div>
    )
}

