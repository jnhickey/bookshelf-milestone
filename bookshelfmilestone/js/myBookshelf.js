// create bookshelf

function Bookshelf(htmlElement, books = []) {
  this.books = books;
  this.htmlElement = htmlElement;
  this.visibleBooks = books;


  this.seed = function (data) {
    data.forEach((bookInfo) => {
      const book = new Book(
        bookInfo.author,
        bookInfo.language,
        bookInfo.subject,
        bookInfo.title
      );
      this.addBook(book);
    });

    this.visibleBooks = this.books;
    this.sortVisibleBooks((a, b) => a.title.localeCompare(b.title));
    this.render();
  };


  this.addBook = function (book) {
    this.books.unshift(book);
  };

  this.removeBook = function (book) {
    const idx = this.books[book];
    this.books.splice(idx, 1);
    this.render();
  };


  this.render = function (book) {
    const ul = document.createElement("ul");
    const books = this.visibleBooks.map((b) => b.render());
    ul.replaceChildren(...books);
    this.htmlElement.replaceChildren(ul);
  };

  this.countFavoriteBooks = function () {
    return this.books.reduce(
      (count, book) => (book.isFavorite ? count + 1 : count),
      0
    );
  };

  this.filterVisibleBooks = function (criteria) {
    this.visibleBooks = this.books.filter(criteria);
    this.render();
  };

  this.sortVisibleBooks = function (compareFn) {
   this.visibleBooks.sort(compareFn);
    this.render();
  };

  this.createNewBook = function (book) {
    const newBook = new Book(
      (author = bookAuthor.value),
      (language = bookLanguage.value),
      (subject = bookSubject.value),
      (title = bookTitle.value)
    );
    this.addBook(newBook);
    this.render();
  };
}
