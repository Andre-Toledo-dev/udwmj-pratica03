function calcularMontante() {

    let capital = document.getElementById("capital").value;
    let taxa = document.getElementById("taxa").value;
    let tempo = document.getElementById("tempo").value;

    taxa = taxa / 100;

    let montante = capital * ((1 + taxa) ** tempo);

    document.getElementById("resultado").innerHTML =
        "Montante final: R$ " + montante.toFixed(2);
}