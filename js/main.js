
// slider part

const prevBtn = document.querySelector(".prebtn");
const nextBtn = document.querySelector(".nextbtn");
const slides = document.querySelectorAll(".banner-infox");

let currentSlide = 1;
let latestSlide = slides.length - 1;


 function next () { 
  
  if (currentSlide === latestSlide) {
    currentSlide = 0
  } else {
    currentSlide ++
  }


  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${(index-currentSlide)*109}%)`;
  })

}
next()

nextBtn.addEventListener("click",next)
prevBtn.addEventListener("click",prev)
 
 function prev () {

  if (currentSlide === 0) {
    currentSlide = latestSlide;
  } else {
    currentSlide--;
  }

  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${(index-currentSlide)*109}%)`;
  });
}





const all2=document.querySelectorAll('.slider')
const info=document.querySelector(".slider-info")

let current=0
let late2=all2.length-1

  setInterval(function(abc){
    if(current<=0){
        current=late2;
    }
    else{
        current--;
    }

    all2.forEach((slide, index)=>{
        
        slide.style.transform="translateX(" + 100 *(index - current)+ "%)" ;
        // slide.children[1].classList.add("animate__fadeInUp")
    } ) ; 
},3000)



// animations part
const section2s1= document.querySelector(".section2s1")
const section2s2= document.querySelector(".section2s2")
const section2s3= document.querySelector(".section2s3")
const section2s4= document.querySelector(".section2s4")
const section2s5= document.querySelector(".section2s5")

window.addEventListener('scroll',()=>{
    if(window.scrollY  >= 800){
        section2s1.classList.remove('hidden') 
        section2s2.classList.remove('hidden') 
        section2s3.classList.remove('hidden') 
        section2s4.classList.remove('hidden') 
        section2s5.classList.remove('hidden') 
        }  }
)

const section4s1= document.querySelector(".section4s1")
const section4s2= document.querySelector(".section4s2")
const section4s3= document.querySelector(".section4s3")
const section4s4= document.querySelector(".section4s4")

window.addEventListener('scroll',()=>{
    if(window.scrollY  >= 1650){
        section4s1.classList.remove('hidden') 
        section4s2.classList.remove('hidden') 
        section4s3.classList.remove('hidden') 
        section4s4.classList.remove('hidden') 
   
        }  }
)

const section5s1= document.querySelector(".section5s1")
const section5s2= document.querySelector(".section5s2")
const section5s3= document.querySelector(".section5s3")
const section5s4= document.querySelector(".section5s4")
const section5s5= document.querySelector(".section5s5")

window.addEventListener('scroll',()=>{
    if(window.scrollY  >= 2215){
        section5s1.classList.remove('hidden') 
        section5s2.classList.remove('hidden') 
        section5s3.classList.remove('hidden') 
        section5s4.classList.remove('hidden') 
        section5s5.classList.remove('hidden') 
   
        }  }
)


const section7s1= document.querySelector(".section7s1")
const section7s2= document.querySelector(".section7s2")
const section7s3= document.querySelector(".section7s3")

window.addEventListener('scroll',()=>{
    if(window.scrollY  >= 3415){
        section7s1.classList.remove('hidden') 
        section7s2.classList.remove('hidden') 
        section7s3.classList.remove('hidden') 
       
   
        }  }
)

const section7s4= document.querySelector(".section7s4")
const section7s5= document.querySelector(".section7s5")
const section7s6= document.querySelector(".section7s6")

window.addEventListener('scroll',()=>{
    if(window.scrollY  >= 4035){
        section7s4.classList.remove('hidden') 
        section7s5.classList.remove('hidden') 
        section7s6.classList.remove('hidden') 
       
   
        }  }
)

const section10s1= document.querySelector(".section10s1")
const section10s2= document.querySelector(".section10s2")
const section10s3= document.querySelector(".section10s3")
const section10s4= document.querySelector(".section10s4")

window.addEventListener('scroll',()=>{
    if(window.scrollY  >= 5700){
        section10s1.classList.remove('hidden') 
        section10s2.classList.remove('hidden') 
        section10s3.classList.remove('hidden') 
        section10s4.classList.remove('hidden') 
       
   
        }  }
)

const foe=document.querySelector(".fermat");
const sea=document.querySelector(".fa-magnifying-glass")
const cancel=document.querySelector(".kaset")
sea.addEventListener("click",()=>{
  foe.classList.toggle("hidden")
})
cancel.addEventListener("click",()=>{
  foe.classList.add("hidden")
})






const darkmode=document.querySelector("#qere");
const theme=localStorage.getItem("theme");
// const refresh=document.querySelector("#refresh")
var btn = document.querySelector(".play");

if (theme==="dark") document.body.classList.add('dark')

darkmode.addEventListener("click",()=>{
    document.body.classList.toggle("dark")
    btn.classList.toggle("pause");
    if(theme==="dark"){
        localStorage.setItem('theme','light');
     
    } else{
       localStorage.setItem("theme",'dark');
 
    }

})
