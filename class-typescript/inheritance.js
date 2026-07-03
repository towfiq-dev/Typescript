"use strict";
class User {
    userName;
    age;
    constructor(userName, age) {
        this.userName = userName;
        this.age = age;
    }
}
class Student extends User {
    studentId;
    constructor(userName, age, studentId) {
        super(userName, age);
        this.studentId = studentId;
    }
    display() {
        console.log(`userName: ${this.userName}, age: ${this.age}, studentId: ${this.studentId}`);
    }
}
let student1 = new Student("anisul", 31, 1324234);
student1.display();
// let user1 = new User("Anisul islam", 23)
// user1.display()
