var video = document.querySelector(".video");
var juice = document.querySelector(".orange-juice");
var btn = document.getElementById("play-pause");
const skipBtns = document.querySelectorAll("[data-skip]");
var volume = document.getElementById("volume");
var full = document.getElementById("full");
var exit = document.getElementById("exit");



function togglePlayPause() {
  if (video.paused) {
    btn.className = "pause";
    video.play();
    
  } else {
    btn.className = "play";
    video.pause();
  }
}
window.onkeydown = function(event){
    if(event.keyCode === 32) {
        togglePlayPause();
    }
};
video.onclick=function(){
    togglePlayPause();
    }
btn.onclick=function(){
        togglePlayPause();
        }

video.addEventListener("timeupdate",function(){
    var juicePosition = video.currentTime  / video.duration
    juice.style.width=juicePosition*100+ "%";
    if(video.ended){
        btn.className="play"
    }
})

volume.addEventListener("change",function(e){
    video.volume=e.currentTarget.value/100;
    
})




skipBtns.forEach((btn) => {
    btn.addEventListener("click", handleSkip);
  });
  
  function handleSkip() {
    video.currentTime += Number(this.dataset.skip);
  }


  full.addEventListener("click",togglefullscreen)
  function togglefullscreen(){
    if(video.requestFullscreen){
        video.requestFullscreen()
    } else if(video.webkitRequestFullScreen){
        video.webkitRequestFullScreen()
    } else if(video.mozRequestFullScreen){
        video.mozRequestFullScreen()
    }
  }

  const foe=document.querySelector(".fermat");
const sea=document.querySelector(".fa-magnifying-glass")
const cancel=document.querySelector(".kaset")
sea.addEventListener("click",()=>{
  foe.classList.toggle("hidden")
})
cancel.addEventListener("click",()=>{
  foe.classList.add("hidden")
})


//   exit.addEventListener("click",toggleexitscreen)
//   function toggleexitscreen(){
//     if(video.exitFullscreen){
//         video.exitFullscreen()
//     } else if(video.webkitexitFullScreen){
//         video.webkitexitFullScreen()
//     } else if(video.mozexitFullScreen){
//         video.mozexitFullScreen()
//     }
//   }
