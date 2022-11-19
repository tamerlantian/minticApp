import React from 'react'
import { useForm } from 'react-hook-form'

export default function PlanForm() {
    const {
        register,
        handleSubmit,
        //formState: { errors }
    } = useForm()

    const onSubmit = async (data) => {
        const { nombre, descripcion, precio } = data
        const requestOption = {
            method: 'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({                
                nombre: nombre,
                descripcion: descripcion,
                precio: precio
            })
        }

        fetch('http://localhost:3000/plans', requestOption)
        .then(res => res.json())
        .then(data => console.log(data))
    }

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)} >            
        <h2>Crear nuevo plan</h2>

            <label className='form__label' htmlFor="nombre">Nombre:</label>
            <input className='form__input' {...register("nombre", { required: true })} />
            
            <label className='form__label' htmlFor="descripcion">Descripción:</label>
            <input className='form__input' {...register("descripcion", { required: true })} />

            <label className='form__label' htmlFor="precio">Precio:</label>
            <input className='form__input' {...register("precio", { required: true })} />
            
            <input className='form__submit' type="submit"/>
        </form>
    )
}
