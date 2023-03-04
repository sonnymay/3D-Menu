const centerItem = document.querySelector('.center-item');
const menu = document.querySelector('.menu');

centerItem.addEventListener('mouseover', () => {
    menu.classList.toggle('change');
    });

menu.addEventListener('mouseeave', () => {
    menu.classList.toggle('change');
    });
