let arr = JSON.parse(localStorage.getItem("arr"));

let user = document.getElementById("name");
let age = document.getElementById("age");
let email = document.getElementById("email");
let select = document.getElementById("myselect");
let t = document.getElementById("tableid");
let g = document.getElementsByName("gender");



function add() {

  t.innerHTML = "";

  let row = t.insertRow();
  let cel1 = row.insertCell();
  let cel2 = row.insertCell();
  let cel3 = row.insertCell();
  let cel4 = row.insertCell();
  let cel5 = row.insertCell();

  cel1.innerHTML = "name";
  cel2.innerHTML = "age";
  cel3.innerHTML = "email";
  cel4.innerHTML = "gender";
  cel5.innerHTML = "select";

  for (let i = 0; i < arr.length; i++) {

    let addR = document.getElementById("tableid");
    let Row = addR.insertRow();




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

    but.addEventListener("click", function () {
      arr = arr.filter((value, index) => {
        return index !== i;
      })
      add();
      localStorage.setItem("arr",JSON.stringify(arr));
    });

    cel1.innerHTML = arr[i].name;
    cel2.innerHTML = arr[i].age;
    cel3.innerHTML = arr[i].email;
    cel4.innerHTML = arr[i].gender;
    cel5.innerHTML = arr[i].select;
    but.innerHTML = "x";
    console.log(arr[i]);

  }

}

btn.addEventListener("click", () => {
  const selectGender = Array.from(g).filter((g) => g.checked);
  let obj = {
    name: user.value,
    age: age.value,
    email: email.value,
    select: select.value,
    gender: selectGender[0]?.value ?? ""

  }
  arr.push(obj)
  add()
  localStorage.setItem("arr",JSON.stringify(arr));
  console.log(obj);
})

let gend = "";
let name = "";

  

g.forEach(function (genE) {

  genE.addEventListener("change", function () {
    if (genE.checked) {
      gend = genE.value;
      console.log(gend);

    }

  })

});

add();