import React from 'react'
import { useForm } from 'react-hook-form'

export default function SucursalForm() {
    const {
        register,
        handleSubmit,
        //formState: { errors }
    } = useForm()

    const onSubmit = async (data) => {
        const { departamento, ciudad, direccion, telefono} = data
        const requestOption = {
            method: 'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                departamento: departamento,
                ciudad: ciudad,
                direccion: direccion,
                telefono: telefono
            })
        }

        fetch('http://localhost:3000/sucursals', requestOption)
        .then(res => res.json())
        .then(data => console.log(data))
    }

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)} >
            <h2>Crear nueva sucursal</h2>
            <label className='form__label' htmlFor="departamento">Departamento:</label>
            <input className='form__input' {...register("departamento", { required: true })} />

            <label className='form__label' htmlFor="ciudad">Ciudad:</label>
            <input className='form__input' {...register("ciudad", { required: true })} />

            <label className='form__label' htmlFor="direccion">Dirección:</label>
            <input className='form__input' {...register("direccion", { required: true })} />

            <label className='form__label' htmlFor="telefono">Telefono:</label>
            <input className='form__input' {...register("telefono", { required: true })} />
            
            <input className='form__submit' type="submit" />
        </form>
    )
}
