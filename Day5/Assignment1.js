console.log("Ques 1")

var num = prompt("Please enter a positive no.(i.e. no. greater than or eual to 0)")
var arr=[];
var i = 0;

for (i=0;i<=num;i++){
    arr.push(i)
}
let odd = arr.filter(el=>el%2!=0)
let cube = odd.map(el=>el**3) 

console.log(`The odd numbers are: ${odd}`)
console.log(`The cubes of those odd numbers are: ${cube}`)


