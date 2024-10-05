//1.sum of two numbers passing values as arguments
function add(a,b){
    console.log(a+b)
}
add(20,30)
//2.subtract(a,b) and results of subtracting b from a
function sub(a,b){
    console.log(b-a)
}
sub(500,200)
//3.multiply(a,b)
function mul(a,b){
    console.log(a*b)
}
mul(40,80)
//4.divide(a,b)where b=0
function div(a, b) {
    if (b === 0) {
        console.log("cannot divide by zero");
    } else {
        console.log(a / b);
    }
}
div(2, 0);
