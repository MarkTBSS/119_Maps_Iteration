"use strict";

// Define the books array
const books = [
    {
        title: "Book One",
        author: "Author One",
        year: 2001,
        pages: 300,
    },
    {
        title: "Book Two",
        author: "Author Two",
        year: 2002,
        pages: 350,
    },
];

// 14.1 Convert the first book object from the books array into a Map
const firstBookMap = new Map(Object.entries(books[0]));

// 14.2 Use the for-of loop to iterate over firstBookMap, and log to the console keys that have numbers as values
for (const [key, value] of firstBookMap) {
    if (typeof value === "number") console.log(key);
}