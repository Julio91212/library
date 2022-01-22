//create array of books
let myLibrary = []
addBookToLibrary("Gloves Off", "Lowell Cohn", "240", true)
addBookToLibrary("Charlotte's Web", "E.B. Webber", "192", false)

//create constructor for books
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}
//store new book objects into array
function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    console.log(book);
    myLibrary.push(book);
}
// loop through array to display each book
function displayAll() {
        for (let book of myLibrary) {
        console.log(`${book.title} is by ${book.author} and contains ${book.pages} pages.`)
    }
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
submit.addEventListener("click", () => {
    let newTitle = document.getElementById("title").value
    let newAuthor = document.getElementById("author").value
    let newPages = document.getElementById("pages").value
    let newRead
    if (document.getElementById("read").checked == true) {newRead = true}
    else {newRead=false}
    addBookToLibrary(newTitle, newAuthor, newPages, newRead)
    displayAll()
})

    
