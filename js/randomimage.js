const myButton = document.querySelector('button');
const image = document.querySelector('img');
const images = ["pilt1.jpg", "pilt2.jpg", "pilt3.jpg", "pilt4.jpg"];


myButton.addEventListener('click', changeImage);

function changeImage() {

    console.log(images);
    let randomIndex = Math.floor(Math.random() * images.length);
    console.log(randomIndex);


    image.src = "img/" + images[randomIndex];
    


   
}



