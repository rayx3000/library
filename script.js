let myLibrary = [
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

function addBookToLibrary(){
    const bookTitle = document.getElementById("book-title").value;
    const bookAuthor = document.getElementById("book-author").value;
    const bookYear = document.getElementById("book-year").value;
    const bookPages = document.getElementById("book-pages").value;
    const bookGenre = document.getElementById("book-genre").value;

    console.log(bookTitle, bookAuthor, bookYear, bookPages, bookGenre);

}

const addBookButton = document.getElementById("addBookButton");
const dialog = document.querySelector(".dialog-form");
const booksGrid = document.querySelector(".books-grid");
const closeDialog = document.getElementById("close");
const addButton = document.getElementById("add");

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
    <div class="book" data-book-id="${book.id}">
        <dialog class="dialog-yes-no">
            <span class="material-symbols-outlined close">close</span>
            <div>
                <div class="yesNoText">
                    Are you sure that you want remove this book in library?
                </div>
                <div class="yesNoButtons">
                    <button class="remove-yes">Yes</button>
                </div>
            </div>    
        </dialog>
        <span class="material-symbols-outlined remove-book-btn">close</span>
        <h2 class="book-title">${book.title}</h2>
        <h3 class="book-author">${book.author}</h3>
        <h4>Year: <span class="book-year">${book.year}</span></h4>
        <p>Pages: <span class="book-pages">${book.pages}</span></p>
        <p>Genre: <span class="book-genre">${book.genre}</span></p>
        <button class="status-btn">${isTrue}</button>
    </div>
    `
});

booksGrid.innerHTML = books;

addButton.addEventListener("click", () => addBookToLibrary());

document.querySelectorAll('.remove-book-btn').forEach(button => {
    button.addEventListener('click', () => {
        const dialog = button.closest('.book').querySelector('.dialog-yes-no');
        dialog.showModal();
    });
});

document.querySelectorAll('.close').forEach(button => {
    button.addEventListener('click', () => {
        const dialog = button.closest('.dialog-yes-no');
        dialog.close();
    });
});

document.querySelectorAll('.remove-yes').forEach(button => {
    button.addEventListener('click', () => {
        const dialog = button.closest('.dialog-yes-no');
        dialog.close();
        
        const bookCard = button.closest('.book');

        const bookId = bookCard.dataset.bookId;

        myLibrary = myLibrary.filter(book => book.id !== bookId);
        bookCard.remove();
        console.log(myLibrary);
    });
});

document.querySelectorAll('.status-btn').forEach(button => {
    const bookCard = button.closest('.book');
    let bookStatus = bookCard.dataset.status;

    if (button.textContent === "Done") {
        button.style.backgroundColor = "green";
    } else {
        button.style.backgroundColor = "orange";
    }


    button.addEventListener('click', () => {
        const bookCard = button.closest('.book');
        const bookId = bookCard.dataset.bookId; 

        const bookToUpdate = myLibrary.find(book => book.id === bookId);

        if (button.textContent === "Done") {
            button.textContent = "Unread";
            button.style.backgroundColor = "orange";
            if (bookToUpdate) {
                bookToUpdate.status = false;
            }
        } else {
            button.textContent = "Done";
            button.style.backgroundColor = "green";
            if (bookToUpdate) {
                bookToUpdate.status = true;
            }
        }
        
    });
});