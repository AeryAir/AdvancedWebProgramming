let button = document.querySelector('#button');
let image = document.querySelector('.image1');
let source = ['1.jpg', '2.jpg', '3.jpg'];
let i = 0; 
button.addEventListener('click', ()=>{
	image.src = source[i]
	i = (i + 1) % source.length;
})

/*
 * let button = document.querySelector('#button');
 * button.addEventListener('click', imageSwap);
 * 
 * const images = ["1.png","2.png"];
 * let flag = 0;
 * 
 * function imageSwap() {
 * 	let elem = documetn.querySelector('img');
 * 	flag++;
 * 
 * 	elem.setAttribute("src", image[flag % image.length]);
 * 	elem.className = "image" + ((flag % image.length) + 1);
 * 
 * }
 * /
