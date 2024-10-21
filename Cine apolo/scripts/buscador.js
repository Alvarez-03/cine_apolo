const nom_usuario = localStorage.getItem('usuario');
if (nom_usuario) {
    // Cambiar el texto del <p> dentro del enlace
    let boton = document.getElementById('boton-ingresar');
    boton.textContent = nom_usuario; // Cambia el texto a el nombre del usuario
    boton.onclick=function() { //esta funcion es para que el usuario salga
        localStorage.removeItem('usuario');
        boton.href="index.html"
    };
}

function buscar() {
    event.preventDefault();
    const pelicula = document.getElementById('buscador').value; 
    if(pelicula=='guason 2'){
        window.location.href = 'sipnosis_guason.html'; 
    }
    else if(pelicula=='transformers uno'){
        window.location.href = 'sipnosis_transformers.html'; 
    }
    else if(pelicula=='caceria sangrienta'){
        window.location.href = 'sipnosis_caceria_sangrienta.html'; 
    }
    else if(pelicula=='romper el circulo'){
        window.location.href = 'sipnosis_romper_circulo.html'; 
    }
    else if(pelicula=='mi villano favorito 4' ){
        window.location.href = 'sipnosis_villa_favorito.html'; 
    }
    else if(pelicula=='venom' || pelicula=='venom el ultimo baile'){
        window.location.href = 'sipnosis_venom.html'; 
    }
    else{
        Malert();
    }
}
function Malert(){
    const span=document.getElementById('alert-pelicula')
    span.style.display='grid'
}
function Oalert(){
    const span=document.getElementById('alert-pelicula')
    span.style.display='none'
}