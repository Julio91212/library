//create array of books
const myLibrary = []

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
        const readBook = addReadBox(book.id)
        let status = (book.read==true) ? "Yes" :
        (book.read==false) ? "No" : ""
        bookCard.textContent += `Title: ${book.title} \r\n Author: ${book.author} \r\n Pages: ${book.pages} \r\n Read:${status}`;
        if (book.read==true) {readBook.textContent = "not read"}
        else if (book.read==false) {readBook.textContent = "read"}
        deleteBook.textContent = "delete"
        bookCard.appendChild(readBook)
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
function addReadBox(id) {
    const readButton = document.createElement("button")
    readButton.setAttribute("class", "chkbx")
    readButton.addEventListener("click", () => {
        changeRead(id)
    })
    return readButton
}
function changeRead(id) {
    const capture = myLibrary.find(Book => Book.id === id)
    console.log(capture.read)
    if (capture.read == true) {capture.read=false}
    else if (capture.read == false) {capture.read=true}
    displayAll()
}
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