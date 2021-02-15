

//Movement Animation to happen
const card = document.querySelector(".cardPapa");
const container = document.querySelector(".containerPapa");
//Items
const title = document.querySelector(".title");
const cologne = document.querySelector(".cologne img");
const purchase = document.querySelector(".purchase");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");

//Moving Animation Event
container.addEventListener("mousemove", (e) => {
let xAxis = (window.innerWidth / 2 - e.pageX) / 75;
let yAxis = (window.innerHeight / 2 - e.pageY) / -55;
card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
container.addEventListener("mouseenter", (e) => {
card.style.transition = "none";
//Popout
title.style.transform = "translateZ(150px)";
cologne.style.transform = "translateZ(200px) rotateZ(-45deg)";
description.style.transform = "translateZ(125px)";
sizes.style.transform = "translateZ(100px)";
purchase.style.transform = "translateZ(75px)";
});
//Animate Out
container.addEventListener("mouseleave", (e) => {
card.style.transition = "all 0.5s ease";
card.style.transform = `rotateY(0deg) rotateX(0deg)`;
//Popback
title.style.transform = "translateZ(0px)";
cologne.style.transform = "translateZ(90px) rotateZ(0deg)";
description.style.transform = "translateZ(0px)";
sizes.style.transform = "translateZ(0px)";
purchase.style.transform = "translateZ(0px)";
});
//Button onClick 
// let btnGallon = document.querySelector('#gallon')
// let btnPint = document.querySelector('#pint')
// let btnClassy = document.querySelector('#classy')
// let btnDrop = document.querySelector('#drop')

// btnGallon.addEventListener('click',() => btnGallon.style.backgroundColor='#000000')
// btnPint.addEventListener('click',() => btnPint.style.backgroundColor='#000000')
// btnClassy.addEventListener('click',() => btnClassy.style.backgroundColor='#000000')
// btnDrop.addEventListener('click',() => btnDrop.style.backgroundColor='#000000')