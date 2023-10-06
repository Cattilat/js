
// console.log("hello world");
// for(let i =0; i<= 5;i++){
//     console.log("*");
//     console.log("* *");
//     console.log("* * *");
//     console.log("* * * *");
// }
// let fruits = ["apple","mango","orange","lime"];
// for(let i = 0; i< fruit.length; i++){
//       if(fruit[i] === "mango" || fruit[i] === "orange"){
//         continue;
//     }
//     console.log("I like "+ fruit[i]);
// }
// let mySelf= {
//     myName : "Thiha zaw",
//     age : 20,
//     skill : "developer"
// }

// for(x in mySelf){
//     console.log(mySelf[x]);
// }
// function run(x,y){
//     let z = x+ y;
//     return z;
// }

// console.log(run(10,20));
// let expression = "Banana";
// switch(expression){
//     case "Mango" :
//     console.log("Mango cost 0.24 pound");
//     break;
//     case "Mango" :
//     case "banana" :
//     console.log("Mango and banana cost 2.34 pound");
//     break;
//     default : 
//     console.log(`we are run out of ${expression}`);
// }
let fruits = ["apple","mango","orange","lime","Thiha"];
let i = 0;
// while(i < fruits.length){
//     let justtext = 0;
//     justtext = fruits[i++];
//     console.log(`I love you ${justtext} fuck you `);
//     console.log("fuck you")
// }
do {
    let justText = 0;
    justText = fruits[i++];
    console.log("i love you " + justText);
} while (i<fruits.length);