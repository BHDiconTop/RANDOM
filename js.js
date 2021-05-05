var cards_block = document.querySelector('.cards');
var cards = document.querySelectorAll('.cards > div');

function start() {
  var random = Math.floor(Math.random() * 32); // От 0 до 8
  cards_block.style.left = -random * 50 + 'px';
};
var win = document.querySelector('.win').onclick = function() {
	alert('good');
}