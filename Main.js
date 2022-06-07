// let bookName = document.querySelectorAll('.book-title');
// let authorName = document.querySelectorAll('.author-name');
// let pagesRead = document.querySelectorAll('.pages-read');
// let totalPages = document.querySelectorAll('.total-pages');
// let hasBeenRead = document.querySelectorAll('.has-been-read');
let bookCarousel = document.querySelector('.carousel')

const addBook = document.querySelector('#add-book');
const closePopUp = document.querySelector('#close-pop-up')
const editBook = document.querySelectorAll('.delete-book');

const addBookForm = document.querySelector('#add-book-form');

let myLibrary = [{
    name: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    image: 'https://images.unsplash.com/photo-1600071075057-fc3fb218e6b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
    pages: 295,
    isRead: false
}];

//opening and closing add book dialogue

addBook.addEventListener('mousedown', function(){
    addBookForm.style.display = 'block';
})

closePopUp.addEventListener('mousedown', function(){
    addBookForm.style.display = 'none';
})

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

function createCardElement(){
    const newBookCard = document.createElement('li');
    newBookCard.className = 'book-card';
    
    const cardHeader = document.createElement('div');
    newBookCard.appendChild(cardHeader);
    
    const bookTitle = document.createElement('h2');
    const authorTitle = document.createElement('span');
    const newEditButton = document.createElement('span');
    cardHeader.append(bookTitle, authorTitle, newEditButton);
    
    const bookImage = document.createElement('img');
    newBookCard.appendChild(bookImage);
    
    const bookInfo = document.createElement('div');
    newBookCard.appendChild(bookInfo);
    
    const newBookPages = document.createElement('span');
    const newBookHasBeenRead = document.createElement('span');
    newBookCard.append(newBookPages, newBookHasBeenRead );
    
    bookCarousel.append(newBookCard);
}

createCardElement()

function clearForm(form, numberOfArgs){
    for(let i = 0; i < numberOfArgs; i++){
        form[i].value = '';
    }
}