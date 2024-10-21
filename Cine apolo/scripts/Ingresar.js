let usuarios=[
    {usuario: "cristian", clave: "1003"}
]

// script de la Iniciar sesion. 
function usuario() {
    const usuario = document.getElementById('usuario').value;
    const clave = document.getElementById('clave').value;
    for(i=0; i <= usuarios.length; i++){
        if(usuarios[i].usuario == usuario && usuarios[i].clave == clave){
            localStorage.setItem('usuario', usuario);
            window.location.href="index.html";
            alert("bienvenido perra")
        }
        else{
            alert("Usuario no encontrado");
        }
    }
    
}

//script de Registrarse
function registro(){
    let usuario= document.getElementById('usuario').value;
    let clave= document.getElementById('clave').value;
    let confclave= document.getElementById('conf-clave').value;

    if(clave == confclave){
        usuarios.push({usuario: usuario, clave: clave})
        alert('Usuario creado exitosamente');
        localStorage.setItem('usuario', usuario);
        window.location.href="index.html"; //lo redirege a la pagina principal de Cine Apolo
    }
    else{
        alert("verifique la clave que si sea la misma");
    }
}
