class User {
  public userName: string;
  public age: number

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }
}


class Student extends User{
  private studentId: number
  constructor(userName: string, age: number, studentId: number) {
    super(userName, age)
    this.studentId = studentId
  }

    display(): void{
    console.log(`userName: ${this.userName}, age: ${this.age}, id: ${this.studentId}`);
    //console.log('Hi');
  }

  setStudentId(studentId: number): void{
  this.studentId = studentId
  }

  getStudentId(): number{
  return this.studentId
}
}

let student1 = new Student("keya", 31, 1324234)
student1.setStudentId(1302342324)
//student1.display()
console.log(student1.getStudentId());


let user1 = new User("robi", 23)
user1.userName = "pinky"
//console.log(user1);

