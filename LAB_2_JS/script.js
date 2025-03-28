
let contador=0;

let p = document.getElementById("contador");
let btn = document.getElementById("sumar");

btn.addEventListener('click',function(){
    contador++;
    p.innerHTML=contador;
});