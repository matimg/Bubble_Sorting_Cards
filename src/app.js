/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {};

var arrayCards = [];
let btnDraw = document.getElementById("btn-draw");
var icons = ["♦", "♥", "♠", "♣"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "K", "Q", "J", "AS"];
btnDraw.addEventListener("click", function(event) {
  event.preventDefault();
  //obtengo valor de input
  var input1 = document.getElementById("input1");
  //obtengo las dos filas
  var row1 = document.getElementById("row1");
  var row2 = document.getElementById("row2");
  row1.innerHTML = "";
  if (input1.value <= 8) {
    //creo cartas segun cantidad ingresada en el input y las agrego a la fila
    for (var i = 0; i < input1.value; i++) {
      //creo numeros dinamicos
      var iconRandom = Math.floor(Math.random() * icons.length);
      var numRandom = Math.floor(Math.random() * numbers.length);
      //creo columna
      let col = document.createElement("div");
      col.classList = "col-1.9 pl-2";
      //creo carta
      let card = document.createElement("div");
      card.classList.add("bg-white", "card");
      //creo estructura head, body, footer de la carta
      //footer
      let div1 = document.createElement("div");
      div1.classList.add("justify-content-start", "ml-1", "header");
      var pHeader = document.createElement("p");
      pHeader.id = "header";
      pHeader.innerHTML = icons[iconRandom];
      div1.appendChild(pHeader);
      card.appendChild(div1);
      //body
      let div2 = document.createElement("div");
      div2.classList.add(
        "d-flex",
        "justify-content-center",
        "font-weight-bold",
        "body"
      );
      var pBody = document.createElement("p");
      pBody.id = "body";
      pBody.innerHTML = "<b>" + numbers[numRandom] + "</b>";
      div2.appendChild(pBody);
      card.appendChild(div2);
      //footer
      let div3 = document.createElement("div");
      div3.classList.add("d-flex", "justify-content-end", "mr-1", "footer");
      let subDiv = document.createElement("div");
      subDiv.classList.add("f");
      var pFooter = document.createElement("p");
      pFooter.id = "footer";
      pFooter.innerHTML = icons[iconRandom];
      subDiv.appendChild(pFooter);
      div3.appendChild(subDiv);
      card.appendChild(div3);
      //Si es corazon o diamante coloreo en rojo
      if (iconRandom == 0 || iconRandom == 1) {
        pHeader.style.color = "red";
        pFooter.style.color = "red";
      }
      //agrego carta a la columna
      col.appendChild(card);
      //agrego columna a la fila
      row1.append(col);

      //agrego valores de las carta a un nuevo array
      let valores = [icons[iconRandom], numbers[numRandom]];
      arrayCards.push(valores);
    }
    console.log(arrayCards[0][1]);
  }
});

const bubbleSort = arr => {
  let wall = arr.length - 1; //iniciamos el wall o muro al final del array
  while (wall > 0) {
    let index = 0;
    while (index < wall) {
      //comparar las posiciones adyacentes, si la correcta es más grande, tenemos que intercambiar
      if (arr[index] > arr[index + 1]) {
        let aux = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = aux;
      }
      index++;
    }
    wall--; //disminuir la pared para optimizar
  }
  return arr;
};

let btnBubble = document.getElementById("btn-bubble");
btnBubble.addEventListener("click", function(event) {
  event.preventDefault();
  console.log(bubbleSort(arrayCards));
});
