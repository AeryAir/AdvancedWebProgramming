/*
let button = document.querySelector('#myButton');
let button1 = document.querySelector('#myButton1');
let button2 = document.querySelector('#myButton2');

let paragraphe = document.querySelector('#wynik');
let i = 0;

button.addEventListener('click', test);
button1.addEventListener('click', test1);
button2.addEventListener('click', test2);

function test(){
	paragraphe.innerText = 'Test counter: ' + i++;
}

function test1(){
	paragraphe.innerText = "On";
	button.classList.add('active');
}

function test2(){
	i = 0;
	paragraphe.innerText = "Off";
	button.classList.remove('active');
}

*/

let button = document.querySelector('#myButton');
let button1 = document.querySelector('#myButton1');
let button2 = document.querySelector('#myButton2');

let paragraphe = document.querySelector('#wynik');
let i = 0;

button1.addEventListener('click', test1);
button2.addEventListener('click', test2);
 
function procceedButton() {
	paragraphe.innerText = 'Test counter: ' + i++;
}
 
function test1(){
	button.addEventListener('click', procceedButton);
	paragraphe.innerText = "On";
}

function test2(){
	button.removeEventListener('click', procceedButton);
	paragraphe.innerText = "Off";
	i=0;
}


//Exercice 4A


function secondFunction(){
	let button.add
}
