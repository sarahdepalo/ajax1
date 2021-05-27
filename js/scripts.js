'use strict'
// XHR Request: 
// const request = new XMLHttpRequest();
// request.onreadystatechange = function () {
//     console.log(this);
//     if(this.readyState === 4) {
//         console.log("Response is: ", this.response);
//     }
// }

// request.open('GET', 'https://api.chucknorris.io/jokes/random?category=dev');
// request.send();


// Fetch Request a.k.a an easier version to write the above :
// fetch doesn't exist in JS it is only available in the browser
//It requires one argument

function fetchTheQuote(category) {

fetch(
    `https://api.chucknorris.io/jokes/random?category=${category}`).then(function(response) {
    return response.json(); // a method to return some json 
}).then(function(data){
    // console.log("Data is: ", data); //pulls the quote or data from the json
    updateQuote(data);
});

}

function fetchTheCategories() {
    fetch('https://api.chucknorris.io/jokes/categories')
    .then(function (response) {
        return response.json();
    })
    .then(function(data) {
        console.log("Category data is: ", data);
        updateCategories(data);
    });
}

const chuckQuote =  document.querySelector('#chuckQuote');
const quoteButton = document.querySelector('#getQuote');

function updateQuote(data) {
    const theQuote = data.value;
    chuckQuote.innerText = theQuote;
}

function updateCategories(categoryData) {
    const categoryListForm = document.querySelector('#categoryList');
    const selectElement = document.createElement('select');
    categoryData.forEach(function (category) {
        const categoryOptionElement = document.createElement('option'); //each select element holds everything in 'options'
        categoryOptionElement.value = category; //needs to have a value and text
        categoryOptionElement.text = category;
        selectElement.appendChild(categoryOptionElement); //appends to the end
    });
    categoryListForm.appendChild(selectElement);

    selectElement.addEventListener('change', function(event) {
        console.log('The event is: ', event.target.value);
        const categoryName = event.target.value;
        fetchTheQuote(categoryName);
    });
}


quoteButton.addEventListener('click', function() {
    fetchTheQuote();
})

fetchTheQuote('dev');
fetchTheCategories();