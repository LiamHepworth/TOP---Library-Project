let bookName = document.querySelectorAll('.book-title');
let authorName = document.querySelectorAll('.author-name');
let pagesRead = document.querySelectorAll('.pages-read');
let totalPages = document.querySelectorAll('.total-pages');
let hasBeenRead = document.querySelectorAll('.has-been-read');

const addBook = document.querySelector('#addBook');
const delBook = document.querySelectorAll('.delete-book');

const addBookForm = document.querySelector('#add-book-form');

let myLibrary = [{
    name: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    image: 'https://images.unsplash.com/photo-1600071075057-fc3fb218e6b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
    pages: 295,
    isRead: false
}];

function Book(name, author, imageLink, pages, isRead) {
    this.name = name;
    this.author = author;
    this.image = imageLink
    this.totalPages = pages;
    this.isRead = isRead;
}

addBookForm.addEventListener('submit', (event) =>{
    event.preventDefault();
    addBookToLibrary(new Book(addBookForm[0].value, addBookForm[1].value, addBookForm[2].value, addBookForm[3].value, isRead()))
    clearForm(addBookForm, 5)   
})

function addBookToLibrary(bookName) {
    myLibrary.push(bookName);
    console.log(bookName.author)
};

function isRead(){
    if(addBookForm[4].checked){
        return true
    } else if(addBookForm[5].checked){
        return false
    };
};

function clearForm(form, number){
    for(let i = 0; i < number; i++){
        form[i].value = '';
    }
}

