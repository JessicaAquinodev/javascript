const nome = 'Jéssica'
const concatenacao = "Olá " + nome + "!"
const templace = `
Olá 
${nome}!`
console.log(concatenacao, templace) // Templace tem função de permitir a quebra de linha


//Expressões..
console.log(`1 + 1 = ${1 + 1}`)
const up = texto =>texto.toUpperCase()
console.log(`Ei.. ${up('cuidado')}!`)