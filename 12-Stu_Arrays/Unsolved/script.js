// WRITE YOUR CODE HERE
var studentNames = ['Spike', 'John', 'Joe', 'Gio'];

console.log(studentNames.length);

console.log('Welcome to the class ' + studentNames[0] + '!');
console.log('Welcome to the class ' + studentNames[1] + '!');
console.log('Welcome to the class ' + studentNames[2] + '!');
console.log('Welcome to the class ' + studentNames[3] + '!');

studentNames[0] = 'Suzan';

if (studentNames[0] === 'Suzan') {
    console.log(studentNames[0] + 'is in the class');
}