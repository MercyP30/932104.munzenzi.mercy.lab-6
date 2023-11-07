const leftButton = document.querySelector('#left-btn');
const bothButton = document.querySelector('#both-btn');
const rightButton = document.querySelector('#right-btn');

const image1 = document.querySelector('.image1');
const image2 = document.querySelector('.image2');

document.addEventListener('DOMContentLoaded', () => { //когда страница обновляется
    image2.style.backgroundColor = 'green';
    image2.innerHTML = '';// Удаляем содержимое внутри div с классом image2
});


leftButton.addEventListener('click', () => {
    image1.style.width = '95%';
    image1.innerHTML = '<img src="cat.jpg" alt="Cat Image">';
    image2.style.width = '5%';
    image2.style.backgroundColor = 'green';
    image2.innerHTML = '';

});

bothButton.addEventListener('click', () => {
    image1.style.width = '50%';
    image1.innerHTML = '<img src="cat.jpg" alt="Cat Image">';
    image1.style.backgroundColor = 'blue';
    image1.querySelector('img').style.maxWidth = '100%';
    image1.querySelector('img').style.minWidth = '100%';
    image1.querySelector('img').style.minHeight = '80%';

    image2.style.width = '50%';
    image2.innerHTML = '<img src="dog.jpg" alt="Dog Image">';
    image2.style.backgroundColor = 'green';
    image2.querySelector('img').style.maxWidth = '100%';
    image2.querySelector('img').style.minWidth = '100%';
    image2.querySelector('img').style.minHeight = '80%';

});

rightButton.addEventListener('click', () => {
    image2.style.width = '95%';
    image2.innerHTML = '<img src="dog.jpg" alt="Dog Image">';
    image1.style.width = '5%';
    image1.style.backgroundColor = 'blue';
    image1.innerHTML = '';

});