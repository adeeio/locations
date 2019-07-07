'use-strict';

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity(elem, {
    cellAlign: 'left',
    contain: true,
    pauseAutoPlayOnHover: false,
    hash: true,
    selectedAttraction: 0.2,
    friction: 0.9,
    freeScroll: true,
    freeScrollFriction: 0.03,
    pageDots: false
});

