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
    createCardElement()
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

    let newBook = new Book(addBookForm[0].value, addBookForm[1].value, addBookForm[2].value, addBookForm[3].value, isRead())
    addBookToLibrary(newBook)

    const newBookCard = document.createElement('li');
    newBookCard.className = 'book-card';
    
    const cardHeader = document.createElement('div');
    cardHeader.className = 'book-card-header'
        
        const nameTitleAuthorTitle = document.createElement('div');

            const bookTitle = document.createElement('h2');
            bookTitle.className = 'book-title';
            bookTitle.innerText = newBook.name;
        
            const authorTitle = document.createElement('span');
            authorTitle.className = 'author-name'
            authorTitle.innerText = newBook.author;
    
        const newEditButton = document.createElement('span');
        newEditButton.innerText = 'edit_note'
        newEditButton.className = 'material-symbols-outlined dark delete-book'
        
    const bookImage = document.createElement('img');
    bookImage.src = newBook.image;
    bookImage.alt = `Book cover for ${newBook.name}`
    bookImage.className = 'book-image'
        
    const bookInfo = document.createElement('div'); 
    bookInfo.className = 'book-info' 
        const newBookPages = document.createElement('span');
        newBookPages.innerText = `Pages: ${newBook.totalPages}`;
        newBookPages.className = 'pages-read';
        const newBookHasBeenRead = document.createElement('span');
        newBookHasBeenRead.innerText = newBook.isRead;
        newBookHasBeenRead.className = 'has-been-read';

        if(newBook.isRead === true){
            newBookHasBeenRead.innerText = 'Completed';
            newBookHasBeenRead.style.backgroundColor = 'green'
        } else if(newBook.isRead === false){
            newBookHasBeenRead.innerText = 'To read'
            newBookHasBeenRead.style.backgroundColor = 'yellow'
        };

    nameTitleAuthorTitle.append(bookTitle, authorTitle);
    cardHeader.append(nameTitleAuthorTitle, newEditButton);
    newBookCard.appendChild(cardHeader);

    newBookCard.appendChild(bookImage);

    bookInfo.append(newBookPages, newBookHasBeenRead);
    newBookCard.appendChild(bookInfo);

    bookCarousel.append(newBookCard);
};

function clearForm(form, numberOfArgs){
    for(let i = 0; i < numberOfArgs; i++){
        form[i].value = '';
    }
}