var reportAcudits = [];
var acudit;
var boto = document.querySelector("#boto");
boto.addEventListener("click", obtindreAcudits);
function obtindreAcudits() {
    var Api_url = 'https://icanhazdadjoke.com/';
    fetch(Api_url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(function (res) { return res.json(); })
        .then(function (resultado) { return mostrarHTML(resultado); });
}
function mostrarPuntuacion(n) {
    var valor_score = n;
    var d = new Date();
    var valor_date = d.toISOString();
    var opinion = {
        joke: acudit,
        score: valor_score,
        date: valor_date
    };
    reportAcudits.push(opinion);
    console.log("reportAcudits", reportAcudits);
}
function mostrarHTML(acudits) {
    var contenido = document.querySelector(".nou_acudit");
    var html = "";
    acudit = acudits.joke;
    html += "\n                <p>".concat(acudit, "</p>\n                <button id=\"boto1\"  name=\"valor\" onclick=\"mostrarPuntuacion(1)\">1</button> <button id=\"boto2\"  name=\"valor\" onclick=\"mostrarPuntuacion(2)\">2</button> <button id=\"boto3\" name=\"valor\" onclick=\"mostrarPuntuacion(3)\">3</button>\n            ");
    contenido.innerHTML = html;
}
