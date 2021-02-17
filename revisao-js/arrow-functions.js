function somaTudo (...nums){
    let soma=0
    for(let n of nums) soma += n
    return soma
}

let somaTudo2 = (...nums) => {
let soma = 0
for(let n of nums) soma += n
return soma
}