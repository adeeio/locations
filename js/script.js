'use strict';



window.initMap = function () {
    var privilege = templateData[0].coords;

    var map = new google.maps.Map(document.getElementById('map'), { zoom: 18, center: privilege });

    centerMarkerOnSlide(map);

    for (var i = 0; i < templateData.length; i++) {
        var marker = new google.maps.Marker({
            position: templateData[i].coords,
            map: map,
            markerId: templateData[i].id
        });

        marker.addListener('click', function (e) {

            var draft = {
                id: this.markerId,
                coords: { lat: e.latLng.lat(), lng: e.latLng.lng() }
            };

            map.panTo(draft.coords);

            for (var j = 0; j < templateData.length; j++) {
                if (draft.id === templateData[j].id) {
                    var tempCellId = document.getElementById(draft.id);
                    flkty.selectCell(tempCellId);
                }
            }

        });


    }

}




var templateItem = document.getElementById('template-places').innerHTML;
var carouselCell = document.querySelectorAll('.carousel-cell');
Mustache.parse(templateItem);

for (var i = 0; i < templateData.length; i++) {
    carouselCell[i].innerHTML = Mustache.render(templateItem, templateData[i]);
}


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


document.querySelector('.restart').addEventListener('click', function (event) {

    var selector = document.querySelector('.carousel-cell--image1');
    flkty.selectCell(selector);


});


var progressBar = document.querySelector('.progress-bar');

flkty.on('scroll', function (progress) {
    progress = Math.max(0, Math.min(1, progress));
    progressBar.style.width = progress * 100 + '%';
});



function centerMarkerOnSlide(map) {
    flkty.on('change', function (index) {
        map.panTo(templateData[index].coords);
    });
}

