import React, { useEffect, useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate  } from 'react-router';

export default function MascotaForm() {
    let navigate  = useNavigate ();
    const [nombre, setNombre] = useState('');
    const [foto, setFoto] = useState('');    
    const [especie, setEspecie] = useState('');    
    const [usuarioId, setUsuarioId] = useState('');
    const [planId, setPlanId] = useState('');
    
    console.log(planId)

    //Listar usuarios para la selección del ID
        
    const [usuarios, setusuarios] = useState([]);       
    
        useEffect(() => {

        axios.get('http://localhost:3000/usuarios')
        .then((response)=>{
            console.log(response.data)
            setusuarios(response.data);
        });

            }, []);
        

        //Listar planes para la selección del ID
        
        const [planes, setplanes] = useState([]);   
        
        useEffect(() => {

            axios.get('http://localhost:3000/plans')
            .then((response)=>{
                console.log(response.data)
                setplanes(response.data);
            });
    
        }, []);   
        


    const postData = () => {
        axios.post(`http://localhost:3000/mascotas`, {
            nombre,
            foto,
            estado: "Nuevo",
            especie,
            comentario: "Nuevo ingreso",
            usuarioId,
            planId
        })
        .then(() => {
             navigate('/MascotaList')
         })

        console.log(especie)

        

    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label className='form__label'>Nombre mascota: </label>
                    <input className='form__input' placeholder='Nombre' onChange={(e) => setNombre(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label className='form__label'>Foto: </label>
                    <input className='form__input' placeholder='URL foto de la mascota' onChange={(e) => setFoto(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label className='form__label'>Especie: </label>
                    <select className='form__input' onChange={(e) => setEspecie(e.target.value)}> 
                    <option selected disabled> -- Seleccione la Especie -- </option>
                    <option value="Perro">Perro</option>
                    <option value="Gato">Gato</option>
                    <option value="Ave">Ave</option>
                    <option value="Pez">Pez</option>
                    <option value="Otro">Otro</option>
                    </select>
                </Form.Field>
                <Form.Field>
                    <label className='form__label'>Usuario: </label>
                    <select className='form__input' onChange={(e) => setUsuarioId(e.target.value)}>
                            <option selected disabled> -- Seleccione su usuario -- </option>
                            {usuarios?.map((data, index) => (
                                <option key={index} value={data.id}>{data.nombre}</option>
                                ))}
                    </select>                    
                </Form.Field>
                <Form.Field>
                <label className='form__label'>Plan: </label>
                    <select className='form__input' onChange={(e) => setPlanId(e.target.value)}>
                        <option selected disabled> -- Seleccione el plan -- </option>
                            {planes?.map((data, index) => (
                                <option key={index} value={data.id}>{data.nombre}</option>
                                ))}
                    </select>  
                </Form.Field>
                <Button className='form__submit' onClick={postData} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}






