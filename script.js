const myLibrary = [];
const librarySection = document.querySelector(`#library`);
const newBook = document.querySelector(`#new-book`);
const dialog = document.querySelector("dialog");


function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}

function createCard(item) {
    const displayedBook = document.createElement("div");
    displayedBook.classList.add(`book`)
    const bookTitle = document.createElement("div")
    bookTitle.classList.add(`title`)
    const bookAuthor = document.createElement("div")
    bookAuthor.classList.add(`author`)
    const bookPages = document.createElement("div")
    bookPages.classList.add(`pages`)
    const bookRead = document.createElement("div")
    bookRead.classList.add(`read`)

    bookTitle.textContent = `Title: ${item.title}`
    bookAuthor.textContent = `By: ${item.author}`
    bookPages.textContent = `Pages: ${item.pages}`
    bookRead.textContent = `Read?: ${item.read}`
    
    librarySection.appendChild(displayedBook);
    displayedBook.appendChild(bookTitle);
    displayedBook.appendChild(bookAuthor);
    displayedBook.appendChild(bookPages);
    displayedBook.appendChild(bookRead);
}

function displayLibrary(list){
    for (let obj of list){
        createCard(obj);
    }
}


const hobbit = new Book(`Hobbit`, `Justin`, `20`, `yes`);

const steveJobs = new Book(`Steve Jobs`, `Justin`, `300`, `no`);
addBookToLibrary(hobbit);
addBookToLibrary(steveJobs);

displayLibrary(myLibrary)

newBook.addEventListener("click", () => {
    dialog.showModal();
})





