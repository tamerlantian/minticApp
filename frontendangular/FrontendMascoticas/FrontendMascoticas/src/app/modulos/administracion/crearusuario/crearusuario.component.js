(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
            } else {
                RegistrarPersona();
            }

            form.classList.add('was-validated')
        }, false)
        })
    })()

    function RegistrarPersona() {
        const cedula = document.querySelector("#cedula").value
        const nombre = document.querySelector("#nombres").value
        const apellido = document.querySelector("#apellidos").value
        const telefono = document.querySelector("#telefono").value
        const correo = document.querySelector("#correo").value
        const rol = document.querySelector("#rol").value

        const url = `http://localhost:3000/usuarios`
        let datos = {
            cedula: cedula,
            nombre: nombre,
            apellido: apellido,
            telefono: telefono,
            correo: correo,
            rol: rol
        }
        
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(mensaje => {
            console.log(mensaje)
        })
    }