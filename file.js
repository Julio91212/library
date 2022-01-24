//create array of books
const myLibrary = []
// const {v4:uuidv4} = require('uuid');
addBookToLibrary("Gloves Off", "Lowell Cohn", "240", true)
addBookToLibrary("Charlotte's Web", "E.B. Webber", "192", false)


//create constructor for books
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.id = myLibrary.length
}
//store new book objects into array
function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    console.log(book);
    myLibrary.push(book);
    displayAll()
}
// loop through array to display each book

function displayAll() {
    let display = document.querySelector("div.display")
    display.textContent = ""
    let i = 0
    for (let book of myLibrary) {
        const bookCard = document.createElement("div");
        bookCard.setAttribute("class", "bookCard")
        display.appendChild(bookCard);
        const deleteBook = addDelete(book.id)
        bookCard.textContent += `Title: ${book.title} \r\n Author: ${book.author} \r\n Pages: ${book.pages}`;
        deleteBook.textContent = "delete"
        // deleteBook.value = book.id
        bookCard.appendChild(deleteBook)
        i++
    }
}
function addDelete(id) {
    const deleteButton = document.createElement("button")
    deleteButton.setAttribute("class", "delete")
    deleteButton.addEventListener("click", () => {
        deleteBook(id)
    })
    return deleteButton
}
function deleteBook(id) {
    const capture = myLibrary.findIndex(Book => Book.id === id) 
    myLibrary.splice(capture, 1);
    console.table(myLibrary)
    displayAll()
}
// function findBook(title) {
//     if (myLibrary.length === 0 || myLibrary.length === null) { return }
//     for (let book of myLibrary)
//         if (title === this.title) {
//             console.log(myLibrary.indexOf(book))
//             return this.number
//         }
// }

//allow user to add a new book
const openform = document.querySelector("button.newButton")
const closeform = document.querySelector("button.closeButton")
const overlay = document.getElementById("overlay")
const submit = document.getElementById("submit")
let form = document.querySelector("form")

openform.addEventListener("click", function () {
    form.classList.add("active")
    overlay.classList.add("active")
})
closeform.addEventListener("click", () => {
    closeForm()
})

function closeForm() {
    form.classList.remove("active")
    overlay.classList.remove("active")
}
submit.addEventListener("click", (e) => {
    let newTitle = document.getElementById("title").value
    let newAuthor = document.getElementById("author").value
    let newPages = document.getElementById("pages").value
    let newRead
    if (document.getElementById("read").checked == true) { newRead = true }
    else { newRead = false }
    console.log(newTitle, newAuthor, newPages, newRead)
    addBookToLibrary(newTitle, newAuthor, newPages, newRead)
    e.preventDefault();
    closeForm()
})
displayAll()