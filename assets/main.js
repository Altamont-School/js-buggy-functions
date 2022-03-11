// Welcome to this codebase! The developers that made it are terrible at their
// jobs and have tons of bugs. The first set of pair-programmers that fix
// all the bugs get a candy-based prize.
// Some rules:
// 1. Your program must be completely free of errors in the console
// 2. You must use abstractions for each solution - no hardcoding values!
// 3. An expected output of the program is found at the bottom of the file...
// Good luck 🚀

// Here's all our students
const studentOne = `Todd Flanders`;
cont studentTwo = `Rod Flanders`;
const studentThree = `Bart Simpson`;
const studentFor = `Lisa Simpson`;
const studentFive = `Milhouse Van Houten`;

// Here's some functions for them
function screamName(x) {
  let scream = name.toUpperCase();
  console.log(`SIT DOWN, ${scream}!`);
  return scream;
}

function praise(name) {
  const compliments = [
    `Great work`,
    `You're so well behaved`,
    `I'm impressed`
  ];
  const randomCompliment = compliments[Math.floor(Math.random()*compliments.length)];
  const praiseMessage = `${randomCompliment}, {name}`;
  console.log(praiseMessage);
  return praiseMessage;
}

function isAFlanders(studentName) {
  const nameCheck = studentName.includes(`Flanders`);
  console.log(`Flanders: ${nameCheck}`);
}

screamName(studentThree);
praise(studentFour);
isAFlanders(studentOne);
isFlanders(studentTwo);

// Here's the expected output of a properly functioning program, using the
// functions above:
// SIT DOWN, BART SIMPSON!
// [A random compliment], Lisa Simpson!
// Passing in studentOne or studentTwo returns: Flanders: true
