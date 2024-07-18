import { letter, wordList } from "./arrays.js";

export function hangman() {
    const start = document.querySelector('#start');
    const pseudo = document.querySelector('#name');
    const newWord = document.querySelector('#word-btn');
    const menu = document.querySelector('#menu');
    const keyboard = document.querySelector('#keyboard');
    const wordContainer = document.querySelector('#word');
    const life = document.querySelector('#heart');
    const endZone = document.querySelector('#end');
    const heart1 = document.querySelector('#life1');
    const heart2 = document.querySelector('#life2');
    const heart3 = document.querySelector('#life3');
    const heart4 = document.querySelector('#life4');
    const heart5 = document.querySelector('#life5');

    //console.log(start, pseudo, newWord, menu, keyboard, life, heart1, heart2, heart3, heart4, heart5);

    function hiddenStart() {
        menu.style.display='none';
    }

    function showButtonNewWord() {
        newWord.style.display='flex';
    }

    function showLife() {
        life.style.display='flex';
    }

    function showKeyboard() {
        keyboard.style.display='flex';
    }

    function findWord() {
        wordContainer.style.display='flex';
    }

    start.addEventListener('click', ()=> {
        hiddenStart();
        showButtonNewWord();
        newWord.addEventListener('click', ()=>{
            showLife();
            showKeyboard();
            findWord();

            
            
            let k = 0;
            let lifeRemaining = 5;

            let wordChoice = wordList[Math.floor(Math.random()*wordList.length)];

            console.log(wordChoice);//Penser à commenter à la fin

            while(wordContainer.firstChild) {
                wordContainer.removeChild(wordContainer.firstChild);
            }

            for(let i= 0; i<wordChoice.length; i++) {
                const hiddenWord = document.createElement('div');
                hiddenWord.setAttribute('id', `hidden-word-${i}`);
                hiddenWord.textContent="_";

                wordContainer.append(hiddenWord);
            }

            for(let i=0; i<letter.length; i++) {
                const btnLetter = document.createElement('button');
                btnLetter.setAttribute('id', letter[i]);
                btnLetter.textContent=letter[i];

                btnLetter.addEventListener('click', ()=> {
                    btnLetter.disabled=true;
                    let choice = wordChoice.indexOf(btnLetter.id);

                    //console.log(choice);

                    if(choice<0) {
                        lifeRemaining--;
                        if(lifeRemaining==0) {
                            const end = document.createElement('h3');
                            end.textContent="Pendu !"

                            newWord.style.display='flex';
                        }
                    } else {
                        document.querySelector(`hidden-word-${choice}`).textContent=letter.id;
                        k++;
                        
                    }
                        
                })

               
            }
        })
    })
}