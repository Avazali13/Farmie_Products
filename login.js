const form = document.querySelector(".form");
const form1 = document.querySelector(".form1");
const nameerror = document.querySelector(".nameerror");
const surnameerror = document.querySelector(".surnameerror");
const emailerror = document.querySelector(".emailerror");
const pswerror = document.querySelector(".pswserror");
const pswrepeaterror = document.querySelector(".psw-repeaterror");
const pswrepeaterror2 = document.querySelector(".psw-repeaterror2");
const regbtn = document.getElementById("regbtn");
const logbtn = document.getElementById("logbtn");
const register = document.querySelector(".regclass");
const login = document.querySelector(".logclass");

const emailserror = document.querySelector(".emailserror");

const pswwerror = document.querySelector(".psww");
form1.addEventListener("submit", (e) => {
    e.preventDefault();
    if (text.test(form1.emails.value)) {
        form1.emails.setAttribute("style", "border:1px solid green");
        emailserror.classList.add("hidden");
      } else {
     
        form1.emails.setAttribute("style", "border:2px solid red");
        emailserror.classList.remove("hidden");
      }
 
      if (textregex.test(form1.psww.value)) {
        form1.psww.setAttribute("style", "border:1px solid green");
        pswwerror.classList.add("hidden");
      } else {
        form1.psww.setAttribute("style", "border:2px solid red");
        pswwerror.classList.remove("hidden");
      } 
})

logbtn.addEventListener("click", () => {
  register.classList.add("hidden");
  login.classList.remove("hidden");
  regbtn.style.border = "none";
  logbtn.style.border = " 2px solid white";
});

regbtn.addEventListener("click", () => {
  login.classList.add("hidden");
  register.classList.remove("hidden");
  logbtn.style.border = "none";
  regbtn.style.border = " 2px solid white";
});

const textregex = /^[a-zA-Z0-9]{4,12}$/;
const text = /^([\w\-\.]+)@((\[([0-9]{1,3}\.){3}[0-9]{1,3}\])|(([\w\-]+\.)+)([a-zA-Z]{2,4}))$/
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (textregex.test(form.name.value)) {
    form.name.setAttribute("style", "border:1px solid green");
    nameerror.classList.add("hidden");
  } else {
    form.name.setAttribute("style", "border:2px solid red");
    nameerror.classList.remove("hidden");
  }
  if (textregex.test(form.surname.value)) {
    form.surname.setAttribute("style", "border:1px solid green");
    surnameerror.classList.add("hidden");
  } else {
    form.surname.setAttribute("style", "border:2px solid red");
    surnameerror.classList.remove("hidden");
  } 
  if (text.test(form.email.value)) {
    form.email.setAttribute("style", "border:1px solid green");
    emailerror.classList.add("hidden");
  } else {
 
    form.email.setAttribute("style", "border:2px solid red");
    emailerror.classList.remove("hidden");
  }
  console.log(form.psws)
  if (textregex.test(form.psws.value)) {
    form.psws.setAttribute("style", "border:1px solid green");
    pswerror.classList.add("hidden");
  } else {
    form.psws.setAttribute("style", "border:2px solid red");
    pswerror.classList.remove("hidden");
  }
  if (textregex.test(form.pswrepeat.value)) {
    form.pswrepeat.setAttribute("style", "border:1px solid green");
    pswrepeaterror.classList.add("hidden");
  } else {
    form.pswrepeat.setAttribute("style", "border:2px solid red");
    pswrepeaterror.classList.remove("hidden");
  }
});


form.addEventListener("keyup",()=>{

    if((form.psws.value)==(form.pswrepeat.value)){
        form.pswrepeat.setAttribute("style", "border:1px solid green");
        form.psws.setAttribute("style", "border:1px solid green");

        pswrepeaterror2.classList.add("hidden")
       
    }else{
        pswrepeaterror2.classList.remove("hidden")
    form.pswrepeat.setAttribute("style", "border:2px solid red");
    form.psws.setAttribute("style", "border:2px solid red");
     }
})


const foe=document.querySelector(".fermat");
const sea=document.querySelector(".fa-magnifying-glass")
const cancel=document.querySelector(".kaset")
sea.addEventListener("click",()=>{
  foe.classList.toggle("hidden")
})
cancel.addEventListener("click",()=>{
  foe.classList.add("hidden")
})








