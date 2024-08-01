window.onload = addTabindex;

function addTabindex() {
    const images = document.querySelectorAll('.gallery img');
    images.forEach((img, index) => {
        img.setAttribute('tabindex', index + 1);
        img.addEventListener('focus', onFocus);
        img.addEventListener('blur', onBlur);
    });
}

function onFocus(event) {
    console.log('Image focused:', event.target.alt);
    event.target.parentElement.style.boxShadow = '0 8px 16px rgba(0, 0, 255, 0.5)';
}

function onBlur(event) {
    console.log('Image blurred:', event.target.alt);
    event.target.parentElement.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
}

function onMouseOver(event) {
    console.log('Mouse over:', event.target.alt);
    event.target.style.transform = 'scale(1.05)';
}

function onMouseLeave(event) {
    console.log('Mouse leave:', event.target.alt);
    event.target.style.transform = 'scale(1)';
}

document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('mouseover', onMouseOver);
    img.addEventListener('mouseleave', onMouseLeave);
});
