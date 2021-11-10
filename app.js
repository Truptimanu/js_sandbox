//PRimitive
//String
const name = 'John Doe';
//Number 
const age = 45;
//Boolean
const hasKids = true;
//Null
const car = null;
//undefined
let test;
//symbols 
const sym = Symbol();
//console.log(typeof sym);



//Reference types -objects
//Array
const hobbies=['movies','music'];
//Object literals
const address = {
    city: 'Boston',
    state: "MA"
}
//Date
const today = new Date();
//console.log(today);

//num=[1,1,0,1,1,1,0,1]
// const nums = [1,1,0,1,1,1,0,0,1];
// var maximumConsecutiveones = function(nums){
//     var bigNumber=0;
//     var count=0;
//     for(var i in nums){
//         nums[i] === 1 ? count+1: 0;
//         if(count>bigNumber) 
//         bigNumber = count;
        
//     }
    
    
//     return bigNumber;
//     };
//    console.log(maximumConsecutiveones[1,1,0,1,1,1,0,0,1]);

let val;
//Number to string
val = String(555);
val = String(4+4);
//Boolean to string
val=String(true);
//Date to String
val = String(new Date());
//Array to String
val=String([1,2,3,4]);

//To String
val = (5).toString();
val =(true).toString();

//String to number
val= Number('5');
val=Number(true);
val = Number(false);
val= Number(null);
val= Number([1,2,3]);
val=Number('hello');

val=parseInt('100.30');
val=parseFloat('100.30');

// console.log(val);
// console.log(typeof val);
// //console.log(val.length);
// console.log(val.toFixed(2));

const val1=String(5);
const val2=6;
const sum= Number(val1+val2);
// console.log(sum);
// console.log(typeof sum);


//Math Object
val= Math.PI;
val= Math.E;
val = Math.round(2.4);
val =Math.ceil(2.4);
val=Math.floor(2.8);
val= Math.sqrt(64);
val=Math.abs(-23);
val=Math.pow(2,3);
val=Math.min(2,33,4,1,55,6,3,-2);
val =Math.max(2,33,4,1,55,6,3,-2);
val=Math.random();

val=Math.floor(Math.random()*20+1);

const firstName ='William';
const lastName = 'Johnson';
//const height = 5.6;
const str = 'Hello there my name is Brad';
const tags = 'Web development, web design, programming'
 
val =firstName+lastName;
//concatenation
val = firstName+' '+lastName;
//append
val ='Brad';
val += 'John';
val = 'Hello, My name is ' + firstName + ' and I am ' +  age +'.' ;

//Escaping
val='That\'s awesome, I can\'t wait';

//Length
val=firstName.length;

//concat()
val = firstName.concat(' ',lastName);

//Change case
val = firstName.toLowerCase();
val = firstName.toUpperCase();

val = firstName[2];

//indexOf()
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

//charAt()
val = firstName.charAt('2');
//Get lastchar
val = firstName.charAt(firstName.length-1);
//substring
val = firstName.substring(0,4);

//slice
val =firstName.slice(0,4);
val = firstName.slice(-3);

//split
val= str.split(' ');
val = tags.split(',');

//Replace
val = str.replace('Brad' ,'Jack');
//Includes

val = str.includes('Hello');
val = str.includes('foo');
//console.log(val);

const person = {
    firstName :'John',
    lastName : 'Doe',
    age :65,
    fullname:function(){
        console.log(this.firstName + ' ' + this.lastName);
    }
}
//console.log(`My name is ${person.firstName}.`);
//console.log(`age is ${age-20}`);

//person.fullname();

// const cars =['Ford','Chevy','Honda','Toyota'];
// cars.map((car,i,arry)=>
// console.log(car,i,arry))

//Template Strings

const name1 ='John';
const age1 = 31;
const job ='Web Developer';
const city = 'Miami';
let html;

//Without Template strings(es5)
//html = '<ul><li>Name: '+name1+'</li><li>age: '+age1+'</li><li>Job: '+job+'</li><li>city: '+city+'</li></ul>';
//document.body.innerHTML=html;

html = '<ul>' +
       '<li>Name: '+name1+'</li>' +
       '<li>age: '+age1+'</li>' +
       '<li>Job: '+job+'</li>' +
       '<li>city: '+city+'</li>'+
       '</ul>';
function hello(){
    return 'hello';
}      

//WIth Template Strings(ES6)
 
html = `<ul>
    <li>name; ${name1}</li>
    <li>age: ${age1}</li>
    <li>city: ${city}</li>
    <li>Job: ${job}</li>
    <li> ${2+2}</li>
    <li>${hello()}</li>
    <li>${age1>30 ? 'over 30': 'Under 30'}</li>

</ul>`;
      // document.body.innerHTML=html;

// create some arrays
const numbers = [43,56,33,23,44,36,5];
const numbers2 = new Array(22,45,33,76,54);
const fruit = ['Apple','Banana','Orange','Pear'];
const mixed =[22,'Hello',true,undefined,null,{a:1 ,b:2}, new Date()];

//let val;

//get array lenghth
val = numbers.length;

//Check if is array
val= Array.isArray(numbers);

//Get single value
val = numbers[3];
val =numbers[0];

//Insert into array
numbers[2] = 6;

//find index of value
val = numbers.indexOf(23);

//Mutating Array
// //Add on to end
// val = numbers.push(250);
// //remove from end
// numbers.pop();
// //Add on to front
// val = numbers.unshift(120);
// //Take off from front
// numbers.shift();
// //Splice value
// numbers.splice(1,3);
// numbers.reverse();

//concatenate array
val = numbers.concat(numbers2);
//sorting array
val = fruit.sort();
val = numbers.sort();//This will sort first number
//Use compare function
val =numbers.sort(function(x,y){
    return x-y;
});
//Reverse sorting
val = numbers.sort(function(x,y){
    return y-x;
});


//console.log(numbers);
//console.log(val); 
    
//object Literals
const person1 = {
    firstName : 'Steve',
    lastName2 :'Smith',
    age: 30,
    email : 'steve@aol.com',
    hobbies : ['music','sports'],
    adress: {
        city: 'miami',
        state: 'FL'
    },
        getBirthYear : function(){
            return 2018 - this.age;
        }
    }
val =person1;
val =person1.firstName;
val =person1['lastName2'];
val =person1.age;
val = person1.hobbies[1];
val = person1.adress.state;
val = person1.adress['city'];
val= person1.getBirthYear();


//console.log(val);

// const num =[1,1,0,0,1,1,1,0];
// for(i=0; i<num.length ; i++)
// {
//     console.log(num[i]);
    
// }

const people = [
        {name2: 'john',age: 30},
        {name2: 'Mike',age: 23},
        {name2: 'Nancy',age: 23}
];
for (i=0; i<people.length; i++)
{
   // console.log(people[i].name2);
}
    
//Dates and Times

const today1 = new Date();
const birthday = new Date('09-11-1987 11:25:00');
//'' use 
val =today1;
val = birthday;
val= today1.getMonth();
val = today1.getFullYear();
val = today1.getMilliseconds();
birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setMilliseconds(30);

console.log(birthday)
;











    
    
