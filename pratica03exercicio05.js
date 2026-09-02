function calcularVolume() {

    let raio = document.getElementById("raio").value;

    let volume = (4 / 3) * Math.PI * (raio ** 3);

    document.getElementById("resultado").innerHTML =
        "O volume da esfera é: " + volume.toFixed(2);
}