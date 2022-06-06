let bookName = document.querySelectorAll('.book-title');
let authorName = document.querySelectorAll('.author-name');
let pagesRead = document.querySelectorAll('.pages-read');
let totalPages = document.querySelectorAll('.total-pages');
let hasBeenRead = document.querySelectorAll('.has-been-read');

const addBook = document.querySelector('#addBook');
const delBook = document.querySelectorAll('.delete-book');

let myLibrary = [{
    name: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    image: 'https://images.unsplash.com/photo-1600071075057-fc3fb218e6b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
    pages: 295,
    pagesRead: 201,
    isRead: false
}];

function Book(name, author, imageLink, pages, pagesRead, isRead) {
    this.name = name;
    this.author = author;
    this.image = imageLink
    this.totalPages = pages;
    // this.pagesRead = pagesRead;
    this.isRead = isRead;
}

const theGulagArchipelago = new Book('The Gulag Archipelago', 'Aleksandr Solzhenitsyn', undefined, 498, /*360,*/ false )

function addBookToLibrary(bookName) {
    myLibrary.push(bookName);
    console.log(bookName.author)
};

addBookToLibrary(theGulagArchipelago);
