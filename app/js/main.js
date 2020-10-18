"use strict";

let cards = document.querySelectorAll('.gallery__item');
let filter = document.querySelector('.btn__filter');
let itemMessage = document.querySelector(".textarea");
let btnWriteMe = document.querySelector(".btn-diz");

filter.onchange = function () {
	for (let card of cards) {
		if (card.dataset.tags === filter.value || filter.value === "none") {
			card.classList.remove('hidden');
		} else {
			card.classList.add('hidden');
		}
	}
};



itemMessage.oninput = function () {
	if (itemMessage.value.length < 10 || itemMessage.value.length > 200) {
		itemMessage.style.color = "red";
		btnWriteMe.disabled = true;
	} else {
		itemMessage.style.color = "black";
		btnWriteMe.disabled = false;
	}
};