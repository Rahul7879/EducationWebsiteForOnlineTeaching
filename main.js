window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY> 0)
})


const fags = document.querySelectorAll('.faq');

fags.forEach(faq =>{
    faq.addEventListener('click', ()=> {
faq.classList.toggle('open');


    })
})

const menu = document.querySelector(".nav_menu")
const closebtn = document.querySelector("#close-menu-btn")
const menubtn = document.querySelector("#open-menu-btn");


menubtn.addEventListener('click', ()=>{
    menu.style.display = "flex";
    closebtn.style.display = "inline-block";
    menubtn.style.display = "none";
})

closebtn.addEventListener('click', ()=>{
    menu.style.display = "none";
    closebtn.style.display = "none";
    menubtn.style.display = "block";
   
})

// classList
// add 
// remove 
// toggle 
// contains

// const header = document.querySelector(".header_container")
// console.log(header.classList);
// console.log("hello iam ok");
// header.classList.remove("container")
// header.classList.add("container")
// header.classList.toggle("container")
// header.classList.toggle("container")
// let iscontain = header.classList.contains("container")
// console.log(iscontain)

// const btn = document.querySelector(".btn-primary")
// console.log(btn.classList)
// btn.classList.remove("btn-primary")
// btn.classList.add("new_btn")
// console.log(btn.classList)


// document.CreateElement()
// appent
// prepend
// remove

// const newliItem = document.createElement("li");
// newliItem.textContent = "newItem"
//  const nav_menu = document.querySelector(".nav_menu")
//  nav_menu.append(newliItem)
//  nav_menu.prepend(newliItem)
// textContent.remove()

