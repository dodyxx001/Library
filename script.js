// Array that contains Book objects
let myLibrary = [];

// Global variables
const body = document.querySelector('body');
const content = document.querySelector('content');
const addNewBookButton = document.querySelector('#add-button');
const cancelButton = document.querySelector('#cancel');
const submitButton = document.querySelector('#add-new-book');

const inputForm = document.querySelector('.input-form');



// Constructor function - creates new Book objects
function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `${title} by ${author},  ${pages} pages , ${read}`;
        
    };
};


// Function that adds a new book ( 4 args)
let addBookToLibrary = (title, author, pages, read) => {
    myLibrary.push(new Book(title, author, pages, read));
};


// Function that creates html for each book and displays it
let showBooks = () => {
    content.innerHTML = "";  // delete current Books html
    myLibrary.forEach((ele) => { // and for each element 

        let newBook = document.createElement('div');
        newBook.classList.add('book'); 
        newBook.setAttribute('data-index', `${myLibrary.indexOf(ele)}`); // Numbering the new book
        newBook.innerHTML += `<div class="info title">  
                                    <p>Title:</p>
                                    <p>${ele.title}</p>
                                </div>
                                <div class="info author">
                                    <p>Author:</p>
                                    <p id="author">${ele.author}</p>
                                </div>
                                <div class="info pages">
                                    <p>Pages:</p>
                                    <p id="pages">${ele.pages}</p>
                                </div>
                                <div class="read">
                                    <button class="read-button">${ele.read}</button>
                                </div>
                                <div class="remove">
                                    <button class="remove-button">Remove Book</button>
                                </div>`
        content.appendChild(newBook);
    });
};


// Function that enables changing status of "read" to "read" or "not read yet" 
let readButtonFunctionality = () => {
    let readButtons = Array.from(document.getElementsByClassName('read-button'));
    readButtons.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            if (e.target.textContent === 'Read'){
                e.target.textContent = 'Not read yet';
            } else {
                e.target.textContent = 'Read';
            };
        });
    });
};


// Function that enables "remove book" button when called
let removeBookButtonFunctionality = () => {
    let allRemoveButtons = Array.from(document.getElementsByClassName('remove-button'));

    allRemoveButtons.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            let index = e.target.parentNode.parentNode.getAttribute('data-index');
            e.target.parentNode.parentNode.remove()  // Removing HTML
            myLibrary.splice(index, 1);  // Removing object from array

        });
    });
};


// Function that removes input form and blur effect
let removeInputFormAndBlur = () => {
    inputForm.classList.remove('showing');  // Removing input form
    body.classList.remove('bodyBlur');
};


// ADD BOOK section
// Functionality added to Add Book button
addNewBookButton.addEventListener('click', () => {
    inputForm.classList.add('showing');  // show the input form
    body.classList.add('bodyBlur');  // blur the background
});


// Cancel button functionality
cancelButton.addEventListener('click', () => {
    removeInputFormAndBlur();
});


// Add button functionality
submitButton.addEventListener('click', () => {
    let inputTitle = document.querySelector('#input-title').value
    let inputAuthor = document.querySelector('#input-author').value
    let inputPages = document.querySelector('#input-pages').value
    let inputRead = '';
        if (document.getElementById("input-read").checked){
            inputRead = 'Read';
        } else {
            inputRead = 'Not read yet';
    };

    addBookToLibrary(  // Creating new object
        inputTitle,
        inputAuthor,
        inputPages,
        inputRead
    );

    removeInputFormAndBlur(); // When the book is added, remove input field

    showBooks(); // Refresh the list

    readButtonFunctionality(); // Adds functionality to "read yet?" buttons
    
    removeBookButtonFunctionality(); // Adds func. to "remove book" button

}); 













