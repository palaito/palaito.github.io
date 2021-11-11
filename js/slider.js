(function(){
	const sliders = [...document.querySelectorAll('.testimonio_body')];
	const btnNext = document.querySelector('#next');
	const btnBefore = document.querySelector('#before');
	//console.log(sliders);
	let value;

const changePosition = (add)=>{
			//console.log(add);
			const currentTestimonio = document.querySelector('.testimonio_body--show').dataset.id;
			value=Number(currentTestimonio);
			value+= add;
			//console.log(value);
			sliders[Number(currentTestimonio)-1].classList.remove('testimonio_body--show');
			if(value === sliders.length+1 || value ==0){
				value = value === 0 ? sliders.length :1;
			}
			sliders[value-1].classList.add('testimonio_body--show');
		}

	btnNext.addEventListener('click', ()=>{
		changePosition(1);
	});

		btnBefore.addEventListener('click', ()=>{
		changePosition(-1);
	});

		
})();