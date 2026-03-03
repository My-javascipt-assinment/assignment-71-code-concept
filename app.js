/*==================================== Question No 1 =========================================
Math.PI
it is not method not function but it is only keyword
======================================= Answer =====================================*/
// let pi = Math.PI;
// console.log(pi.toFixed(2))


/*==================================== Question No 2 =========================================
Math.round()
it remove after decimal , and if number after decimal is 5 or greater than 1 auto added in nearest integer
======================================= Answer =====================================*/
// let num  = 2.63232;
// console.log(Math.round(num));


/*==================================== Question No 3 =========================================
Math.sqrt()
it tell us that given number is square of what, it is used on non negative numbers if 
we give negative number it return NaN
======================================= Answer =====================================*/
// let num = 9;
// console.log(Math.sqrt(num));

/*==================================== Question No 4 =========================================

======================================= Answer =====================================*/
// let num = -23;
// console.log(Math.abs(num))

/*==================================== Question No 5 =========================================
Math.ceil();
it removes decimal and it does not care after decimal number is 5 or greater , it always 
add 1 in before decimal number
======================================= Answer =====================================*/
// let num = 1.09;
// console.log(Math.ceil(num))

/*==================================== Question No 6 =========================================
Math.floor() 
it only remove deciaml , it does not add one more in nearest integer
======================================= Answer =====================================*/
// let num = 23.32424;
// console.log(Math.floor(num));

/*==================================== Question No 7 =========================================
Math.max()
it is find to find the maximum values
======================================= Answer =====================================*/
// console.log(Math.max(4,2,55,43))
// console.log(Math.min(3,1,22,32))

/*==================================== Question No 8 =========================================
Math.random() 
it give us after decimal greater than zero and lesss than 1 16 numbers that are different on each refresh
======================================= Answer =====================================*/

// let random = Math.floor((Math.random()*2)+1);
// console.log(random)

 /* var friend = ['red','blue','black','green'];
 let radom = Math.floor(Math.random()* friend.length);
 console.log(radom)
 console.log(friend[radom])
 let div = document.getElementById('div')

 let checking = setInterval(() => {
    var friend = ['red','blue','black','green'];
 let radom = Math.floor(Math.random()* friend.length);
 console.log(friend[radom])
 div.style.background = friend[radom]
    if(div.style.background == 'red'){
        clearInterval(checking)
    }
 }, 1000); */



/*==================================== Question No 9 =========================================
Math.round practice
======================================= Answer =====================================*/
/* let scores = [89.1, 72.5, 94.9, 60.3];
let round = []
for(let i = 0;i < scores.length;i++){
    console.log(scores[i])
    round.push(Math.round(scores[i]))
}

console.log(round) */




/*==================================== Question No 10 =========================================
changin case .toLowerCase() and .toUpperCase()
======================================= Answer =====================================*/
/* let name = 'AzIzuLLah';
console.log(name);
console.log(name.toLowerCase());
console.log(name.toUpperCase())

 */


/*==================================== Question No 11 =========================================
find the length of lowercase and upper case letters in string
======================================= Answer =====================================*/
/* let name = 'AziZullaH';
console.log(name)
let lower = [];
let upper = []
for(let i = 0;i <name.length;i++){
    // console.log(name[i])
    if(name[i] == name[i].toLowerCase()){
        lower.push(name[i])
    }
    else{
        upper.push(name[i])
    }
}
console.log(lower);
console.log(upper)
console.log('the length of uppercase letters is ',upper.length)
console.log('the length of lowercase letters is ',lower.length)
 */

/*==================================== Question No 12 =========================================
find the length of uppercase and lowercase words in string
======================================= Answer =====================================*/
/* let str = 'I am GOING to School daily';
   str = str.split(' ')
let need = str.filter((word)=>{
    return word == word.toLowerCase()
})
console.log(need)
let total = str.length;
let lower = need.length;
let upper = total - lower;
console.log(lower);
console.log(upper)
 */



/*==================================== Question No 13 =========================================
charAt
======================================= Answer =====================================*/
/* let str = 'javascript';
console.log(str.charAt(2))
console.log(str[3])
console.log(str.charAt(str.length-1))

 */
/*==================================== Question No 14 =========================================
local, global and lexical scope
======================================= Answer =====================================*/

/* function scoping(){
    let num = 1;
    function child(){
        num++;
        console.log(num)
    }
    return child;
}
let ans = scoping();
ans();
ans()
 */

// let a = 1;

