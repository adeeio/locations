'use strict';

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity(elem, {
    cellAlign: 'left',
    contain: true,
    hash: true,
    selectedAttraction: 0.2,
    friction: 0.9,
    freeScroll: true,
    wrapAround: true,
    freeScrollFriction: 0.03,
    pageDots: false
});


document.querySelector('.restart').addEventListener('click', function(event){
   
    var selector = document.querySelector('.carousel-cell--image1');
    flkty.selectCell(selector);
    

});


var progressBar = document.querySelector('.progress-bar');

flkty.on('scroll', function(progress) {
    progress = Math.max(0, Math.min(1, progress));
    progressBar.style.width = progress * 100 + '%';
})