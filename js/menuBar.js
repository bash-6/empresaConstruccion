/*
let pauseScroll = document.querySelector('body')
let esMovil = window.innerWidth<=800 ;
let stop = false;

document.querySelector('#menuBar').addEventListener('click',()=>{
	//document.querySelector('#navegacion').classList.toggle('mostrarMenu');
	
	if (document.querySelector('#navegacion').classList.contains('mostrarMenu')) {
	document.querySelector('#navegacion').classList.remove('mostrarMenu');
	pauseScroll.style.overflow='visible'
	document.querySelector('#menuBar i').classList.add('fa-bars')
	document.querySelector('#menuBar i').classList.remove('fa-xmark')
	//<i class="fa-solid fa-xmark"></i>
	return false;
	}
	document.querySelector('#navegacion').classList.add('mostrarMenu');
	document.querySelector('#menuBar i').classList.remove('fa-bars')
	document.querySelector('#menuBar i').classList.add('fa-xmark')
	pauseScroll.style.overflow='hidden'
})

let scrollPos = 0;

window.addEventListener('scroll',()=>{
	   st= window.pageYOffset || document.documentElement.scrollTop; 
	if (st > scrollPos) {
		document.querySelector('#header').style.transform='translateY(-50px)';
	}else{
		document.querySelector('#header').style.transform='translateY(0px)';
	}
	scrollPos = window.pageYOffset || document.documentElement.scrollTop; 
},false);


//[...document.querySelectorAll('#botonCategorias button')].forEach(function(item) {
//	item.addEventListener('click',function(e) {
//		console.log('click')
//	});
//});
*/

const main = document.querySelector("#servicio");
function insertNodo(template) {
	let servicio = document.querySelector(`#${template}`).content.cloneNode(true);
	main.innerHTML=''
	main.appendChild(servicio)
}
let botones = document.querySelectorAll('#botonCategorias button');
[...botones].forEach(boton =>{
	boton.addEventListener('click',function(e) {
	[...botones].forEach(boton =>{
		boton.style.backgroundColor='var(--oscuroDark)'
	});
	e.target.style.backgroundColor='var(--amarilloLight)'
		switch (e.target.dataset.servicio) {
			case 'drywall':
				insertNodo('drywall');
			break;
			case 'pintura':
				insertNodo('pintura');
			break;
			case 'mayolica':
				insertNodo('mayolica');
			break;
			case 'gasfiteria':
				insertNodo('gasfiteria');
			break;
			case 'remodelacion':
				insertNodo('remodelacion');
			break;
			case 'electricidad':
				insertNodo('electricidad');
			break;
			case 'melamine':
				insertNodo('melamine');
			break;
			
			default:
				
		}
	});
})

window.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('#botonCategorias button')[0].style.backgroundColor='var(--amarilloLight)'
	insertNodo('drywall');
});
