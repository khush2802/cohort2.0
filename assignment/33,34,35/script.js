// level 1

// let age = +prompt("Enter your age");
// if(age < 18){
//      alert("You are a minor not eligible to vote");     
// }else{
//      alert("You are an adult eligible to vote");
// }


//8 + 16

// let table = +prompt("Enter a number to show its multiplication table");
// let start = +prompt("Enter starting point");
// let end = +prompt("Enter ending point");
// console.log(`Multiplication table of ${table} from ${start} to ${end} is:`);
// for(let i = start; i <= end; i++){
//      let result = table * i;
     
//      console.log(`${table} x ${i} = ${result}`);
// }


//9
// for(let i=1 ; i<=15 ; i++){
//      if(i >= 8){
//           console.log(i);
//      }
// }



//10 + 11

// let attempts = 0;
// let password = "km123";
// while(attempts < 3){
//      let userInput = prompt("Enter your password:");
//      attempts++;
//      if(userInput.trim() === password){
//           alert("Access granted");
//           break;
//      }else{
//           alert("Incorrect password. Try again.");
//      }
//      if(attempts === 3){
//           alert("Access denied. Too many incorrect attempts.");
//      }
// }


//12
// let count = 0;
// let word = prompt("enter a word:");
// while(word !== "stop"){
     
//      word = prompt("enter a word:");
//      if(word === "yes"){
//           count++;
//      }
// }
// console.log(`${count}`);

//13
// for(let i = 1 ; i <= 50 ; i++){
//      if(i%7 === 0){
//           console.log(i);
//      }
// }



//14
// let sum = 0;
// for(let i = 1 ; i <= 30 ; i++){
//      if(i % 2 !==0){
//           sum += i;
//           console.log(`Odd number: ${i}, Sum: ${sum}`);
//      }
// }

//15
// let num = +prompt("Enter a number:");

// while (num % 2 !== 0) {
//     alert(`The number ${num} is odd. Please try again.`);
//     num = +prompt("Enter a number:");
// }

// alert(`The number ${num} is even.`);


//17
// count = 0;
// for(let i = 1 ; i <= 20 ; i++){
//      if(i % 2 !== 0 && count < 3){
//           console.log(i);
//           count++;
//      }
// }

//18
// let count = 0;
// let arr = [];
// let positive = 0;
// while (count < 5) {
//     let num = +prompt("Enter a number:");
//     if (num > 0) {
//         arr.push(num);
//         positive++;
//     }
//     count++;
// }

// console.log(`Positive numbers entered: ${arr}`);
// console.log(`Total positive numbers: ${positive}`);

//19
let withdrawn = 0;
let balance = 1000;
while (withdrawn < 3) {
    let amount = +prompt("Enter amount to withdraw:");
    if (amount <= balance) {
        balance -= amount;
        alert(`Withdrawal successful. Remaining balance: $${balance}`);
    } else {
        alert("Insufficient funds.");
    }
    withdrawn++;
}