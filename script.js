const element5 = document.getElementById('target-element-5');
let state5 = 0; 

element5.addEventListener('click', function() {
    state5 = (state5 + 1) % 3;

    if (state5 === 1) {
        element5.style.backgroundColor = '#B3CDF1';
        element5.style.color = '#1a365d';
    } else if (state5 === 2) {
        element5.style.backgroundColor = '#FFDD00';
        element5.style.color = '#1a1a1a';
    } else {
        element5.style.backgroundColor = '';
        element5.style.color = '';
    }
});


const element6 = document.querySelector('.target-element-6');
let state6 = 0; 

element6.addEventListener('click', function() {
    state6 = (state6 + 1) % 3; 

    if (state6 === 1) {
        element6.style.backgroundColor = '#FFDD00';
        element6.style.color = '#1a1a1a';
    } else if (state6 === 2) {
        element6.style.backgroundColor = '#B3CDF1';
        element6.style.color = '#1a365d';
    } else {
        element6.style.backgroundColor = '';
        element6.style.color = '';
    }
});

const btnAdd = document.getElementById('btn-add');
const btnZoomIn = document.getElementById('btn-zoom-in');
const btnZoomOut = document.getElementById('btn-zoom-out');
const btnDelete = document.getElementById('btn-delete');
const imgContainer = document.getElementById('image-container');

const imgSrc = "https://karpaty-ua.org.ua/images/dostoprim/lviv_2.jpeg";
const imgHref = "https://karpaty-ua.org.ua/lviv-najkrasyvishe-misto.html";

btnDelete.addEventListener('click', function() {
    const currentImg = document.getElementById('lviv-image');
    if (currentImg) {
        currentImg.remove();
    }
});

btnAdd.addEventListener('click', function() {
    let currentImg = document.getElementById('lviv-image');
    if (!currentImg) {
        const newLink = document.createElement('a');
        newLink.href = imgHref;
        newLink.target = "_blank";
        
        const newImg = document.createElement('img');
        newImg.id = 'lviv-image';
        newImg.src = imgSrc;
        newImg.alt = "Львів";
        newImg.width = 700;
        
        newLink.appendChild(newImg);
        imgContainer.appendChild(newLink);
    }
});

btnZoomIn.addEventListener('click', function() {
    const currentImg = document.getElementById('lviv-image');
    if (currentImg) {
        let currentWidth = currentImg.clientWidth;
        currentImg.style.width = (currentWidth + 50) + 'px';
    }
});

btnZoomOut.addEventListener('click', function() {
    const currentImg = document.getElementById('lviv-image');
    if (currentImg) {
        let currentWidth = currentImg.clientWidth;
        if (currentWidth > 100) {
            currentImg.style.width = (currentWidth - 50) + 'px';
        }
    }
});
