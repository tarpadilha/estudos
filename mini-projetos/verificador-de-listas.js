let lista = ['comida', 'azulejo', 3, 4, 5, 'vidas secas', 'certo', 15, 'tarcisio', 'trabalho', 152, 'dedicacao']
let busca = 'trabalho'
let indice = 0

	//Fórmula com while

/*
while (lista[indice] != busca) { 
	console.log(`Não é o índice ${indice}`)  //Apagando essa linha fica a forma mais resumida
	indice++
	}

console.log(`O nome '${lista[indice]}' está no índice ${indice} do vetor`)
*/

	//Forma resumida com for

/*
let busca = ''

for (busca = 'trabalho', posicao = 0 ; lista[posicao] != busca ; posicao++ ) {	
	console.log(`A posição é a de número ${posicao} e o nome é ${lista[posicao]}.`)
}

console.log(`ENCONTRADO! - A palavra ${busca} está na posição de número ${posicao}.`)
*/


	//Fórmula forin - Despeja todos os valores?

/*
for (busca in lista[indice]) {
	console.log(`O nome '${lista[indice]}' está no índice ${indice}.`)
	indice++
}
*/

console.log(`A palavra ${busca} está na posição número ${lista.indexOf(busca)}.`) //Forma resumida em função