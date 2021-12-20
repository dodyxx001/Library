let myLibrary = [];
const content = document.querySelector('content');


function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        if (!read) {
            return `${title} by ${author},  ${pages} pages , not read yet`;
        }else{
            return `${title} by ${author},  ${pages} pages , read`;
        };
    };
};

let addBookToLibrary = (title, author, pages, read) => {
    myLibrary.push(new Book(title, author, pages, read));
};


addBookToLibrary ('The Hobbit', 'J.R.R. Tolkien',  295, false);

addBookToLibrary('100miles under the sea', 'jules verne', 300, true);

addBookToLibrary('Da vinci code', 'Dan Brown', 483, true);

let showBooks = () => {
    myLibrary.forEach((ele) => {
        let newBook = document.createElement('div');
        newBook.classList.add('book');
        newBook.innerHTML += `'<div class="info title">
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
                                    <button>Read yet</button>
                                </div>
                                <div class="remove">
                                    <button>Remove Book</button>
                                </div>'`
        content.appendChild(newBook);
    })
}

showBooks();

