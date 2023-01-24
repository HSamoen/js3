//VERY HARD: Object prototype chain and prototypal inheritance exercise.
//1.Create a Person constructor that has three properties: name, job, and age.
//2.Give the Person an 'exercise' method that console logs whatever you want, e.g. "Running is fun! - said no one ever".
//3.Give the Person a 'fetchJob' method that console logs the person's name and job, e.g. "Brad is a back-end developer".
//4.Create a Programmer constructor that inherits all the members from Person with an additional 'languages' property that is passed in and a busy property that is NOT passed in and is set to true by default.
//5.Give the Programmer a 'completeTask' method that updates the busy property on that programmer to be false. Also give the Programmer an 'acceptNewTask' method that updates the busy property on that programmer to be true.
//6.Give the Programmer an 'offerNewTask' method that console logs one thing if the programmer is busy and another if the programmer is not, e.g. should initially log out "Mark can't accept any new tasks right now." and "Mark would love to take on a new responsibility." if the programmer is not busy.
//7.Give the Programmer 'learnLanguage' and 'listLanguages' methods that add new languages to the programmer and list off all languages the programmer knows.
//8.Test it out - can you create different programmers and run all the methods on them? Does each programmer maintain their own properties properly and independently of the other programmers? Bonus - ES6 Syntax: Use ES6 Syntax in your answer. Feel free to add on new methods or properties to incorporate the syntax.
//JavaScript ES6 makes your code more modern and more readable; features like arrow functions, template strings, etc.

//(1-3) create person constructor/add properties/methods
function person (name,job,age,sports) { 
    this.name = name;
    this.job = job ;
    this.age = age;
    this.sports = sports; 
    this.playSports= ()=>  { return `${this.name} plays ${this.sports}`}; //lines 17-18: new method and property to incorporate the arrow funtion (ES6 Syntax)
    this.exercise = function () {
        // return (this.name + " likes to hike"); //my codes before incorporating the (ES6 Syntax)
        return (`${this.name} likes to hike`); //use of template literals are (ES6 Syntax)
    }
    this.fetchJob = function () {
        return (`${this.name} is a ${this.job}`);
    }
};

//(4-7) create programmer constructor/add properties/methods
function programmer (name,job,age,languages,learnlanguage) {
    person.call(this,name,job,age,) //allows for inheritance of all properties/methods from person
    this.languages = languages;
    this.busy = true;
    this.completeTask= function () {
        return this.busy = false;
    }
    this.acceptNewTask = function () {
        return this.busy = true;
    }
    this.offerNewTask= function () {
        if (this.busy==true) {
            return (`${this.name} can't accept any new tasks right now.`);
        } else (this.busy==false) 
            return (`${this.name} would love to take on a new responsibility.`);
    }
    this.learnLanguage = function () {
        return this.languages=learnlanguage
    }
    this.listLanguage  = function () {
        return (`${this.languages},${this.learnLanguage()}`);
    }
 }

 //8.test it out

//create person: person (name,job,age,sports)
let person1 = new person("HSamoen", "Software-Engineer", 23,'Tennis');

console.log(person1); //lists all the properties/methods applied to person
// console.log(person1.exercise()); //output: HSamoen like to hike
// console.log(person1.fetchJob()); //output: HSamoen is a Software-Engineer

//test arrow function
console.log(person1.playSports()); //output: HSamoen plays Tennis


//create different programmers: programmer (name,job,age,languages,busy,languages2,languages3)
let programmer1 = new programmer("Dylan", "Student", 12, "HTML","CSS")
let programmer2 = new programmer("Justin", "Student", 14,"JS","C++")

//examples to test that each programmer maintain their own properties properly and independently of the other programmers
// console.log(programmer1); //lists all the properties/methods applied to programmer1
// console.log(programmer2); //lists all the properties/methods applied to programmer2
// console.log(programmer1.learnLanguage()); //output: CSS
// console.log(programmer2.learnLanguage()); //output: C++
// console.log(programmer1.listLanguage()); //output: HTML,CSS
// console.log(programmer2.listLanguage()); //output: JS,C++

//example outputs of offerNewTask() 
//if this.busy=true:
// console.log(programmer1.offerNewTask()); //output: "Dylan can't accept any new tasks right now"
////if this.busy=false:
// console.log(programmer2.offerNewTask()); // output: "Justin would love to take on a new responsibility"