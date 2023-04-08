const modelos = ["Mercedes Benz", "Audi", "BMW"]
var modelosMercedesBenz = ["Clase G", "CLS", " Clase A"]
var modelosAudi = ["Q8", "A6", "A7"]
var modelosBmw = ["M6", "X6-M", "M8-Coupé"]
var anos = [2023, 2022, 2021, 2020, 2019]
baseDatos = [];

function autos_registro(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
}

function capturar() {
    var cantidad_registros = document.getElementById("myText").value;
    console.log(cantidad_registros);


    for (let i = 0; i < cantidad_registros; i++) {

        var random = Math.floor(Math.random() * 3);

        if (random == 0) {
            this["nuevo_registro"] = new autos_registro(modelos[random], modelosMercedesBenz[Math.floor(Math.random() * 3)], anos[Math.floor(Math.random() * 4)]);
            baseDatos.push(this["nuevo_registro"]);
            document.getElementById("tabla").innerHTML += "<td>" + this["nuevo_registro"].marca + "</td>" + "<td>" + this["nuevo_registro"].modelo + "</td>" + "<td>" + this["nuevo_registro"].ano + "</td>";
        } else if (random == 1) {
            this["nuevo_registro"] = new autos_registro(modelos[random], modelosAudi[Math.floor(Math.random() * 3)], anos[Math.floor(Math.random() * 4)]);
            baseDatos.push(this["nuevo_registro"]);
            document.getElementById("tabla").innerHTML += "<td>" + this["nuevo_registro"].marca + "</td>" + "<td>" + this["nuevo_registro"].modelo + "</td>" + "<td>" + this["nuevo_registro"].ano + "</td>";
        } else {
            this["nuevo_registro"] = new autos_registro(modelos[random], modelosBmw[Math.floor(Math.random() * 3)], anos[Math.floor(Math.random() * 4)]);
            baseDatos.push(this["nuevo_registro"]);
            document.getElementById("tabla").innerHTML += "<td>" + this["nuevo_registro"].marca + "</td>" + "<td>" + this["nuevo_registro"].modelo + "</td>" + "<td>" + this["nuevo_registro"].ano + "</td>";
        }

    }

}