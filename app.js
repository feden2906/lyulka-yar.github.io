const menuActive = document.querySelector('.menu-nav');

const menuBtn = document.querySelector('.menu-btn').addEventListener('click', function (e) {
	e.preventDefault();
		this.classList.toggle('is-active');
		menuActive.classList.toggle('menu-nav_active');
		
	});
