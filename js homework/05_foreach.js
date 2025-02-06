// ***************** print each element

/*let arr = [1,2,3,4,5,6,7,8,9];

arr.forEach((element) => {
    console.log(element);
})*/

// ***************** Multiply Each Element by 2

/*let arr = [1,2,3,4,5,6,7,8,9];

arr.forEach((element) => {
    console.log(element*2);
    
})*/

// ******************************Print Index of Each Element

/*let arr = [15, 16, 45, 78, 96, 34];

arr.forEach((element, index) => {
    console.log(`index ${index} : element ${element}`);
})*/

// ************************* Sum All Elements

/*let arr = [15, 16, 45, 78, 96, 34];

sum = 0
arr.forEach((element) => {
    sum+= element;
})

console.log(sum);*/

// ******************************Convert Array to Uppercase

/* let names = ["john", "sara", "mike"];

names.forEach((element, index) => {
    names[index] = element.toUpperCase();
})

console.log(names); */

// *****************************************Count Even and Odd Numbers

/*let arr = [15, 16, 45, 78, 96, 34];

let even = 0;
let odd = 0;

arr.forEach((element) => {
    if(element%2 == 0){
        even ++;
    }
    else{
        odd++;
    }
})

console.log(`even are ${even} , odd are ${odd}`);*/

// *****************************************Add a Property to Objects

/*let students = [
    { name: "Amit", marks: 80 },
    { name: "Sara", marks: 90 },
    { name: "John", marks: 85 }
];


students.forEach((element) => {
    element.passed = element.marks>80 ? "pass" : "fail";
})

console.log(students);*/

// ************************ Find the Maximum Number

/*let arr = [15, 16, 45, 78, 96, 34];

let maxi = arr[0];

arr.forEach((element) => {
    if(element > maxi){
        maxi = element;
    }
})

console.log(maxi);*/

// **************************************Extract Emails from an Object Array

/*let arr = [
    { name: "Alice", email: "alice@example.com" },
    { name: "Bob", email: "bob@example.com" },
    { name: "xyz", email: "xyz@example.com" }
  ]

  let email = [];

  arr.forEach((element) => {
    email.push(element.email)
  })

  console.log(email);*/

// *******************************Check if All Users Have Camera ON
/*let arr = [
    { name: "Alice", cam: true },
    { name: "Bob", cam: false },
    { name: "Charlie", cam: true }
  ]
  
  let allcamon = true;

  arr.forEach((element) => {
    if(element.cam == false){
        allcamon = false
    }
  })

  console.log(allcamon);*/


  // ************************************Find Users Above a Certain Age

  let arr = [
    { name: "Alice", age: 22 },
    { name: "Bob", age: 28 },
    { name: "Charlie", age: 26 }
  ]

  let ans = [];

  arr.forEach((element) => {
    if(element.age > 25){
        ans.push(element);
    }
  })

  console.log(ans);
  
  
  
  









