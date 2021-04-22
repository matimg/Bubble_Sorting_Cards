/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  //console.log("Hello Rigo from the console!");
};

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

  //creo cartas segun cantidad ingresada en el input y las agrego a la fila
  for (var i = 0; i < input1.value; i++) {
    //creo numeros dinamicos
    var iconRandom = Math.floor(Math.random() * icons.length);
    var numRandom = Math.floor(Math.random() * numbers.length);
    //creo columna
    let col = document.createElement("div");
    col.classList = "col";
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
  }
});
