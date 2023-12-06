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


// конвертация обьектов в массив

let meetUp = {
  title:"Campus",
  room:{
   number: 22,
   neighbours:["Ivy", "Lee"]
  }
}


let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: [{name: "John"}, {name: "Alice"}],
  place: room
};

room.occupiedBy = meetup;

console.log(JSON.stringify(meetup,function (key,value) {
  console.log(`${key}: ${value}`);
  return(key == 'occupiedBy') ? undefined:value;
}))
console.log('sdsds')
