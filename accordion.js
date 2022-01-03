'user strict'
{
//////////////////////////////////////////////
//               modal window               //
//////////////////////////////////////////////

const modalWindowOpen = document.getElementById('modalWindowOpen');
const modalWindowMask = document.getElementById('modalWindowMask');
const modalWindowContents = document.getElementById('modalWindowContents');
const closes = document.querySelectorAll('.close');

modalWindowOpen.addEventListener('click', () => {
	modalWindowMask.classList.remove('hidden');
	modalWindowContents.classList.remove('hidden');

})

closes.forEach(close => {
	close.addEventListener('click', () => {
		modalWindowMask.classList.add('hidden');
		modalWindowContents.classList.add('hidden');
	})
});

}