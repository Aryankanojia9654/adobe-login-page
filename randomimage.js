var randomChange = document.getElementById('randomChange');
var images = [ 'pictures/14.jpg','pictures/Firefly_creative_art_blue_image_60814.jpg','pictures/Firefly_best_creative_images_7746.jpg','pictures/Firefly_best_creative_images_28537.jpg','pictures/Firefly_best_creative_images_60814.jpg','pictures/Firefly_best_creative_images_60958.jpg','pictures/Firefly_create_that_image_28537.jpg','pictures/Firefly_creative_art_blue_image_7746.jpg','pictures/Firefly_creative_art_blue_image_28537.jpg','pictures/Firefly_creative_art_blue_image_60958.jpg','pictures/Firefly_lakes_28537.jpg','pictures/Firefly_leaves_60958.jpg','pictures/Firefly_mac_os_walpaper_7746.jpg','pictures/Firefly_mountains_7746.jpg'
    
];

let imageCount = images.length;

window.onload = function() {
    let number = Math.floor(Math.random() * imageCount);
    if (randomChange) {
        randomChange.style.backgroundImage = 'url(' + images[number] + ')';
    } else {
        console.error('Element with ID "randomChange" not found.');
    }
};
