function pingPong(n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("pingPong");
        } else if (i % 3 === 0) {
            result.push("ping");
        } else if (i % 5 === 0) {
            result.push("pong");
        } else {
            result.push(i.toString());
        }
    }
    return result;
}
console.log(pingPong(15));