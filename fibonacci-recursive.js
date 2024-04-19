// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]
/* 
function fibonacci(n) {
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
const fiboElement = fibonacci(6);
console.log(fiboElement);

*/


function fibonacciSeries(n) {
    if (n == 0) {
        return [0];
    }
    if (n == 1) {
        return [0, 1];
    }
    const fibo = fibonacciSeries(n - 1);
    fibo[n] = fibo[n - 1] + fibo[n - 2];
    return fibo;
}
const fiboSeries = fibonacciSeries(13);
console.log(fiboSeries);