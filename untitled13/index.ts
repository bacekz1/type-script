let age: number = 20;
let empty;
if(age> 15){
    age = 15
}
// function get(document){
//     console.log(document)
// }

let test = [1,2,3,4,5,6,7,8,9,'1', 5.5, 6.5, 7.5, 8.5,'2'];

let deiba = [];
deiba[0] = 1;
deiba[15] = 6;
console.log(deiba[3])
deiba[4] = 5.5;
console.log(deiba[4])

deiba.forEach(n =>n.valueOf())

let wow:[number,string] = [1,'1'];
wow.push(1)
wow.push(1)
wow.push(1)
wow[0] = 15;
console.log(wow[0])
const enum Size {Small = "small",Medium = "medium",Large = "large"}
console.log(Size.Medium)