// function parent(){
//     let b = 2;
//     function child(){
//         let c  = 3;
//         console.log(a);
//         console.log(b)
//     }
//     child()
//     console.log(a);
//     console.log(b);
//     // console.log(c)
// }
// parent()
// console.log(a);
// // console.log(b);
// // console.log(c)

/*==================================== Question No 15 =========================================
bank account with closure function
======================================= Answer =====================================*/
 /* function bankAccount(name){
    console.log(`${name} has openend an account`)
    let balance = 0;
    // deposit function
    const deposit = (amount)=>{
        balance = balance + amount
console.log(`${name} deposited an amount of  ${amount} rupees in his account`)
    }
    // getBalance function
    const getBalance = ()=>{
        console.log(`your balance is ${balance}`)
    }
    // withDraw function 
    const withDraw = (amount)=>{
        if(amount > balance){
            console.log(`insufficient balance`)
        }
        else {
             balance = balance - amount
        }
    }
    return { deposit,
        getBalance,
        withDraw

    }
 }
let ans = bankAccount('Ilyas')
ans.deposit(100);
ans.withDraw(40)
ans.getBalance()
 */




/*==================================== Question No 16 =========================================
+, Number, parseFloat( ) and parseInt( ) are used to convert string to number, 
parseInt() convert string to number but it removes after . all values if number is decimal
======================================= Answer =====================================*/
/* let num = '123.978';
console.log(num,typeof num)
// let n = +(num);
// let n = Number(num)
// let n = parseFloat(num)
let n = parseInt(num)
console.log(n, typeof n)

 */



/*==================================== Question No 17 =========================================
number to string converting
.toString(), String and + ''
======================================= Answer =====================================*/
/* let n = 12.34;
console.log(n,typeof n)
// let str = n.toString();
// let str = n + '';
let str = String(n)
console.log(str,typeof str)
 */



/*==================================== Question No 18 =========================================
.toFixed()
we can set numbers after decimal using this method, it rounds numbers also nearest 
integer
======================================= Answer =====================================*/
/* let num = 21.536;
console.log(num);
console.log(num.toFixed(0))
 */



/*==================================== Question No 19 =========================================
date topic
======================================= Answer =====================================*/
// const date = new Date();
// console.log(date.getMinutes())
// console.log(date.toDateString())
// console.log(date.toTimeString())
// console.log(date.toLocaleTimeString());
// console.log(date.toLocaleDateString())





/*==================================== Question No 20 =========================================
date 
======================================= Answer =====================================*/
/* let now = new Date();
let birthDay = new Date('09 09 1992');
console.log(birthDay)

    var dayName = ['sunday','monday','tuesday','wednesday','thursday','friday','satruday'];
    let day = now.getDay();
    console.log(day)
    console.log(dayName[day])
 */


/*==================================== Question No 21 =========================================
day from birth date to today
======================================= Answer =====================================*/
/* var today = new Date();
      var bday = new Date('09 september 1992');
      let todayInMilliseconds = today.getTime();
      console.log(todayInMilliseconds);
      let bdayInMilliSeconds = bday.getTime();
      console.log(bdayInMilliSeconds)

      let difference = todayInMilliseconds - bdayInMilliSeconds
console.log(difference);
let seconds = Math.floor(difference / 1000)
console.log(seconds,' seconds')
let minutes = seconds / 60
console.log(minutes, ' minutes');

let hours =minutes/60
console.log(hours, ' hours');

let days = hours/24
console.log(days ,' days');
let month = days /30
console.log(month,' months');
let years =  month/12
console.log(years, ' years') */

/*==================================== Question No 22 =========================================
calculate hours in next class
======================================= Answer =====================================*/
 /* var today = new Date();
      var classTime  = new Date('2 March 2026 09:00:00')
let todayInMilliseconds = today.getTime();
let classTimeInMilliseconds = classTime.getTime();
let difference = classTimeInMilliseconds - todayInMilliseconds
console.log(difference)
let hours = Math.floor(difference/(1000*60*60));
console.log(hours) */


/*==================================== Question No 23 =========================================
date practice
======================================= Answer =====================================*/
// let now = new Date();
// console.log(now)
// now.setDate(4);
// now.setFullYear(2028);
// now.setHours(18);
// now.setMonth(8);
// now.setMilliseconds(400)
// console.log(now)




