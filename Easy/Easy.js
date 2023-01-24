//EASY: A local gym wants to implement an "exercise of the day" program where there is a free class that day that promotes a certain exercise. The gym needs some backend logic that will update its system to reflect which exercise will be promoted that day. Write a function that will take as an input the name of an exercise and console log a message like Today's exercise: running
//Note: you should only write one function that can dynamically print the value of the exercise for that day, and it must be a closure//

// a closure gives you access to an outer function's scope from an inner function


//SOLUTION 1:

//exercise: running
var run = ('running'); 
function exercise() {
function result() {
  console.log(`Today's exercise: ${run}`); 
}
result();
}
console.log(exercise()); //example output: Today's exercise: running

//exercise: swimming
// var swim = ('swimming');
// function exercise() {
// function result() {
//   console.log(`Today's exercise: ${swim}`);
// }
// result();
// }
// console.log(exercise()); //example output: Today's exercise: swimming



//SOLUTION 2:
// let input = prompt("Enter exercise of the day");

// function exercise(x){
//     function result(){
//         return (`Today's exercise: ${x}`);
//     }
//     return result();
// }

// console.log(exercise(input)); //example output: Today's exercise: running
