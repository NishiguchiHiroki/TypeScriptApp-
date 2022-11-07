export {};

enum Months {
    January,
    February,
    March,
    April,
    May,
    Jun,
    July,
    August,
    September,
    November,
    December
}

console.log(Months[0]);
console.log(Months.January);

enum Colors {
    RED = '#FF0000',
    WHITE = '#FFFFFF'
}

console.log({Colors});
console.log(Colors.RED);
