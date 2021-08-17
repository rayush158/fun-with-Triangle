const sides = document.querySelectorAll(  '.side-input');
const hypotenuseBtn = document.querySelector('#submit-btn');
const outputEl = document.querySelector('#output');

 function calculateSumOfSquares(a, b){
     const sumOfSquares = a*a + b*b;
     
     return sumOfSquares;

 }


function calculateHypotenuse(){
   const sumOfSquares= calculateSumOfSquares(Number(sides[0].value) , Number(sides[1].value));
 const lenghtOfHypotenuse =  Math.sqrt(sumOfSquares);
 outputEl.innerText ="The lenght of Hypotenuse is " + lenghtOfHypotenuse.toFixed(2) + " cm";

    // console.log(sumOfSquares);
}
hypotenuseBtn.addEventListener('click', calculateHypotenuse);