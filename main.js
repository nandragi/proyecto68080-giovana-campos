function iniciarSimulador() {
    let objectivo = document.getElementById('objectivo').value;
    let ahorro = document.getElementById('ahorro').value;
    let mes = document.getElementById('meses').value;
    let ano = document.getElementById('ano').value;

    // hace la verificacion del campo si estan vacios o no seleccionados
        if (objectivo === "" || ahorro === "" || mes === "zero" || ano === "zero") {
        alert("Por favor, complete todos os campos.");
        return;
    }

    // mensaje con resumen
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `Meta de ahorro: ${objectivo} <br>
                           Ahorro mensual: ${ahorro} <br>
                           Mes: ${mes} <br>
                           Año: ${ano} <br>`;
}

function registrarAhorro() {
    // obtencion de valores de ahorro y obectivo
    let objectivo = document.getElementById('objectivo').value;
    let ahorro = document.getElementById('ahorro').value;

    // verifica si hay info en ahorro y objectivo
    if (objectivo === "" || ahorro === "") {
        alert("Por favor, complete todos os campos.");
        return;
    }

    // calcula cuanto falta para llegar al objectivo
    let totalAhorro = parseFloat(ahorro);
    let objetivo = parseFloat(objectivo);
    let faltante = objetivo - totalAhorro;

    if (faltante <= 0) {
        alert("Você atingiu ou superou sua meta de economia!");
    } else {
        alert(`Falta para atingir a meta: ${faltante}`);
    }
}
