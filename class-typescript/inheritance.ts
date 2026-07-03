class User {
  userName: string;
  age: number
  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }

}
class Student extends User{
  studentId: number
  constructor(userName: string, age: number, studentId: number) {
    super(userName, age)
    this.studentId = studentId
  }
    display(): void{
    console.log(`userName: ${this.userName}, age: ${this.age}, studentId: ${this.studentId}`);
    
  }
}
let student1 = new Student("anisul", 31, 1324234)
student1.display()

// let user1 = new User("Anisul islam", 23)
// user1.display()
