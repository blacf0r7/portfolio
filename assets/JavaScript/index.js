// alert(mane1);
// let age = prompt("Введите возвраст", 18);
// console.log(85 + 96, "1" + 1, 1 + +"2", "1" + "3", 3 / "3");
let name = "Arkadiy";
let age = 64;
let boolean = true; //false
let pusto_poka_chto = null; 
let nichego = undefined;
let people = {
    name: "kto tam",
    age: 18,
    ljet: true,
    children: {},
};










let h1 = document.getElementsByTagName("h1");
console.log(h1)
let h2Mass = document.getElementsByTagName("h3");
console.log(h2Mass)

h2Mass[0].innerText = "новый заголовок";

let classElem = document.getElementsByClassName("header_menu-item");

classElem[classElem.length - 1].innerHTML = "Вставной текст";

let work = document.getElementById("work");
let education = document.getElementById("education");
 console.log(work, education);

work.onclick = function () {
    education.style.display = "flex";
};
education.onclick = () => {
    
}
let a  = document.querySelectorAll("nav h3");
console.log(a); 