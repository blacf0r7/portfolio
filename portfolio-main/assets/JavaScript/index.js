let work = document.getElementById("work");
let education = document.querySelector("#education");
let list = document.querySelector(".qualific__list");

const massCards = [
  {
    name: "Пограммист",
    company: "Epic Games",
    date: "2015 - Present",
  },
  {
    name: "Пограммист2",
    company: "Ubisoft",
    date: "2017 - Present",
  },
];

work.onclick = function () {
  list.innerHTML = "";
  work.style.color = "red";
  education.style.color = " #5671a6";
  for (let i = 0; i < massCards.length; i++) {
    list.insertAdjacentHTML(
      "afterbegin",
      `<article class="qualific__item">
                <h5>${massCards[i].name}</h5>
                <div class="qualific__item-bottom">
                  <p>${massCards[i].company}</p>
                  <div class="qualific-item__data">
                    <img src="" alt="" />
                    <h6>${massCards[i].date}</h6>
                  </div>
                </div>
              </article>`
    );
  }
};

const massCardsEdu = [
  {
    name: "Пограммист",
    univer: "ПТУ имени Ленина",
    date: "2000 - 2010",
  },
  {
    name: "Пограммист2",
    univer: "МГУ",
    date: "2010 - 2014",
  },
  {
    name: "Пограммист3",
    univer: "МГИМО",
    date: "2015 - 2017",
  },
];

education.onclick = function () {
  list.innerHTML = "";
  education.style.color = "red";
  work.style.color = "#5671a6";
  for (let i = 0; i < massCardsEdu.length; i++) {
    list.insertAdjacentHTML(
      "afterbegin",
      `<article class="qualific__item">
                <h5>${massCardsEdu[i].name}</h5>
                <div class="qualific__item-bottom">
                  <p>${massCardsEdu[i].univer}</p>
                  <div class="qualific-item__data">
                    <img src="" alt="" />
                    <h6>${massCardsEdu[i].date}</h6>
                  </div>
                </div>
              </article>`
    );
  }
};
