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