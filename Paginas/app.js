const usuario = document.getElementById("usuario")
const pass = document.getElementById("contraseña")
const repass = document.getElementById("repite contraseña")
const condiciones = document.getElementById("acepto")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e => 
{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])(?!\s)[a-zA-Z\d#$@!%&*?]{8,16}$/
    let check = condiciones.checked;

    if(usuario.value.length < 6)
    {
        warnings += "El usuario no es válido. "
        entrar = true
    }

    if(!regexPass.test(pass.value))
    {
        warnings += "La contraseña no es válida. "
        entrar = true
    }

    if(repass.value != pass.value)
    {
        warnings += "Las contraseñas no coinciden. "
        entrar = true
    }

    if(!check)
    {
        warnings += "No has aceptado los términos. "
        entrar = true
    }

    if(usuario.value == "" || pass.value == "" ||repass.value == "")
    {
        warnings += "No puede haber campos vacíos. "
    }

    if(entrar)
    {
        parrafo.innerHTML= warnings
    }
    else 
    {
        parrafo.innerHTML= "Enviado."
    }
})
