const quizForm = document.querySelector('.quiz-form');
const submitBtn = document.querySelector('#submit-btn');
const outputEl = document.querySelector('#output');
 const correctAns = ["90°", "right angled", "equilateral"];


 function calculateScore(){
     var score = 0 ;
     var index = 0 ;
     const formResults =
      new FormData(quizForm);
     console.log(formResults);
     for(let value of formResults.values()){
          if (value === correctAns[index]){
               score = score + 1 ;

          }
          index = index + 1 ;
        }

         //console.log(score);
         outputEl.innerText = 'Your score is '+ score ;
     }

submitBtn.addEventListener('click', calculateScore)