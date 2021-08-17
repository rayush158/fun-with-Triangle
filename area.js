const inputSide = document.querySelectorAll(".side");
const calculateBtn = document.querySelector("#submit-btn");
const outputEl = document.querySelector("#output");

   function calculateArea(){
     let sideA = Number(inputSide[0].value) ;
     let sideB = Number(inputSide[1].value) ;
     let sideC = Number(inputSide[2].value) ;
       
      if (sideA == 0 || sideB == 0 || sideC == 0 ){
          showMessage("please enter valid Side....");
      
      }else {
          let parameter = Number(sideA) + Number(sideB) + Number(sideC);
          let area = findArea(sideA, sideB , sideC, parameter);
          showMessage(` Area : ${area.toFixed(2)} cm²`);
      }
   };
   const showMessage = (msg) => {
       outputEl.innerText = msg;
       outputEl.style.display = "block";
   };
   const  findArea = (a,b,c,s) => {
       return Math.sqrt(s*(s-a)*(s-b)*(s-c));
   };

   calculateBtn.addEventListener('click' ,calculateArea);