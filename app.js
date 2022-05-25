const expandNavHead = document.querySelectorAll(".nav-item-head");
const uls = document.querySelectorAll('nav ul');
const dropArrowLight = document.querySelectorAll('.arrow-light');
const dropArrowDark = document.querySelectorAll('.arrow-dark');
const hamburger = document.querySelector(".nav-mobile-hamburger");
const navClose = document.querySelector(".nav-mobile-close");
let lastClick;
for(let i = 0; i<expandNavHead.length; i++){
    expandNavHead[i].addEventListener('click',(e)=>{
        if(uls[i].classList.contains("visible")) {
            uls[i].classList.remove('visible');
            dropArrowLight[i].style.transform = "rotate(0turn)"
            dropArrowDark[i].style.transform = "rotate(0turn)"
        }
        else{ 
            // for(ul of uls){
            //     if(ul.classList.contains("visible")) ul.classList.remove("visible");
            // }
            if(lastClick>=0){
                 uls[lastClick].classList.remove("visible");
                   dropArrowLight[i].style.transform = "rotate(0turn)"
            dropArrowDark[i].style.transform = "rotate(0turn)"
            }
           
            uls[i].classList.add('visible');
               dropArrowLight[i].style.transform = "rotate(0.5turn)"
            dropArrowDark[i].style.transform = "rotate(0.5turn)"
            lastClick = i;
           
        }
        e.stopPropagation();
    });
    // if(uls[i].classList.contains("visible")){
        
       
    // }
}
for (let i = 0; i < expandNavHead.length; i++) {
    document.querySelector("body").addEventListener("click",(e)=>{
        uls[i].classList.remove("visible");
           dropArrowLight[i].style.transform = "rotate(0turn)"
            dropArrowDark[i].style.transform = "rotate(0turn)"
    });
    
}

hamburger.addEventListener("click",()=>{
    // hamburger.style.display = "none";
    hamburger.classList.add("display-none");
    // navClose.style.display =  "initial";
    navClose.classList.add("display-initial");
    document.querySelector(".nav-items-mobile-row").classList.add("display-initial");
});
navClose.addEventListener("click",()=>{
     hamburger.classList.remove("display-none");
    // hamburger.style.display = "initial";
    // navClose.style.display =  "none";
     navClose.classList.remove("display-initial");
    document.querySelector(".nav-items-mobile-row").classList.remove("display-initial");
});

window.addEventListener('resize',()=>{
    if(window.matchMedia("(min-width:1000px)")){
        navClose.classList.remove("display-initial");
         hamburger.classList.remove("display-none");
         document.querySelector(".nav-items-mobile-row").classList.remove("display-initial");
    }
});
// window.addEventListener('resize',()=>{
//     if(window.matchMedia("(max-width:1000px)")){
//         hamburger.classList.remove("display-none");
//         // navClose.classList.remove("display-initial");
//         //  document.querySelector(".nav-items-mobile-row").classList.remove("display-initial");
//     }
// });
// window.addEventListener('resize',()=>{
//     if(window.matchMedia("(width:1000px)")){
//         for(nav of expandNavHead){
//             nav.style.color="hsl(208, 49%, 24%)";
//         }
//     }else if(window.matchMedia("(min-width:1000px)")){
//         nav.style.color="hsl(240, 2%, 79%)";
//     }
// });



// for(let nav of expandNavHead){
// nav.addEventListener('click', ()=>{
//     document.querySelector("nav ul").style.display = "flex";
// });
// }