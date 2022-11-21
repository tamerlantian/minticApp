import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function ProspectUpdate() {
    let history = useNavigate();
    const [id, setID] = useState(null);
    const [nombre, setNombrePr] = useState('');
    const [apellido, setApellidoPr] = useState('');
    const [correo, setCorreoPr] = useState('');
    const [celular, setCelular] = useState('');
    const [comentario, setComentario] = useState('');

    useEffect(() => {
        setID(localStorage.getItem('Id'))
        setNombrePr(localStorage.getItem('NombrePr'));
        setApellidoPr(localStorage.getItem('ApellidoPr'));
        setCorreoPr(localStorage.getItem('CorreoPr'));
        setCelular(localStorage.getItem('Celular'));
        setComentario(localStorage.getItem('Comentario'));
    }, []);

    const updateProspectData = () => {
        axios.put(`http://localhost:3000/prospectos/${id}`, {
            nombre,
            apellido,
            correo,
            celular,
            comentario
        }).then(() => {
            history('/ProspectoList')
        })
    }
    return (
        <div>
            <h2>Actualizar prospecto</h2>
            <Form className="create-form">                
                <Form.Field>
                    <label className='form__label'>Nombre:</label>
                    <input className='form__input'placeholder='NombrePr' value={nombre} onChange={(e) => setNombrePr(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label className='form__label'>Apellido:</label>
                    <input className='form__input'placeholder='ApellidoPr' value={apellido} onChange={(e) => setApellidoPr(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label className='form__label'>Correo:</label>
                    <input className='form__input'placeholder='CorreoPr' value={correo} onChange={(e) => setCorreoPr(e.target.value)}/>
                    </Form.Field>
                <Form.Field>
                    <label className='form__label'>Celular:</label>
                    <input className='form__input'placeholder='Celular' value={celular} onChange={(e) => setCelular(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label className='form__label'>Comentario:</label>
                    <input className='form__input'placeholder='Comentario' value={celular} onChange={(e) => setComentario(e.target.value)}/>
                </Form.Field>
                <Button type='submit' className='form__submit' onClick={updateProspectData}>Actualizar</Button>
            </Form>
        </div>
    )
}

