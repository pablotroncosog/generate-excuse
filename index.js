
/* console.log(Math.floor(Math.random () *who.length)) 
console.log(Math.floor(Math.random () *what.length)) 
console.log(Math.floor(Math.random () *when.length))  */

let who = ['the dog','my granma','his turtle','my bird'];
let what = ['eat','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

function generateexcuse (whoArray, whatArray, whenArray) {
let tuki = Math.floor(Math.random () *whoArray.length)
let tuki2 =  Math.floor(Math.random () *whatArray.length)
let tuki3 = Math.floor(Math.random () *whenArray.length) 

return who[tuki] + ' ' + what[tuki2] + '' + when[tuki3];
} 

let result = generateexcuse (who, what, when)

console.log(generateexcuse (who, what, when))


const parrafo = document.querySelector ('#excuse');


parrafo.innerHTML = result;


