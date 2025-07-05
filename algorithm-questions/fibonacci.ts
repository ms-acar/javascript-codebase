const fibonacci = sayi =>{
    const fib = [0,1]

    for(let i = 2; i<sayi ; i++){
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib;
}
console.log(fibonacci(5));