(function(){
const tituloPreguntas = [...document.querySelectorAll('.preguntas_titulo')];

tituloPreguntas.forEach(pregunta =>{
	pregunta.addEventListener('click', ()=>{
		//alert('ok');
		let height = 0;
		let answer = pregunta.nextElementSibling;
		let addPadding = pregunta.parentElement.parentElement;
		addPadding.classList.toggle('preguntas_padding--add')
		pregunta.children[0].classList.toggle('preguntas_arrow--rotate');

		if(answer.clientHeight === 0){
			height = answer.scrollHeight;
		}
				answer.style.height = `${height}px` ;
	});
});
})();