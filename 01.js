// console.log(document)
// console.log(document.domain)
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);
let tit = document.getElementsByTagName("title")
console.log(tit[0])
let titleChage = document.getElementById("titleChage")
console.log(titleChage)
titleChage.addEventListener('click' , ()=>{
     tit[0].innerText = "DOM Manipulated" 
})

let items = document.getElementById("items")

let title = document.getElementById("header-title")
title.innerText = "Adding the value"
title.style.backgroundColor = "orange"
title.style.border = "1px solid black"
title.style.color = "white"

items.style.color = "green"
items.style.fontWeight = "bold"
let addFruit = document.getElementById("add-fruit")
let add = document.getElementById("add")

add.addEventListener("click",()=>{

  console.log(addFruit.value)

    items.innerHTML =    items.innerHTML +  ` <li class="list-group-item">${ addFruit.value
     
    }</li>` 
    addFruit.value = " "
    
})
