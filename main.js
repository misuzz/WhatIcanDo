'user strict'

{
	const imgs = ["img/top1.jpg", "img/top2.jpg", "img/top3.jpg", "img/top4.jpg", "img/top5.jpg"];



	let count = -1;
	function changeImgs() {
		count++;
		if (count == imgs.length) {
			count = -1;
		} else {
			document.getElementById('BigImg').src = imgs[count];
		}
	}

	window.onload = () => {
		setInterval(changeImgs, 2000);
	}
}

//////////////////////////////////////////////
//               modal window               //
//////////////////////////////////////////////

const modalWindowOpen = document.getElementById('modalWindowOpen');
const modalWindow = document.getElementById('modalWindow');
const closes = document.querySelectorAll('.close');

modalWindowOpen.addEventListener('click', () => {
	modalWindow.classList.add('show');
})

closes.forEach(close => {
	close.addEventListener('click', () => {
		modalWindow.classList.remove('show');
	})
});

//////////////////////////////////////////////
//                  監視                     //
///////////////////////////////////////////////

const target = document.getElementById('TopMessageContents');

function callback(entries) {
	console.log(entries[0]);

	if (!entries[0].isIntersecting) {
		return;
	}
	entries[0].target.classList.add('appear');

}

const option = {
	threshold: 0.2
}

const observer = new IntersectionObserver(callback, option);

observer.observe(target);

///////////////////////////////////////////////////////

const ParallelTarget = document.getElementById('ParallelContents');

function ParallelCallback(entries) {
	console.log(entries[0]);

	if (!entries[0].isIntersecting) {
		return;
	}
	entries[0].target.classList.add('appear');

}

const ParallelOption = {
	threshold: 0.2
}

const ParallelObserver = new IntersectionObserver(ParallelCallback, ParallelOption);

ParallelObserver.observe(ParallelTarget);

////////////////////////////////////////////////////
