const bookshelfElement = document.querySelector(".books");
const bookshelf = new Bookshelf(bookshelfElement);
bookshelf.seed(bookData);


// Create DOM for Search Results

const searchInput = document.querySelector("nav input");
const searchBtn = document.querySelector(".searchBtn");

searchBtn.addEventListener("click", () => {
  const query = searchInput.value.toLowerCase();
  const searchFn = (b) => b.title.toLowerCase().includes(query);

  bookshelf.filterVisibleBooks(searchFn);
});


// Create DOM elements to sort Author's from A-Z or Z-A

const sortBy = document.querySelector(".filter");

sortBy.addEventListener("change", () => {
  const query = sortBy.value;
  let sortFn;

  if (query === "titleaz") {
    sortFn = (a, z) => a.title.localeCompare(z.title);
  } else if (query === "titleza") {
    sortFn = (a, z) => z.title.localeCompare(a.title);
  } else if (query === "favorites"){
    sortFn = (b) => b.isFavorite === true;
    bookshelf.filterVisibleBooks(sortFn)
  }

  bookshelf.sortVisibleBooks(sortFn);

});

// create DOM to add books

const bookTitle = document.querySelector(".title");
const bookAuthor = document.querySelector(".author");
const bookLanguage = document.querySelector(".language");
const bookSubject = document.querySelector(".subject");

const addBtn = document.querySelector(".addBtn");

addBtn.addEventListener("click", () => {
  if (
    !bookTitle.value ||
    !bookAuthor.value ||
    !bookLanguage.value ||
    !bookSubject.value
  ) {
    alert("Form incomplete. Please try again.");
    return;
  }
  bookshelf.createNewBook();
});