/*==================================== Question No 24 =========================================
switch statement 
is used when we have to compare one value with multiple options , switch statement 
is used only with equlity operator === , it can not be used with <,>,>=, and <= etc
======================================= Answer =====================================*/
/* let day = Number(prompt('enter day number lik3 1'));
switch(day){
    case(1): console.log('sunday')
    break;
    case(2):console.log('monday')
    break;
    case(3) : console.log('tuesday')
    break;
    case(4):console.log('wednesday')
    break;
    default:console.log('friday')

} */




/*==================================== Question No 25 =========================================
switch statement
======================================= Answer =====================================*/
// let age = 444;
// switch(true){
//     case(age >= 20 && age <= 50):console.log('eligible')
//     break;
//     default:console.log('not eligible')
// }




/*==================================== Question No 26 =========================================
formula 
======================================= Answer =====================================*/
// // a2-2ab+b2?
// function calculation(a,b){
//     let x = (a*a);
//     let y = (b*b);
//     let ab = a*b;
//     let f = 2 * ab;
//     let final = x - f + y;
//     return final;
// }
// let ans = calculation(2,3)

// console.log(ans)


/*==================================== Question No 27 =========================================
swapping image
======================================= Answer =====================================*/
// let img = document.getElementById('img');
// function one(){
//     // console.log(img)
//     img.setAttribute('src',"./assets/off.jfif")
// }

// function two(){
//     // console.log('two')
//     img.setAttribute('src',"./assets/on.jfif")
// }




/*==================================== Question No 28 =========================================
bulb on/off function
======================================= Answer =====================================*/
/* let bulb = document.getElementById('bulb');
let heading = document.getElementById('heading');
let btn = document.getElementById('button');

function on(){
    bulb.setAttribute('src',"./assets/on.jfif");
    heading.innerHTML = 'Bulb is on';
     btn.innerHTML = 'Bulb off';
     btn.setAttribute('onclick','off()')

}
function off(){
    bulb.setAttribute('src',"./assets/off.jfif");
    heading.innerHTML = 'Bulb is off';
     btn.innerHTML = 'Bulb on'
     btn.setAttribute('onclick','on()')
}


 */

/*==================================== Question No 29 =========================================
global variable
======================================= Answer =====================================*/
 /* var number = 2;
        function modification(){var number = 5;
        console.log('Local number',number);
        window.number = window.number + 100;}

        modification();
        console.log('global number',number)
        output = 102 */
            

/*==================================== Question No 30 =========================================
block scope
var is not block scope, var is only function scope
let and const are block scoped.
======================================= Answer =====================================*/
//  {
//     let name = 'Aziz';
//     let designation = 'developer';
//     var city = 'karachi'
//  }

// console.log(city);
// console.log(name);
// console.log(designation)


/*==================================== Question No 30 =========================================
difference between innerHtml and innerText
======================================= Answer =====================================*/
// let heading = document.getElementById('heading')
// // heading.innerHTML = '<i>hello i am Aziz</i>'
// heading.innerHTML = '<i>hello i am Aziz</i>'





/*==================================== Question No 31 =========================================
heding.Attributes.length
======================================= Answer =====================================*/
/* let heading = document.getElementById('heading');
console.log(heading.hasAttribute('id'))
heading.setAttribute('onclick','testing()')
console.log(heading.getAttribute('onclick'))
console.log(heading);
console.log(heading.attributes.length)
 */

/*==================================== Question No 32 =========================================
className & classList
======================================= Answer =====================================*/
/* function addClass() {
      var heading = document.getElementById("heading");
      heading.className = "myStyle";  // replaces all classes with 'myStyle'
      let div = document.getElementById('div')
      div.className = 'myDiv'
    } */

// classlist
/* let heading = document.getElementById('heading');
function adding(){
    heading.classList.add('heading')
}
function removing(){
    heading.classList.remove('heading')
}
function toggling(){
    heading.classList.toggle('heading') */
// }
/*==================================== Question No 33 =========================================
getElementsByClassName
======================================= Answer =====================================*/
// let get = document.getElementsByClassName('liEl');
// console.log(get)
// for(let i = 0;i < get.length;i++){
//     // console.log(get[i])
//     get[i].style.color = 'red'
// }




/*==================================== Question No 34 =========================================
higher order function
======================================= Answer =====================================*/
// // add function
// function add(a,b){
//     return a + b
// }

// // multiply function
// function multiply(a,b){
//     return a * b
// }

// // subtract function
// function subtract(a,b){
//     return a -b
// }

// // division function

