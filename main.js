console.log("1-st");
let arraynumbers = [
  60, 36, 28, 16, 38, 78, 49, 2, 65, 52, 57, 6, 12, 18, 91, 8,
];

for (let i = 0; i < arraynumbers.length; i++) {
  if (arraynumbers[i] > 17) {
    console.log(arraynumbers[i]);
  }
}

console.log("2-nd");
let approxscore = 0;
let person = {
  name: "Michael",
  age: 15,
  scores: [67, 88, 72, 91, 85],
};
console.log(person);
for (let a = 0; a < 5; a++) {
  approxscore = approxscore + person.scores[a];
}
approxscore = approxscore / 5;
console.log(approxscore);
console.log(person.scores[0]);
console.log(person.scores[4]);
