let vetor = [10,20,30] 

let obj = {
    nome: 'Maria',
    idade: 34,
    naturalidade: 'Franca/SP'
}

let [x,y,z] = vetor

console.log(x)
console.log(y)
console.log(z)

let obj2 = {
    marca: 'Volkswagen',
    modelo: 'Fusca',
    ano: 1969,
    cor: 'Preto',
}
let {modelo, ano} = obj2
console.log(modelo)
console.log(ano)

//Não dá certo: desestruturação parcial de vetor
let vet2 = ['laranja', 'maça', 'pera']
let [undefined, fruta2, undefined]
console.log(fruta2)