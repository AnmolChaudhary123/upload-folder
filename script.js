// const arr=["mango","sun","pop","nothing"];
// arr.shift(0);        
 
// let count=1;
// let n=0;

// while(count<10){
//             n+=2;
//         console.log(n);
//         count++;
// }


// let  totalComputer=30;
// let bookedSeat=5;
// let result="";

// while(bookedSeat>=totalComputer){
//     result+=bookedSeat;
//     bookedSeat++;
// }
// console.log(result);


// let person={
//     name:"Anmol",
//     age:12,
//     hobbies:["reading","games"]
// }
// console.log(person.name,+person.age);


// const  video1={
//     image:"image1",
//     title:"tittle1",
//     description:"description"
// }
// const  video2={
//     image:"image1",
//     title:"tittle1",
//     description:"description"
// }
// const  video3={
//     image:"image3",
//     title:"tittle1",
//     description:"description"
// }
// const  video4={
//     image:"image1",
//     title:"tittle1",
//     description:"description"
// }
// console.log(video3.image);


// const videos=[
//     {
//          image:"image1",
//     title:"tittle1",
//     description:"description"

//     },{
//      image:"image1",
//     title:"tittle1",
//     description:"description"
//     },{
//  image:"image1",
//     title:"tittle1",
//     description:"description"
//     }
// ];
// console.log(videos);


// const student={
//     name:"Ram",
//     age:23,
//     sub:["eng","math","C++","JAVASCRIPT"]
// }
// let convertedToJson=JSON.stringify(student);
// console.log(convertedToJson);  



// function sum(a,b){
//     console.log(a+b);
// }

// function differences(a,b){
//     console.log(a-b);
// }


// function mathOperation(a,b,callblack){
//     callblack(a,b)
// }
// differences (7,4); 
// sum(2,4);
//  mathOperation(7,6,sum);
//  mathOperation(20,11,differences);

// let num = [2,2,3,5,56,2,6,8,9];
// // for(let i=0;i<num.length;i++)
// // {
// //     console.log(num[i]);
// // }

// num.forEach(()=>
// console.log("hello world")
// )
 
// let cart=[12,4,7,8,5,44];
// let result=0;
// cart.forEach(prices=>{
//     result+=prices
// });
// console.log(result)


let marks=[34,56,78,97,54,24];
marks.forEach((marks,i)=>{
    console.log('student ${i+1} scored: ${marks}');
});