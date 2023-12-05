// create obj
let new_user = {
  name:"Nick",
  age: 11,
  sex:"male",
  toString(){
    return `{name: "${this.name}", age: ${this.age}, sex: ${this.sex}`;
  }
}

// преобразования объектов в JSON.
 let student = {
   name: "Alex",
   age:17,
   sex:"male",
   isAdmin: false,
   courses: ["Programing"],
   wife:null
 }
 let json_student = JSON.stringify(student);
console.log(typeof json_student);
console.log(json_student);
