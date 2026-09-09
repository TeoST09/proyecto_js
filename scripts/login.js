let formulario = document.getElementById('formu')
let nombre = document.getElementById('nombre')
let email = document.getElementById('email')
let pass = document.getElementById('pass')
let mostrarNombre = document.getElementById('mostrarNombre')
let cerrarSesion = document.getElementById('cerrarSesion')
let envio = document.getElementById('envio')
let datosUsuario = document.querySelector('.aside__data')


formulario.addEventListener('submit', function(e){
    e.preventDefault()

    let name = nombre.value
    let correo = email.value
    let password = pass.value

    let user = { name, correo, password }

    if(name && correo && password){
        localStorage.setItem('usuario', JSON.stringify(user))
    }

    formulario.reset()

    getUser()
})

let getUser = function(){
    if(localStorage.getItem('usuario')){
        let identity = JSON.parse(localStorage.getItem('usuario'))

        mostrarNombre.textContent = identity.name
        formulario.classList.add('hidden')
        datosUsuario.classList.remove('hidden')
    }
}

cerrarSesion.addEventListener('click', function(){
    formulario.classList.remove('hidden')
    datosUsuario.classList.add('hidden')
    localStorage.removeItem('usuario')
})

getUser()