'use strict';

function fetchDoggo() {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(function(response) {
        return response.json();
    }).then(function(data) {
        updateDoggo(data);
        console.log("Data is: ", data);
    })
}

const doggoButton = document.querySelector('#getDoggo');
const doggoImgElement = document.querySelector('#doggoImgElement')


function updateDoggo(data) {

    //Creates img src
    const doggoImgSrc = data.message;
    //Adds img src to element
    doggoImgElement.src = doggoImgSrc;

    console.log(doggoImg);

}


doggoButton.addEventListener('click', function() {
    fetchDoggo();
})


