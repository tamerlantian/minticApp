import React from 'react'
import { useForm } from 'react-hook-form'

export default function ProductForm() {
    const {
        register,
        handleSubmit,
        //formState: { errors }
    } = useForm()

    const onSubmit = async (data) => {
        const { tipo, nombre, descripcion, precio} = data
        const requestOption = {
            method: 'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                tipo: tipo,
                nombre: nombre,
                descripcion: descripcion,
                precio: parseInt(precio)
            })
        }

        fetch('http://localhost:3000/producto-servicios', requestOption)
        .then(res => res.json())
        .then(data => console.log(data))
    }

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)} >
            <h2>Crear nuevo producto o servicio</h2>
            <label className='form__label' htmlFor="tipo">Tipo:</label>
            <select className='form__input' 
             {...register("tipo", { required: true })}>
            <option value="Producto">Producto</option>
            <option value="Servicio">Servicio</option>
            </select>

            <label className='form__label' htmlFor="nombre">Nombre:</label>
            <input className='form__input' {...register("nombre", { required: true })} />

            <label className='form__label' htmlFor="descripcion">Descripción:</label>
            <input className='form__input' {...register("descripcion", { required: true })} />

            <label className='form__label' htmlFor="precio">Precio:</label>
            <input className='form__input' {...register("precio", { required: true })} />

            <input className='form__submit' type="submit" />
        </form>
    )
}
