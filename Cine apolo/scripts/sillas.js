function cargarSillas() {
    const botones = document.querySelectorAll('#content-sillas button');

    botones.forEach((button, index) => {
        const silla = button.querySelector('.silla-color');
        
        // Verificar el estado en localStorage
        if (localStorage.getItem(`silla-${index}`) === "ocupada") {
            silla.style.color = "rgb(253, 0, 0)"; // Marcar la silla como ocupada
        }
    });
}

function ocupar(button) {
    const silla = button.querySelector('.silla-color');
    const index = Array.from(document.querySelectorAll('#content-sillas button')).indexOf(button);

    // Cambiar el color de la silla
    silla.style.color = "rgb(253, 0, 0)";

    // Guardar el estado en localStorage
    localStorage.setItem(`silla-${index}`, "ocupada");
}

function limpiar(){
    localStorage.clear();
    alert('Todos los datos han sido eliminados.');
    silla.style.color = "rgb(0, 38, 255)";
}
function compra_exitosa(){
    Malert_compra()
}

function Malert_compra(){
    const span=document.getElementById('alert-compra')
    span.style.display='grid'
}
function Oalert_compra(){
    const span=document.getElementById('alert-compra')
    span.style.display='none'
}

// Cargar el estado de las sillas cuando la página se carga
document.addEventListener('DOMContentLoaded', cargarSillas);
