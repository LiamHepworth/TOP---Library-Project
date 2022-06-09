let bookCarousel = document.querySelector('.carousel')

const addBookButton = document.querySelector('#add-book');
const closeNewBookFormButton = document.querySelector('#close-pop-up')
const deleteBookButton = document.querySelectorAll('.delete-book');

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

addBookButton.addEventListener('mousedown', function(){
    addBookForm.style.display = 'block';
})

// deleteBook.addEventListener('mousedown', function(){
//     editBookForm.style.display = 'block';

// })

closeNewBookFormButton.addEventListener('mousedown', function(){
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
        
        const bookNameAuthorTitle = document.createElement('div');
            const BookName = document.createElement('h2');
            BookName.className = 'book-title';
            BookName.innerText = newBook.name;
            const authorTitle = document.createElement('span');
            authorTitle.className = 'author-name'
            authorTitle.innerText = newBook.author;
    
        const newDeleteButton = document.createElement('span');
        newDeleteButton.innerText = 'delete'
        newDeleteButton.className = 'material-symbols-outlined dark delete-book'
        
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
        newBookPages.className = 'num-of-pages';
        const newBookHasBeenRead = document.createElement('span');
        newBookHasBeenRead.innerText = newBook.isRead;
        newBookHasBeenRead.className = 'has-been-read';

        if(newBook.isRead === true){
            newBookHasBeenRead.innerText = 'Completed';     //this will need changing ass we add click to change read colour function
            newBookHasBeenRead.style.backgroundColor = 'green'
        } else if(newBook.isRead === false){
            newBookHasBeenRead.innerText = 'To read'
            newBookHasBeenRead.style.backgroundColor = 'yellow'
        };

    bookNameAuthorTitle.append(BookName, authorTitle);                    //append all previously created elements to the card
    cardHeader.append(bookNameAuthorTitle, newDeleteButton);
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

function changeReadStatus(){
    for(let i = 0; i < bookCarousel.children.length; i++){
        let readBtn = bookCarousel.children[i].children[2].children[1];
    };
};

// bookCarousel.children[1].children[2].children[1] - this is the delete button for each node