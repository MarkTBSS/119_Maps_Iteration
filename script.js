"use strict";
// Maps: Iteration
const question = new Map([
    ["question", "What is the best programming language in the world?"],
    [1, "C"],
    [2, "Java"],
    [3, "JavaScript"],
    ["correct", 3],
    [true, "Correct 🎉"],
    [false, "Try again!"],
]);
console.log(question);

// Define openingHours object
const openingHours = {
    mon: {
        open: 9,
        close: 17,
    },
    tue: {
        open: 9,
        close: 17,
    },
    wed: {
        open: 9,
        close: 17,
    },
    thu: {
        open: 9,
        close: 17,
    },
    fri: {
        open: 9,
        close: 17,
    },
    sat: {
        open: 10,
        close: 16,
    },
    sun: {
        open: 12,
        close: 15,
    },
};

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
console.log(question.get("question"));
for (const [key, value] of question) {
    if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);

console.log(question.get(question.get("correct") === answer));

// Convert map to array
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
