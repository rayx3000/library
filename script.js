const myLibrary = [
    new Book("cbd0c7e1-88ad-4712-b75c-aa269e0b7e39", "His Secret", "_dat_one_girl_", 2023, 45, "Romance", true),
    new Book("28185fec-4533-41be-9008-aaa6a21bb39c", "Frankenstein or, The Modern Prometheus", "Mary Shelley", 1818, 280, "Sci-Fi", false),
    new Book("9d396fb2-0f28-4ee5-9753-6433b286218f", "Harry Potter and the Chamber of Secrets", "J. K. Rowling", 1998, 251, "Fantasy", false)
];

function Book(id, title, author, year, pages, genre, status){
    this.id = id;
    this.title = title;
    this.author = author;
    this.year = year;
    this.pages = pages;
    this.genre = genre;
    this.status = status;
}

function addBookToLibrary(){}

const addBookButton = document.getElementById("addBookButton");
const dialog = document.querySelector(".dialog-form");
const booksGrid = document.querySelector(".books-grid");
const closeDialog = document.getElementById("close");

addBookButton.addEventListener("click", () => dialog.showModal());
closeDialog.addEventListener("click", () => dialog.close());

document.getElementById('book-genre').addEventListener('change', function() {
    var wrapper = document.getElementById('otherInputWrapper');
    
    if (this.value === 'Other') {
        wrapper.style.display = 'block';
    } else {
        wrapper.style.display = 'none';
    }
});

let books = '';

myLibrary.forEach(book => {
    const isTrue = book.status ? "Done" : "Unread";

    books += `
    <div class="book">
        <dialog class="dialog-yes-no">
            <div class="yesNoText">
                Are you sure that you want remove this book in library?
            </div>
            <div class="yesNoButtons">
                <button id="yes">Yes</button>
                <button id="cancel">Cancel</button>
            </div>    
        </dialog>
        <span class="material-symbols-outlined" id="removeBook">close</span>
        <h2 id="book-title">${book.title}</h2>
        <h3 id="book-author">${book.author}</h3>
        <h4>Year: <span id="book-year">${book.year}</span></h4>
        <p>Pages: <span id="book-pages">${book.pages}</span></p>
        <p>Genre: <span id="book-genre">${book.genre}</span></p>
        <button id="status">${isTrue}</button>
    </div>
    `
});

booksGrid.innerHTML = books;
