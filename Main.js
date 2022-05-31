let myLibrary = [{
    name: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    pages: 295,
    isRead: false
}];

function Book(name, author, pages, isRead) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

const theGulagArchipelago = new Book('The Gulag Archipelago', 'Aleksandr Solzhenitsyn', 498, true )

function addBookToLibrary(bookName) {
    myLibrary.push(bookName);
}

