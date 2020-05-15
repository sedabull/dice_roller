let dieRolls = [];

const total = document.querySelector('#total');
const numDice = document.querySelector('#num-dice');
const numSides = document.querySelector('#num-sides');
const allRolls = document.querySelector('#all-rolls');
const rollDice = document.querySelector('#roll-dice');
const resetPage = document.querySelector('#reset-page');
const revealRolls = document.querySelector('#reveal-rolls');

function rollDie (max) {
    return Math.ceil(Math.random() * max);
}//end rollDie

rollDice.addEventListener('click', function() {
    if(!dieRolls.length) {
        let sum = 0;
        const _numDice = Number(numDice.value);
        const _numSides = Number(numSides.value);
        
        for(let i = 0; i < _numDice; i++) {
            let _roll = rollDie(_numSides);
            
            sum += _roll;
            dieRolls.push(_roll);
        }//end for
        
        total.innerText = sum;
    }//end if
});//end rollDice

resetPage.addEventListener('click', function() {
    dieRolls = [];
    total.innerText = '???';
    allRolls.innerHTML = '';
});//end resetPage

revealRolls.addEventListener('click', function() {
    if(dieRolls.length && !allRolls.innerHTML) {
        for(let i = 0; i < dieRolls.length; i++) {
            allRolls.innerHTML += `<li class="die">${dieRolls[i]}</li>`;
        }//end for
    }//end if
})//end revealRolls