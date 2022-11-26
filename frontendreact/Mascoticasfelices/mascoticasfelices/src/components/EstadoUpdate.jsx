import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function EstadoUpdate() {
    let history = useNavigate();
    const [id, setID] = useState(null);
    const [nombre, setNombre] = useState('');
    const [foto, setFoto] = useState('');
    const [estado, setEstado] = useState('');
    const [especie, setEspecie] = useState('');
    const [comentario, setComentario] = useState('');
    const [usuarioId, setUsuarioId] = useState('');
    const [planId, setPlanId] = useState('');


    useEffect(() => {
        setID(localStorage.getItem('IdM'));
        setNombre(localStorage.getItem('TNombreM'));
        setFoto(localStorage.getItem('FotoM'));
        setEstado(localStorage.getItem('EstadoM'));
        setEspecie(localStorage.getItem('EspecieM'));
        setComentario(localStorage.getItem('ComentarioM'));
        setUsuarioId(localStorage.getItem('UsuarioIdM'));
        setPlanId(localStorage.getItem('PlanIdM'))
    }, []);

    const updateEstadoData = () => {
        axios.put(`http://localhost:3000/mascotas/${id}`, {
            nombre: nombre,    
            foto: foto,
            estado,
            especie: especie,
            comentario,
            usuarioId: usuarioId,
            planId: planId
        }).then(() => {
            history('/MascotaList')
        })
    }
    return (
        <div>
            <h2>Cambiar estado de afiliación de mascotas</h2>
            <Form className="create-form">
                <Form.Field>
                    <label className='form__label'>Comentario:</label>
                    <input className='form__input'placeholder='Comentario' value={comentario} onChange={(e) => setComentario(e.target.value)}/>
                </Form.Field>              
                <Form.Field>
                    <label className='form__label'>Estado:</label>
                    <select className='form__input'value={estado} onChange={(e) => setEstado(e.target.value)}>
                        <option value="En revision">En revisión</option>
                        <option value="Aceptado">Aceptado</option>
                        <option value="Rechazado">Rechazado</option>
                    </select>  
                </Form.Field>                
                <Button type='submit' className='form__submit' onClick={updateEstadoData}>Actualizar</Button>
            </Form>
        </div>
    )
}

