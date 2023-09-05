let name = 'Simon'
let chars = []

for(let i = 0; i < name.length; i++){
    chars.push(name[i])
}

chars.forEach(c => {console.log(c)})

chars = []
let eman = ""
for(let i = name.length-1; i >= 0; i--){
    eman += (name[i])
}

console.log(eman)

//chars.forEach(c => {console.log(c)})

let bw = chars.map(c =>{
    return c+c
})

console.log(bw)





let q = [1,5,12,22]

let sum = q.reduce((accumulator,currentValue) =>
 {
    console.log(accumulator, currentValue)
     return accumulator + currentValue
 }, 0  
)

console.log(sum)

let filter = q.filter(n => {
    return n !==5
})

console.log(filter)