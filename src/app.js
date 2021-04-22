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
  //creo numeros dinamicos
  var iconRandom = Math.floor(Math.random() * icons.length);
  var numRandom = Math.floor(Math.random() * numbers.length);
  //creo cartas segun cantidad ingresada en el input y las agrego a la fila
  for (var i = 0; i < input1.value; i++) {
    let col = document.createElement("div");
    col.classList = "col";
    let card = document.createElement("div");
    card.classList.add("bg-white", "card");
    col.appendChild(card);
    row1.append(col);
  }
});
