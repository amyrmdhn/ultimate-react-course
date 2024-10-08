const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Destructuring Object & Array
const book = getBook(3);
book;

// Destructuring Object
// const title = book.title; ======= BAD
const { title, author, genres, pages, publicationDate, hasMovieAdaptation } =
  book;
console.log(title, author, genres);

// Destructuring Array
// const primaryGenres = genres[0]; ======= BAD
const [scienceFiction, humor, speculativeFiction] = genres;
console.log(scienceFiction);

// ============================================
// Rest & Spread Operator
// Rest
const [primaryGenre, secondaryGenre, ...otherGenre] = genres;
console.log(primaryGenre, secondaryGenre, otherGenre);

// Spread
const newGenres = [...genres, "romance"];
console.log(newGenres);

const updatedBook = {
  ...book,
  hasMovieAdaptation: true, // Adding a new property
  moviePublicationDate: "09-09-2004", // Overwriting an existing property
};
console.log(updatedBook);

// Arrow Function
const getYear = (str) => str.split("-")[0];
// function getYear(str) {
//   return str.split("-")[0];
// }

// Template Literals
const summary = `${title}, a ${pages}-pages long book, was written by ${author} and published in ${getYear(
  publicationDate
)}. The book has ${hasMovieAdaptation ? "" : "not "}been adapted as movies`;
console.log(hasMovieAdaptation);

console.log(summary);

// Ternary Operator
const pagesRange = pages > 1000 ? "over a thousand" : "less than 1000";
console.log(`The book has ${pagesRange} pages`);

// Short-circuit & Logical Operator
// Short-circuit for && logical operator
console.log(true && "Some string");
console.log(false && "Some string");
console.log(hasMovieAdaptation && "This book has a movie");

// falsy: 0, '', null, undefined, false
console.log("jonas" && "Some string");
console.log(0 && "Some string");

// Short-circuit for || logical operator
// The inverse of the logical short circuit && operator.
console.log(true || "Some string");
console.log(false || "Some string");

// More example
console.log(book.translations.spanish);
const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";
spanishTranslation;

// console.log(book.reviews.librarything.reviewsCount);
// const countWrong = book.reviews.librarything.reviewsCount || "no data";
// countWrong;

// Nullish Coalescing Operator
// const count = book.reviews.librarything.reviewsCount ?? "no data";
// count;

// Optional Chaining Operator
function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount ?? 0;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  console.log(librarything);

  return goodreads + librarything;
}
console.log(getTotalReviewCount(book));

// Map
const books = getBooks();
books;

const titles = books.map(({ title }) => title);
titles;

function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount ?? 0;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  console.log(librarything);

  return goodreads + librarything;
}

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}));

essentialData;

// Filter
const filteredBooks = books
  .filter((book) => book.pages < 500)
  .filter((book) => book.hasMovieAdaptation);
filteredBooks;

const adventureBooks = books.filter((book) =>
  book.genres.includes("adventure")
);
adventureBooks;

// Reduce
const pagesAllBooks = books.reduce(
  (previousValue, book) => previousValue + book.pages,
  0
);

pagesAllBooks;

// Sort
const x = [3, 1, 15, 41, 7, 2];
const ascendingSorted = x.slice().sort((a, b) => a - b);
const decesndingSorted = x.slice().sort((a, b) => b - a);
x;
ascendingSorted;
decesndingSorted;

const sortedBooksFromLongPages = books
  .slice()
  .sort((a, b) => b.pages - a.pages);
sortedBooksFromLongPages;

// Working with immutable arrays
// 1. Add element to array
const newBook = {
  id: 6,
  title: "Harry Poter dan Sahabatnya, si Kambing Perkasa",
  author: "Lala Movie",
};

const booksAfterAdd = [...books, newBook];
booksAfterAdd;

// 2. Remove element from array
const booksAfterRemove = booksAfterAdd.filter((book) => book.id !== 5);
booksAfterRemove;

// 3. Update element in array
const booksAfterUpdate = booksAfterAdd.map((book) =>
  book.id === 6 ? { ...book, title: "Test" } : book
);

booksAfterUpdate;

// Asynchronous Javascript with Promises
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((res) => res.json())
  .then((data) => console.log(data));

// Asynchronous Javascript with Await & Async
async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();
  console.log(data);
}

getTodos();
console.log("Test");
