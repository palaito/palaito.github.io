(function(){
	const openBtn = document.querySelector('.nav_img');
	const menu = document.querySelector('.nav_link');
	const closeMenu = document.querySelector('.nav_close');

	openBtn.addEventListener('click',()=>{
		//alert('ok');
		menu.classList.add('nav_link--show');
	});

	closeMenu.addEventListener('click',()=>{
		menu.classList.remove('nav_link--show');
	});
})();