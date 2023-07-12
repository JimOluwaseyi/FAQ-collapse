const arrowDown =  document.querySelectorAll('.fa-chevron-down');
/* [i, i, i, i, i] */

const closeButtons =  document.querySelectorAll('.fa-xmark');


const hidden = document.querySelectorAll('.hidden')
/* [p, p, p, p, p] */ 
const  header2 = document.querySelector('h2');

const content = document.querySelector('.content')

console.log(arrowDown)
console.log(hidden)


for(let j = 0; j< arrowDown.length; j++){
    arrowDown[j].addEventListener('click', (e)=>{
        hidden[j].style.color = 'grey';
        hidden[j].style.display = 'block';
        
    });
}





