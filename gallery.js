document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.preview');
    
    images.forEach(img => {
        img.addEventListener('mouseover', function() { upDate(this); });
        img.addEventListener('mouseout', unDo);
        img.addEventListener('focus', function() { upDate(this); });
        img.addEventListener('blur', unDo);
        img.setAttribute('tabindex', '0');
    });

    console.log('Tabindex attributes added and event listeners set.');
});

function upDate(previewPic) {
    const imageDiv = document.getElementById('image');
    imageDiv.innerHTML = previewPic.alt;
    imageDiv.style.backgroundImage = "url(" + previewPic.src + ")";
    console.log('Image updated to: ' + previewPic.alt);
}

function unDo() {
    const imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = 'Hover over an image to display here.';
    console.log('Image reverted to default.');
}
