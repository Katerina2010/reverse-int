module.exports = function reverse (n) {
    let x = Math.abs(n).toString()
    let arr = []
    for (let i = 0; i < x.length; i++) {
        arr.unshift(x[i])
    }
    let str = arr.join("")
    return Number(str)
}
