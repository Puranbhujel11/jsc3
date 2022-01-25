// function Person ();
//  { 
//      constructor (name, job, age)
//     this.name = 'Puran',
//     this.job = 'Developer'
//     this.age = 21,

//      this.greet = function () {
//         console.log('hello');
//     }
// }

class Person {
    constructor(name, job, age) {
        this.name = name;
        this.job = job;
        this.age = age;
        this.exercise = function () {
            console.log('Exercise is fun');
        };
        this.fetchJob = function () {
            console.log(this.name + " is a " + this.job);
        };
    }
}
  
  class Programmer {
    constructor(name, job, age, languages) {
        Person.call(this, name, job, age);
        this.languages = [languages];
        this.busy = true;
        this.completeTask = function () {
            this.busy = false;
        };
        this.acceptnewTask = function () {
            this.busy = true;
        };
        this.offernewTask = function () {
            if (this.busy) {
                return console.log('Mark cannot accept any new tasks right now');
            } else {
                console.log('Mark will love to take on a new responsibilty');
            }
        };
        this.learnLanguage = function (language) {
            this.languages.push(language);
        };
        this.listLanguages = function () {
            console.log(this.languages);
        };
    }
}
  var puran = new Person('Puran', 'Developer', 21);
  puran.fetchJob();