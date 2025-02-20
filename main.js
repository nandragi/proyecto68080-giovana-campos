const mesesDelAno = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

function iniciarSimulador() {
    let objectivo = parseFloat(document.getElementById("objectivo").value);
    let ahorroMensual = parseFloat(document.getElementById("ahorro").value);
    let resultadoDiv = document.getElementById("resultado");

    if (isNaN(objectivo) || isNaN(ahorroMensual) || objectivo <= 0 || ahorroMensual <= 0) {
        resultadoDiv.innerHTML = "Por favor, ingresa valores válidos.";
        return;
    }

    let totalAhorrado = 0;
    let meses = 0;
    let mensaje = "<h2>Progreso:</h2>";

    while (totalAhorrado < objectivo) {
        totalAhorrado += ahorroMensual;
        meses++;
        mensaje += `<p>Mes ${meses}: Has ahorrado $${totalAhorrado}</p>`;
    }

    mensaje += `<h3>¡Felicidades! Alcanzaste tu meta en ${meses} meses.</h3>`;
    resultadoDiv.innerHTML = mensaje;
}