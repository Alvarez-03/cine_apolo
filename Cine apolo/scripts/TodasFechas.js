function mostrar() {
    const fechas = ['2024-09-26', '2024-09-27', '2024-09-28'];
    const fecha_seleccionada = document.getElementById("date_input").value;
    const contenedor_fechas = document.getElementById("info_fechas");


    let fechaDisponible = false;

    for (let i = 0; i < fechas.length; i++) {
        if (fechas[i] === fecha_seleccionada) {
            fechaDisponible = true; // Marcar que la fecha está disponible
            break; // Salir del bucle una vez que encontramos la fecha
        }
    }

    // Mostrar el contenedor si la fecha está disponible
    if (fechaDisponible) {
        contenedor_fechas.style.display= "grid";

    } else {
        contenedor_fechas.style.display= "none";
        Malert_fechas();
    }
}
function ocultar(){
    const contenedor_fechas = document.getElementById("info_fechas");
    contenedor_fechas.style.display= "none";
}

function Malert_fechas(){
    const span=document.getElementById('alert-fechas')
    span.style.display='grid'
}
function Oalert_fechas(){
    const span=document.getElementById('alert-fechas')
    span.style.display='none'
}