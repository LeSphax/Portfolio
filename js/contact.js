var map;
var marker;
var latlng;

$(document).ready(function () {

    initialize();

    var seen = false;
    var seenContact = false;
    
    $('.contact-map-container').bind('inview', function (event, isInView, visiblePartX, visiblePartY) {
        if (isInView && !seen) {
            marker.setAnimation(google.maps.Animation.DROP);
            seen = true;
        }
    });

     $('.contact-container').bind('inview', function (event, isInView, visiblePartX, visblePartY) {
        if (isInView && !seenContact) {
            $(".contact-title").addClass("fadeIn");
            $(".contact-icon").addClass("zoomIn");
            $(".contact-icon").removeClass("hide-it");
            $(".contact-subtitle").addClass("fadeIn");
            $(".contact-desc").addClass("fadeIn");
            contact = true;
        }
    });
    
    $(window).resize(updateMap);
    
    $('#contactForm').submit(function (event){
        console.log("j'ai submit");
        event.preventDefault(true);
        $.ajax({
        url: 'php/send.php',
        type: 'post',
        dataType: 'json',
        data: $('form#contactForm').serialize(),
        success: function(data) {
            console.log(data);
            
        },
        error: function(data) {
            console.error(data);
        }
    });
    });
    
});


function initialize() {
    latlng = new google.maps.LatLng(43.6046520, 1.4442090);
    //objet contenant des propriétés avec des identificateurs prédéfinis dans Google Maps permettant
    //de définir des options d'affichage de notre carte
    var options = {
        center: latlng,
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI : true,
        disableDoubleClickZoom: true,
        draggable : false,
        keyboardShortcuts : false,
        scrollwheel: false,
        scaleControl: true,
        styles: [{"featureType":"all","elementType":"all","stylers":[{"saturation":-100},{"gamma":0.5}]}]
    };


    //constructeur de la carte qui prend en paramêtre le conteneur HTML
    //dans lequel la carte doit s'afficher et les options
    map = new google.maps.Map(document.getElementById("map"), options);


    var image = 'images/icons/google-map-marker-icon.png';
    marker = new google.maps.Marker({
        position: latlng,
        map: map,
        icon: image
    });

    var contentString = '<div class="map-marker-content"><h5>Je suis actuellement à</h5><p>Toulouse | Haute-Garonne</p></div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    google.maps.event.addListener(marker, 'click', function() {
        if (isInfoWindowOpen(infowindow)) {
            infowindow.close();
            isOpen = false;
        } else {
            infowindow.open(map,marker);
            isOpen = true;
        }
    });

    setMapHeight();
}

function setMapCentre() {
    map.setCenter(latlng);
}

function setMapHeight(){
    $('.map').height(($(".contact-map-container").height()) - ($('.map-caption').height()) - 50);
}

function updateMap() {
    setMapCentre();
}

function isInfoWindowOpen(infoWindow){
    var mapIW = infoWindow.getMap();
    return (mapIW !== null && typeof mapIW !== "undefined");
}