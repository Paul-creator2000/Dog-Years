//my age
const myAge= 9;

//early years
let earlyYears= 2;
earlyYears= earlyYears*10.5;

//later years (subtracting 2 from my age)
let laterYears= myAge - 2;

//Calculating the number of dog years accounted for by my later years
laterYears= laterYears * 4;

console.log(earlyYears);
console.log(laterYears);

//my age in dogs years(early years + later years)
let myAgeInDogYears= earlyYears + laterYears;

//my name to lowercase
const myName='Paul'.toLowerCase();

//my name and age in dog years
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)