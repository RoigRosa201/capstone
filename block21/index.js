// PARENT
class DataProvider {
    constructor(schema) {
      this.schema = schema;
    }
  
    findOne(id) {
      // grab one item from the database with a certain identifier
      console.log("id: ", id);
    }
  }
  
  // CHILD
  class CreditScoreDataProvider extends DataProvider {
    constructor(schema, table) {
      super(schema);
      this.table = table;
    }
  
    getCreditScoresByBureau(bureau) {
      // connect to db and grab reports by bureau
      console.log("bureau: ", bureau);
    }
    
  }
  
  const creditScoreDataProviderInstance = new CreditScoreDataProvider("credit", "scores");
  
  // console.log("creditScoreDataProvider: ", creditScoreDataProviderInstance);
  
  // creditScoreDataProviderInstance.findOne("1");
  // creditScoreDataProviderInstance.getCreditScoresByBureau("Equifax");
  
  
  // Keywords
  // this (reference object)
  // new (create new object from a class)
  // extends (creates subclass from parent class)
  // super (needed for subclasses)
  
  
  
  class PersonClass {
    constructor(name, age, gender) {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }
    
    printPersonInfo() {
      console.log("Name: ", this.name, "Age: ", this.age, "Gender: ", this.gender)
    }
  }
  
  class StudentClass extends PersonClass {
    constructor(name, age, gender, collegeName, grade) {
      super(name, age, gender);
      this.collegeName = collegeName;
      this.grade = grade;
    }
  
    printStudentInfo() {
      console.log("College name: ", this.collegeName, "grade: ", this.grade)
    }
  
    printPersonInfo() {
      console.log("does this work")
    }
  }
  
  
  const newStudent = new StudentClass("Jackie", 28, "female", "high school", 12);
  
  console.log("new student: ", newStudent);
  
  newStudent.printStudentInfo();
  newStudent.printPersonInfo();
  
  class Pet {
    constructor(name, age, sound) {
      this.name = name;
      this.age = age;
      this.sound = sound;
    }
    birthday() {
      console.log(`${this.name} is ${this.age} years old.`)
    }
  
    makeSound() {
      console.log(`${this.name} says ${this.sound}`)
    }
    
  }
  
  const dog = new Pet("Buster", 9, "ruff, ruff");
  
  const cat = new Pet("Fluffy", 13, "meow");
  
  // dog.birthday();
  // dog.makeSound();
  
  // cat.birthday();
  // cat.makeSound();
  
  
