let sum = 0
for (let i=2; i < process.argv.length; i++) {
    let number = Number(process.argv[i])
    sum += number
}
console.log(sum)