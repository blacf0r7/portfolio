let work = document.getElementById("work");
let education = document.querySelector("education");
let list = document.querySelector('.qualific__list');

const massCards = [
    {
    name:"Пограммист",
    univer:"ПТУ имени Ленина",
    date:"2000 - 2010",
    },
    {
    name:"Пограммист2",
    univer:"МГУ",
    date:"2010 - 2014",
    },
    {
    name:"Пограммист3",
    univer:"МГИМО",
    date:"2015 - 2017",
    },
];

// let card = {
//     name:"Пограммbст",
//     univer:"ПТУ имени Ленина",
//     date:"2000 - 2010",
// };

for (let i = 0; i < massCards.length; i++){
    list.insertAdjacentHTML("afterbegin",`<article class="qualific__item">
                <h5>${massCards[i].name}</h5>
                <div class="qualific__item-bottom">
                  <p>${massCards[i].univer}</p>
                  <div class="qualific-item__data">
                    <img src="" alt="" />
                    <h6>${massCards[i].date}</h6>
                  </div>
                </div>
              </article>`)
}
    
work.onclick = function () {};