// function division(a,b){
//     return a /b
// }
// // now we pass these function in higher order function as callback 
// // first pass add function 
//   function calculation(m,n,opration){
//     return opration(m,n)
// }
// let ans = calculation(10,20,add)
// console.log(ans)  
// // now we pass multiply function in higher order function 
//  function calculation(m,n,opration){
//     return opration(m,n)
// }
// let ans = calculation(10,20,multiply)
// console.log(ans) 

// // now we pass subtract function 
//  function calculation(m,n,opration){
//     return opration(m,n)
// }
// let ans = calculation(10,20,subtract)
// console.log(ans) 

// // now we pass division function 
// function calculation(m,n,opration){
//     return opration(m,n)
// }
// let ans = calculation(10,2,division)
// console.log(ans)
/*==================================== Question No 35 =========================================
higher order function
======================================= Answer =====================================*/
/* function add(a,b){
    return a + b
}

function calculate(m,n,operation){
 

 function inner(){
    let u = 5;
    let y = 10;
    return u * y
    
 }
 return {
    result : operation(m,n),
    inner : inner
 }
}
let ans = calculate(2,4,add)
console.log(ans.result)
console.log(ans.inner())
 */


/*==================================== Question No 36 =========================================
includes(), .at()
======================================= Answer =====================================*/
// let pets = ["cat", "dog", "bat"];
// console.log(pets.includes('dog'));
// console.log(pets.at(55))



// let str = 'sky';
// console.log(str.at(1))
// console.log(str.includes('q'))

// let str = 'what is your name'
// // console.log(str.at(1))
// console.log(str.includes('yours'))
/*==================================== Question No 37 =========================================
object 
object is related information to student, tecaher etc 
object has methods
======================================= Answer =====================================*/
// student.hasOwnPoperty('age')
// delete 'age' in student;
// delete student['age'];
// student.name = 'Aziz';
// let name = student['name'];


// let student = {
//     name : 'Aziz',
//     rollNo : 21,
//     class : 'web development'
// }
// // console.log(student.hasOwnProperty('name'));
// // console.log('name' in student)
// // console.log(student.rollNo)
// // delete student.rollNo
// console.log(Object.keys(student).length)
// delete student['rollNo']
// // student.rollNo = 111
// console.log(student['rollNo'])
// console.log(student)

// console.log(Object.keys('student').length)
/*==================================== Question No 38 =========================================
null/undefined
======================================= Answer =====================================*/
// let name ;
// console.log(name)
// console.log(typeof name)
// let age = null;
// console.log(typeof age)
// console.log(age)



/*==================================== Question No 39 =========================================
show object data  on dom
======================================= Answer =====================================*/
/* /* let age = 22;
let name = 'Aziz';
city = 'karachi';
let record = {
age,
name,
city
}
let recordString = JSON.stringify(record)

function store(){
    localStorage.setItem('user',recordString)

    let get = localStorage.getItem('user');
    get = JSON.parse(get)
    console.log(get)
    let ul = document.getElementById('ul');
    ul.innerHTML = '';
    for(let key in get){
       let li=  document.createElement('li');
        li.textContent = `${key} : ${get[key]}`
        ul.appendChild(li)
    }
}

let btn = document.getElementById('btn')
btn.addEventListener('click',store) */
 
/*==================================== Question No 40 =========================================
show object data on dom
======================================= Answer =====================================*/
/* let person = {
    name : 'Ahmed',
    age : 22,
    city : 'karachi',
    designation  : 'developer'
}

function showData(){
    let ul = document.getElementById('ul');
    ul.innerHTML = '';
    for(let key in person){
        let li = document.createElement('li');
        li.innerText = `${key} : ${person[key]}`;
        ul.appendChild(li)
    }
}

let btn = document.getElementById('btn');
btn.addEventListener('mouseover',showData)
 */
/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/



/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================
https://themewagon.com/themes/free-bootstrap-4-html5-web-developer-portfolio-website-template-satner/
======================================= Answer =====================================*//*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/




/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/



/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/



/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================
https://themewagon.com/themes/free-bootstrap-4-html5-web-developer-portfolio-website-template-satner/
======================================= Answer =====================================*//*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/




/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/



/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================
https://themewagon.com/themes/free-bootstrap-4-html5-web-developer-portfolio-website-template-satner/
======================================= Answer =====================================

==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================
https://themewagon.com/themes/free-bootstrap-4-html5-web-developer-portfolio-website-template-satner/
======================================= Answer =====================================*/

/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/



/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================
https://themewagon.com/themes/free-bootstrap-4-html5-web-developer-portfolio-website-template-satner/
======================================= Answer =====================================*//*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/




/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/



/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/

