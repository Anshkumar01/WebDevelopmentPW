let random = Math.random()
console.log(random);
let = a = prompt('Enter the first num')
let = c = prompt('Enter the Opertion')
let = b = prompt('Enter the 2nd num')

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}


if(random > 0.1){
    console.log(`THe result is ${a} ${c} ${b}`);
    alert(`THe result is ${eval(`${a} ${c} ${b}`)}`);
}else{
    c = obj[c]
    console.log(`THe result is ${a} ${c} ${b}`);
    alert(`THe result is ${eval(`${a} ${c} ${b}`)}`);

}