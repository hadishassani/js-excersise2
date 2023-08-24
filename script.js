function number(n) {
    let a = 0;
    for (let i = 1; i <= n; i++) {
        a = a * 10 + n % 10;
        n = Math.floor(n / 10);
    }
    return a;
}
console.log(number(76));
