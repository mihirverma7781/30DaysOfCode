let word1 = 'Dylan';
let word2 = 'Israel';
let num1 = 2;
let num2 = 3;

// const fullName = `${num1 + num2} ${word2}`;
let example = `${word1}
 ${word2}
 ${num1+num2}`;
// console.log(fullName);
console.log(example)
document.getElementById('example').innerText = example;

// destructing objects

const player = {
    name: 'Lebron James',
    club: 'LA Lakers',
    citys:'oak',
    address: {
      city: 'Los Angeles'
    }
  };
  
  // console.log( player.address.city );
  
  const { name, club, citys, address: { city } } = player;
  
  // console.log(`${name} plays for ${club}`);
  
  console.log(`${name} lives in ${citys}`);
  

  /*
    **** Challenge ****
    
    For this challenge destruture the following object.
*/

const student = {
    name: "Kyle",
    age: 24,
    projects: {
        diceGame: "Two player dice game using JavaScript"
    }
}
const {name,age,projects:{diceGame}}=student
console.log(`student name is -->${name}
age is --> ${age}
projects -->${diceGame}`)


// destructuring arrays

let [firstName, middleName, lastName] = ['Dylan', 'Coding God', 'Israel'];

lastName = 'Clements';

console.log(lastName)


// object literals

function addressMaker(city, state) {
    const newAdress = {city, state};
    
    console.log(newAdress);
}

addressMaker('Austin', 'Texas');


// object literal challange

function addressMaker(address) {
    const {city, state} = address;
    
    const newAddress = {
        city,
        state,
        country:'United States'
    };
    console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`)
}

addressMaker({city: 'Austin', state: 'Texas'});




// for of loop
// Challenge - For Of Loop

// Using the For of Loop, iterate through the array and print into the console, a message like:
// Tom lives in Lisbon

const students = [ 
    { name: "John", city: "New York" },
    { name: "Peter", city: "Paris"},
    { name: "Kate", city: "Sidney" }
]
for(let ele of students){
    const{name,city}=ele;
    console.log(`${name} lives in ${city}`)
}



//spread operator
/*
    **** Challenge ****
    
    Imagine you are going out to do some grocery shopping.
    So you have an array called shoppingList with all the products you want to buy.
    
    Now that you are inside of the shop, you have a basket with all the products from your list, but you want to add a few more.
    
    Create a new array called shoppingBasket, that will be a copy of the shoppingList array, and add some new products into it. 

*/

const shoppingList = ["eggs", "milk", "butter"];


const shoppingBasket = [ ...shoppingList, "bread", "pasta"];

console.log(shoppingBasket); 


// rest operator







// arrow functions
// function declaration
function breakfastMenu() {
    return "I'm going to scrambled eggs for breakfast";
}

//anonymous function
const lunchMenu = function() {
    return "I'm going to eat pizza for lunch";
}

const dinnerMenu = food => `I'm going to eat a ${food} for dinner`;

console.log( dinnerMenu("chicken salad") );


// default parameter
const leadSinger = (artist = "someone") => {
    console.log(`${artist} is the lead singer of Cold Play`);
}

leadSinger();




/*
**** Challenge *****

Create a function that receives a parameter of food.
If your parameter food is going to have a value of "milk"
the function should print into the console the following:

"I'm going to buy milk from the grocery shop"

But if you dont pass a value to your parameter food, it should print
"I'm going to buy something from the grocery shop"

*/
const func =(food='something')=>{
    if(food=='milk'){
        console.log(`"I'm going to buy milk from the grocery shop"`)
    }
    else if(food=='something'){
        console.log(`"I'm going to buy something from the grocery shop"`)
    }
}
func('milk')


// includes method()


/*
    ** includes() Challenge
        * You want to make a chocolate cake
        * And you have a list of ingredients represented with an array
        * Using the JavaScript includes() function
        * Check if you have the ingredient chocolate in your list of ingredients, and print into the console "We are going to make a chocolate cake" if you have it
        * Else print into the console "We can't make a chocolate cake because we are missing the ingredient chocolate"
*/

const listIngredients =  [ "flour", "sugar", "eggs", "butter",'chocolate' ];
if(listIngredients.includes('chocolate')){
    console.log(`We are going to make a chocolate cake`)
}
else{
    console.log(`"We can't make a chocolate cake because we are missing the ingredient chocolate"`)
}





Promises

const buyFlightTicket = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const error = true;
            
            if( error ) {
                reject("Sorry your payment was not successful")
            } else {
                resolve("Thank you, your payment was successful");
            }
        }, 3000)
    })
}

buyFlightTicket()
.then( (success) => console.log(success))
.catch( (error) => console.log(error) );





/**
 * Promises - Challenge
 * Create a promise that returns some user data and throws an error when not found.
 * Log the user data when listening to the promise as well as log the error.
 * 
 * Docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
*/
const info={
   
}
const data =()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
       if(Object.keys(info).length===0){
           reject("not found 404")
       } 
       else{
           resolve(info)
       }
           
        },3000)
    })
}

data().
then((fine)=>{
    console.log(fine)
}).
catch((error)=>{
    console.log(error)
})

/**
 * Fetch
 * 
 * RESTFul API - https://jsonplaceholder.typicode.com/
 * Docs - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 */

fetch('https://jsonplaceholder.typicode.com/comments/1')
    .then(response => response.json())
    .then(data => console.log(data))

fetch('https://jsonplaceholder.typicode.com/comments', {
        method: "POST",
        body: JSON.stringify({
            postId: 1,
            name: 'Dylan',
            email: 'dylansemail310@gmail.com',
            body: 'That was dope!'
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))


// async and await

const photos = [];

async function photoUpload() {
    let uploadStatus = new Promise( (resolve, reject) => {
        setTimeout( () => {
            photos.push("Profile Pic");
            resolve("Photo Uploaded")
        }, 3000)
    })
    
    let result = await uploadStatus; 
    
    console.log(result);
    console.log(photos.length);
}

photoUpload();



// Challenge - Async & Await

// Print on the console a random joke from the Chuck Norris API using Fetch and Async and Await

const apiUrl = "https://api.chucknorris.io/jokes/random";






async function jokeUpload() {
    let uploadStatus = new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve(    fetch(apiUrl)
                .then(response => response.json())
                .then(data => console.log(data.value)))
        }, 3000)
    })
    
    let result = await uploadStatus; 
    
    console.log(result);
    
}
jokeUpload();