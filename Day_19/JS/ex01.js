function fibonacci(n, a = 0, b = 1) {
    if (n <= 0 || n % 1!==0) {
        console.log("n phải là số nguyên dương");
        return;
    }
    console.log(a);
    if (n === 1) {
        return;
    }
    fibonacci(n - 1, b, a + b);
}
fibonacci(10);
