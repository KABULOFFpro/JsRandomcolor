"use strict"

let item = [...document.querySelectorAll(".item")]
let items = [...document.querySelectorAll(".items")]

// console.log(item);

function randomColor1() {
    return Math.floor(Math.random() * 255 + 1) + 1

}
// console.log(randomColor1());

function randomColor2() {
    return Math.floor(Math.random () * 999) + 1
}
for (let i = 0; i < item.length; i++) {
    item[i].addEventListener("click", function () {
        item[i].style.background = `rgba(${randomColor1()}, ${randomColor1()}, ${randomColor1()}, 0.${randomColor2()})`
    })
   /*  console.log(item[i]); */
}


// console.log(items);  
let randomLinerColor1 = function () {
    return Math.floor(Math.random() * 361) + 1 
}
for (let i = 0; i < items.length; i++) {
   items[i].addEventListener("click", function () {
    items[i].style.background = `linear-gradient(${randomLinerColor1()}deg, rgba(${randomColor1()}, ${randomColor1()}, ${randomColor1()}, 0.${randomColor2()}), rgba(${randomColor1()}, ${randomColor1()}, ${randomColor1()}, 0.${randomColor2()}))`
})
    
}


// console.log(item);

// item.addEventListener("click", function () {
//     // console.dir(item);
//     item.style.transition = ".5s"
//     // item.style.border = "yellow"
//     if (item.style.background == "red") {   
//         item.style.background = "#fff"
//     }else{
//         item.style.background = "red"
//     }
// })