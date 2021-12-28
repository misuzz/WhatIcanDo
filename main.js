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