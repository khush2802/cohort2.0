let btn = document.querySelector("button");
let bar = 0;
let dload = document.querySelector(".download");
let p = document.querySelector("p");

btn.addEventListener("click",()=>{
     // alert("Button clicked!");

     btn.style.pointerEvents = "none";
     let num = Math.floor(Math.random()*50) + 50;
     console.log(num);

     var int = setInterval(()=>{
          bar++;
          dload.style.width = bar+"%";
          p.innerHTML = bar+"%";
          btn.innerHTML = "Downloading...";

     },num)

     setTimeout(()=>{
          clearInterval(int);
          btn.innerHTML = "Downloaded";
          btn.style.opacity = 0.3;
     },num*100);

});