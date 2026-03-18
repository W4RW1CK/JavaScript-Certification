// start of script.js

const books = [
  {
    title: "Haz que suceda",
    authorName: "Luis Miguel Trujillo",
    releaseYear: 2011,
  },
  {
    title: "Dialogue aux enfers entre Machiavel et Montesquieu",
    authorName: "Maurice Joly",
    releaseYear: 1864,
  },
  {
    title: "El hombre mediocre",
    authorName: "José Ingenieros",
    releaseYear: 1913,
  },
];

const sortByYear = (book1, book2) => {
  if (book1.releaseYear < book2.releaseYear) {
    return -1;
  } else if (book1.releaseYear > book2.releaseYear) {
    return 1;
  } else if (book1.releaseYear === book2.releaseYear) {
    return 0;
  }
};

const filteredBooks = books.filter((book) => book.releaseYear <= 1950);

filteredBooks.sort(sortByYear);

// end of script.js
