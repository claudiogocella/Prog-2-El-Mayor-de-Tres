let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let dato3 = document.getElementById("dato3");
let btnEnviar = document.getElementById("enviar");
let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");
let rotulo3 = document.getElementById("rotulo3");

rotulo1.innerHTML = "Ingrese el primer numero:";
rotulo2.innerHTML = "Ingrese el segundo numero:";
rotulo3.innerHTML = "Ingrese el tercer numero:";

btnEnviar.addEventListener("click", () => {
  let primernumero: number = Number(dato1.value);
  let segundonumero: number = Number(dato2.value);
  let tercernumero: number = Number(dato3.value);
  if (primernumero > segundonumero && primernumero > tercernumero) {
    console.log("El primer numero es el mayor");
  } else if (segundonumero > primernumero && segundonumero > tercernumero) {
    console.log("El segundo numero es el mayor");
  } else if (tercernumero > primernumero && tercernumero > segundonumero) {
    console.log("El tercer numero es el mayor");
  }
});
