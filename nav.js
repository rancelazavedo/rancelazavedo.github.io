const wrap = document.querySelector('#wrap');
const burger = document.querySelector('.icon-burger');

burger.addEventListener('click', () => {
	if (wrap.classList.contains('nav-opened')) {
		wrap.classList.remove('nav-opened');
	} else {
		wrap.classList.add('nav-opened');
	}
})