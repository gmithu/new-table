



function add() {

  let addR = document.getElementById("tableid");
  let Row = addR.insertRow();


  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let email = document.getElementById("email").value;
  let cource = document.getElementById("myselect").value;

  let but = document.createElement("button");

  let cel1 = Row.insertCell();
  let cel2 = Row.insertCell();
  let cel3 = Row.insertCell();
  let cel4 = Row.insertCell();
  let cel5 = Row.insertCell();

  Row.appendChild(but);
  but.style.color = "white";
  but.style.backgroundColor = "red";
  but.style.width = "25px"
  but.style.height = "25px";

  but.addEventListener("click", function (event) {
    delte();
  });

  cel1.innerHTML = name;
  cel2.innerHTML = age;
  cel3.innerHTML = email;
  cel4.innerHTML = gend;
  cel5.innerHTML= cource;
  but.innerHTML = "x";
}

function delte() {
  event.target.parentElement.remove();
}

let gend = "";
let name = "";

let radiob = document.getElementsByName("radiobtn");

radiob.forEach(function (genE) {

  genE.addEventListener("change", function () {
    if (genE.checked) {
      gend = genE.value;
      console.log(gend);
    
    }

  })

});