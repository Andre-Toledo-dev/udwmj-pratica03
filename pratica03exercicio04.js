function calcularArea() {

    let raio = document.getElementById("raio").value;

    let area = Math.PI * (raio ** 2);

    document.getElementById("resultado").innerHTML =
        "A área do círculo é: " + area.toFixed(2);
}