let personResult=document.getElementById('personresult');
let computerResult=document.getElementById('computerresult');
let displayResult=document.getElementById('result');


document.body.addEventListener('keypress',event=>{
        if(event.key==='r'){
            playerchoice('rock')
        }else if(event.key==='p'){
            playerchoice('paper')
        }else if(event.key==='s'){
            playerchoice('scissor')
        }
    });

let wining=document.getElementById('wins');
let tied=document.getElementById('tie');
let losed=document.getElementById('lose');


let choices=['rock','paper','scissor'];
let computerChoice='';
let wins=0;
let lose=0;
let tie=0;
let results='';

    function playerchoice(choice){
        computerChoice=choices[Math.floor(Math.random()*3)];
        //console.log(computerChoice)

        if(computerChoice===choice){
            results=`It's Tied`;
            tie++;
            tied.textContent=`Tie: ${tie}`; 
        }
        else{
            switch(choice){
                case 'rock':
                results=(computerChoice==='scissor') ? 'You Win!' : 'You Lose';
              
               // result.textContent=results;
                break;
                case 'paper':
                results=(computerChoice==='rock') ? 'You Win!' : 'You Lose';
                //result.textContent=results;
                break;
                case 'scissor':
                results=(computerChoice==='paper') ? 'You Win!' : 'You Lose';
                //result.textContent=results;
                break;
            }
        }
        computerResult.textContent=`Computer Pick: ${computerChoice}`;
        personResult.textContent=`Person Pick: ${choice}`;
        displayResult.textContent=results;

        displayResult.classList.remove('greenClass','redClass');

        switch(results){
            case 'You Win!':
                   wins++;
                   displayResult.classList.add('greenClass');
                   wining.textContent=`Wins: ${wins}`
                break;
            case 'You Lose':
                   lose++;
                   displayResult.classList.add('redClass');
                   losed.textContent=`Loses: ${lose}`
                break;
        }
        savestorage();
    }

function savestorage(){
    localStorage.setItem('Wins',wins);
    localStorage.setItem('Lose',lose);
    localStorage.setItem('Tie',tie);
}
    
function getStorage(){
    wins= localStorage.getItem('Wins') ? parseInt(localStorage.getItem('Wins')) : 0;
    lose = localStorage.getItem('Lose') ? parseInt(localStorage.getItem('Lose')) : 0;
    tie= localStorage.getItem('Tie') ? parseInt(localStorage.getItem('Tie')) : 0;

    wining.textContent=`Wins: ${wins}`
    losed.textContent=`Loses: ${lose}`
    tied.textContent=`Tie's: ${tie}`

}
getStorage();


function reset(){
     wins=0;
     lose=0;
     tie=0;

     computerResult.textContent=``;
     personResult.textContent='';
     displayResult.textContent='';


    savestorage();
    getStorage(); 
}


