let addBookButton = document.querySelector('.add-book');
let popUpForm = document.querySelector('.pop-up-form');
let submitBookButton = document.getElementById('submit-book');


let myLibrary = [
    {
        "title": "Elon Musk Biography",
        "author": "Some dude!",
        "pages": 400
    }
];


function clearBooks(){
    let toDelete = document.querySelector('.books-list');
    while(toDelete.firstChild){
        toDelete.removeChild(toDelete.lastChild);
    }
}

function displayBooks(){
    for(let x = 0; x < myLibrary.length; x++){
        let book = document.createElement('div');
        book.className = 'book';

        let title = document.createElement('h1');
        title.className = 'book-property';
        title.textContent = myLibrary[x].title;

        let author = document.createElement('h1');
        author.className = 'book-property';
        author.textContent = myLibrary[x].author;

        let pages = document.createElement('h1');
        pages.className = 'book-property';
        pages.textContent = myLibrary[x].pages;

        let deleteButton = document.createElement('button');
        deleteButton.innerText = "Delete";
        deleteButton.classList = "delete-button";
        

        let id = x;
        book.setAttribute('book-id', id);
        deleteButton.addEventListener('click', function(){
            deleteBook(id);
        });

        book.appendChild(title);
        book.appendChild(author);
        book.appendChild(pages);
        book.appendChild(deleteButton);


        let booksList = document.querySelector('.books-list');
        booksList.appendChild(book);
    }
}

function deleteBook(id){
    console.log(id)
    myLibrary.splice(id, 1);
    console.log(myLibrary);
    clearBooks();
    displayBooks();
}


addBookButton.addEventListener('click', function(){
    popUpForm.classList.toggle('unvisible');
});


function Book(title, author, pages, id){
    this.title = title;
    this.author = author;
    this.pages = pages;
}

submitBookButton.addEventListener('click', addBookToLibrary);


function addBookToLibrary(ev){
    ev.preventDefault();
    let book = {
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
        pages: document.getElementById('pages').value
    };
    if(book.title == "" || book.author == "" || book.pages == ""){
        alert("ERROR THIS INPUT IS REQUIRED!");
        return false;
    } else {
        myLibrary.push(book);
    }

    document.forms[0].reset();
    popUpForm.classList.toggle('unvisible');
    clearBooks();
    displayBooks();
}

function saveBooksToMemory(){
    let books = JSON.stringify(myLibrary);
    localStorage.setItem("Books", books);
}

function readBooksFromMemory(){
    let fromMemory = localStorage.getItem("Books");
    return fromMemory;
}



displayBooks();