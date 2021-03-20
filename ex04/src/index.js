
function sumFibonacci(num) {
    var a = 0;
    var b = 1;
    var c = 1;
    var rezultat = a;
    if (num > 0) {
        while (c <= num) {
            if (c % 2) {
                rezultat += b;
            }
            c = a + b;
            b += a;
            a = b - a;
        }
        return rezultat;
    } else {
        return 0;
    }

}
console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));
module.exports = sumFibonacci;
