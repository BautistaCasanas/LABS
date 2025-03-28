
// let contador=0;

// let p = document.getElementById("contador");
// let btn = document.getElementById("sumar");

// btn.addEventListener('click',function(){
//     contador++;
//     p.innerHTML=contador;
// });



function sumar() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let result = document.getElementById('resultado');
    let warningMsg = document.getElementById("warning_msg");

    if (num1 === '' || num2 === '') {
        warningMsg.innerHTML = "Completar los campos";
        result.innerHTML = '';
        return;
    }

    let suma = Number(num1) + Number(num2);

    result.innerHTML = `Resultado: ${suma}`;
    warningMsg.innerHTML = '';
}


