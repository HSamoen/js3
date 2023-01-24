//HARD: Inside of a closure, create an object called pii (Personally Identifiable Information)that cannot be accessed directly. The object should have at least two properties: name and ssn. Only the name property should be accessible, and it should be called through a public function. The ssn property should not be accessible at all. Creating private objects and private properties helps you control who has access to what data and helps you prevent people who shouldn't see important info like social security numbers from getting access to the data. You can use 'getName' or other get methods to access data that people might need. For example, people addressing a package or email may need a customer's name, but they definitely shouldn't have access to their ssn.


//this.() keyword refers to an object

var Patient = function pii(name,ssn) {
    var name = name;
    var ssn = ssn;
    this.getName = function () {
        return name;
    }
    // this.getSSN = function () {
    //     return ssn;
    // } //can be included in the function if we do want to access the ssn
}

var patient1 = new Patient("Dylan","123-456-7890");  

console.log(patient1.name); //Output: undefined
console.log(patient1.ssn); //Output: undefined
console.log(patient1.getName()); // Output: Dylan

//if getSSN method was addeded into the function:
// console.log(patient1.getSSN()); // Output: 123-456-7890
