let main = document.querySelector("main");
let btn = document.querySelector("button");

let arr = ["red", "green", "blue", "yellow", "purple", "orange"];
btn.addEventListener("click",function(){

     let c1 = Math.random()*256;
     let c2 = Math.random()*256;
     let c3 = Math.random()*256;

     let r = Math.random()*361;

     let x = Math.random()*101;
     let y = Math.random()*101;

     // console.log("Button clicked!");
     let h1 = document.createElement("h1");
     h1.innerHTML = arr[Math.floor(Math.random()*arr.length)];

     h1.style.position = "absolute";
     h1.style.color = `rgb(${c1}, ${c2}, ${c3})`;
     h1.style.rotate = r+"deg";
     h1.style.left = x+"%";
     h1.style.top = y+"%";


     // console.log(h1);
     main.appendChild(h1);


})