let form = document.getElementById('form_contact')

const validation = new JustValidate(form)

validation
    .addField('#contacto-nombre', [
        {
            rule: 'required',
            errorMessage: 'Escribe tu nombre'
        }, {
            rule: 'minLength',
            value: 3,
            errorMessage: 'EL nombre es muy corto'

        }
    ])
    .addField('#contacto-apellidos', [
        {
            rule: 'required',
            errorMessage: 'Escribe tus apellidos'
        }
    ])
    .addField('#contacto-email', [
        {
            rule: 'required',
            errorMessage: 'Escribe tu email'
        },
        {
            rule: 'email',
            errorMessage: 'Escribe un email válido'
        }
    ])
    .addField('#contacto-genero', [
        {
            rule: 'required',
            errorMessage: 'Selecciona tu género'
        }
    ])
    .addField('#contacto-nacimiento', [
        {
            rule: 'required',
            errorMessage: 'Selecciona tu fecha de nacimiento'
        }
    ])
    .addField('#contacto-edad', [
        {
            rule: 'required',
            errorMessage: 'Escribe tu edad'
        },
        {
            rule: 'number',
            errorMessage: 'La edad debe ser un número'
        }
    ])
    .onSuccess((event) => {
        event.preventDefault()
        form.reset()
    })