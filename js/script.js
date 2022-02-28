// Question 1

const instrument = "guitar";

console.log(instrument);




// Question 2

const button = document.querySelector("button.login");

console.log(button);



// Question 3

const instruments = [
    {
        type: "guitar",
        colour: "red",
    },
    {
        type: "piano",
        colour: "black",
    },
];

console.log(instruments);



// Question 4

// var name = "Percival";
// var age = 13;

const name = "Percival";
let age = 13;
console.log(name, age);



// Question 5


let total = 0;
total = total + 10;

console.log(total);




// Question 6

for (let i = 0; i <= 5; i++) {
    console.log(i);
    
}


// Question 7

const firstName = "Florence";

const introduction = `Hello, my name is  ${firstName}.

`

console.log(introduction);






// Question 8

const title = "Big Technical Event";

const whatToHave = "good time";

const welcome = `Welcome!
This  ${title}  is starting today.
Have a  ${whatToHave}!`

console.log(welcome);




// Question 9

const car = {
    "paint-colour": "red",
    "number of wheels": 3
};

console.log(car["paint-colour"]);
console.log(car["number of wheels"]);



// Question 10

    const product = {
        name: "Chicken Lips",
        price: 35,
        expired: false,
        getExpired: function() {
            console.log("My name is " + this.name);
        }
    }; 

    product.getExpired()





