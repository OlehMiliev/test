// // create obj
// let new_user = {
//   name:"Nick",
//   age: 11,
//   sex:"male",
//   toString(){
//     return `{name: "${this.name}", age: ${this.age}, sex: ${this.sex}`;
//   }
// }
//
// // преобразования объектов в JSON.
//  let student = {
//    name: "Alex",
//    age:17,
//    sex:"male",
//    isAdmin: false,
//    courses: ["Programing"],
//    wife:null
//  }
//  let json_student = JSON.stringify(student);
//
//
// // конвертация обьектов в массив
//
// let meetUp = {
//   title:"Campus",
//   room:{
//    number: 22,
//    neighbours:["Ivy", "Lee"]
//   }
// }
//
//
// let room = {
//   number: 23
// };
//
// let meetup = {
//   title: "Conference",
//   participants: [{name: "John"}, {name: "Alice"}],
//   place: room
// };
//
// room.occupiedBy = meetup;
//
// console.log(JSON.stringify(meetup,function (key,value) {
//   console.log(`${key}: ${value}`);
//   return(key == 'occupiedBy') ? undefined:value;
// }));
//
// let user_2 = {
//   name:"Dodik",
//   age:22,
//   roles:{
//     isAdmin: false,
//     isEditor: true
//   }
// }
// console.log(JSON.stringify(user_2,null,12));
//
//
// let rooms = {
//   number: 23
// };
//
// let meetUpDate = {
//   title:"Conference",
//   date:new Date(Date.UTC(2022, 11 , 12)),
//   rooms
// };
// console.log(JSON.stringify(meetUpDate,null,10));
//
// let room_11 = {
//   number:11,
//   toJSON(){
//     return this.number
//   }
// };
//
// let meet_11 = {
//   title:"Conference",
//   room_11
// };
//
// console.log(JSON.stringify(room_11));
// console.log(JSON.stringify(meet_11));



// parce JSON

let parseTestNum = "[1,2,3,4,5]";
console.log(parseTestNum)
parseTestNum = JSON.parse(parseTestNum);
console.log(parseTestNum[1])
