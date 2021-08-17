const inputs = document.querySelectorAll(".angle-input");
const triangleBtn = document.querySelector("#submit-btn");
const outputEl = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3){
  const sumOfAngles = angle1 + angle2 + angle3;
  
     return sumOfAngles;
}

function isTriangle() {
  const sumOfAngles = calculateSumOfAngles(
    Number(inputs[0].value),
    Number(inputs[1].value),
    Number(inputs[2].value)
  );
  if (sumOfAngles === 180) {
  
   outputEl.innerText = "Yah , The angles form a triangles ✌️✌️";
  } else {
    outputEl.innerText ="Oh Oh! These angles don't form a triangle 😥";
    
  }
}
triangleBtn.addEventListener("click", isTriangle)
