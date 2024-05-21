const myLibrary = [];
const librarySection = document.querySelector(`#library`);
let liveBooks = document.querySelectorAll("#book");

let title;
let author;
let pages;
let read;

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);

}

function updateLiveBooks() {
    liveBooks = document.querySelectorAll("#book");
    liveBooks.forEach(element => {
        element.addEventListener(`click`, (e)=> {
            if (e.target.id === `deleteBtn`){
                console.log(`hi`)
                let titleSearch = e.currentTarget.getAttribute(`title`);

                let indexNum = myLibrary.map(function(e) { return e.title; }).indexOf(titleSearch);
                console.log(myLibrary.length);
                console.log(indexNum);

                myLibrary.splice(indexNum, 1);

                e.currentTarget.remove();
            }
        });
    });
}

function createCard(item) {
    const displayedBook = document.createElement("div");
    displayedBook.classList.add(`book`)
    displayedBook.setAttribute(`id`, `book`)
    const imgPlaceholder = document.createElement("div")
    imgPlaceholder.classList.add(`img`)
    const bookTitle = document.createElement("div")
    bookTitle.classList.add(`title`)
    const bookAuthor = document.createElement("div")
    bookAuthor.classList.add(`author`)
    const bookPages = document.createElement("div")
    bookPages.classList.add(`pages`)
    const bookRead = document.createElement("div")
    bookRead.classList.add(`read`)
    const deleteBook = document.createElement("button")

    deleteBook.textContent = `X`
    deleteBook.classList.add(`deleteBtn`);
    deleteBook.setAttribute(`id`, `deleteBtn`);
    displayedBook.setAttribute(`title`, item.title)
    bookTitle.textContent = `Title: ${item.title}`
    bookAuthor.textContent = `By: ${item.author}`
    bookPages.textContent = `Pages: ${item.pages}`
    bookRead.textContent = `Read?: ${item.read}`

    librarySection.appendChild(displayedBook);
    displayedBook.appendChild(deleteBook);
    displayedBook.appendChild(imgPlaceholder);
    displayedBook.appendChild(bookTitle);
    displayedBook.appendChild(bookAuthor);
    displayedBook.appendChild(bookPages);
    displayedBook.appendChild(bookRead);
}

function populateLibrary(list){
    for (let obj of list){
        createCard(obj);
    }
}


const hobbit = new Book(`Hobbit`, `Justin`, `20`, `yes`);

const steveJobs = new Book(`Steve Jobs`, `Justin`, `300`, `no`);
addBookToLibrary(hobbit);
addBookToLibrary(steveJobs);

populateLibrary(myLibrary);
//DOM Stuff
liveBooks = document.querySelectorAll("#book");
const newBook = document.querySelector(`#new-book`);
const dialog = document.querySelector("dialog");
const confirmBtn = document.querySelector("#confirmBtn");
const cancelBtn = document.querySelector("#cancelBtn");
const deleteBtn = document.querySelector("#deleteBtn");



newBook.addEventListener("click", () => {
    dialog.showModal();
})

confirmBtn.addEventListener("click", (e) => {
    e.preventDefault();
    title = document.getElementById('title').value
    author = document.getElementById('author').value
    pages = document.getElementById('pages').value
    read = `no`;
    if (document.getElementById(`read`).checked) {
        read = `yes`;
        console.log(read);
    }

    let userBook = new Book(title, author, pages, read)
    console.table(userBook);
    addBookToLibrary(userBook);
    createCard(userBook);
    updateLiveBooks();
    liveBooks = document.querySelectorAll("#book");
    userBook = undefined;
    dialog.close();

})


cancelBtn.addEventListener("click", () => {
    dialog.close();
})


liveBooks.forEach(element => {
    element.addEventListener(`click`, (e)=> {
        if (e.target.id === `deleteBtn`){
            console.log(`hi`)
            let titleSearch = e.currentTarget.getAttribute(`title`);

            let indexNum = myLibrary.map(function(e) { return e.title; }).indexOf(titleSearch);
            console.log(myLibrary.length);
            console.log(indexNum);

            myLibrary.splice(indexNum, 1);

            e.currentTarget.remove();


            liveBooks = document.querySelectorAll("#book");
        }
    })
})