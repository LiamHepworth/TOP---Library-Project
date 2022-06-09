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
const editBookForm = document.querySelector('#edit-book-form');

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

editBook.addEventListener('mousedown', function(){
    editBookForm.style.display = 'block';

})

closePopUp.addEventListener('mousedown', function(){
    addBookForm.style.display = 'none';
    editBookForm.style.display = 'none';
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

    const newBookCard = document.createElement('li');                    //create the card div
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
        
    const bookImage = document.createElement('img');                       //add the image: 
    bookImage.className = 'book-image'                                     //Isn't perfect code as it just checks if string is a valid URL, not if it points to an image, may need more work later on. 
        if(!isValidHttpUrl(newBook.image)){
            onerror = bookImage.style.backgroundColor = 'lightgrey';
            onerror = bookImage.style.border = '1px solid black'
            onerror = bookImage.alt = '';
        } else {
            bookImage.src = newBook.image;
            bookImage.alt = `Book cover for ${newBook.name}`
        }
        
    const bookInfo = document.createElement('div');                        //add footer/info section
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

    nameTitleAuthorTitle.append(bookTitle, authorTitle);                    //append all previously created elements to the card
    cardHeader.append(nameTitleAuthorTitle, newEditButton);
    bookInfo.append(newBookPages, newBookHasBeenRead);
    newBookCard.append(cardHeader, bookImage, bookInfo);
    bookCarousel.append(newBookCard);
};

function clearForm(form, numberOfElements){
    for(let i = 0; i < numberOfElements; i++){
        form[i].value = '';
    }
}

function isValidHttpUrl(string) {         //checks if a string is a valid HTTP URL
    let url;
    
    try {
      url = new URL(string);
    } catch (_) {
      return false;  
    }
  
    return url.protocol === "http:" || url.protocol === "https:";
}