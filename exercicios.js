// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = (Number(prompt("Digite a altura do retângulo: ")))
  const largura = (Number(prompt("Digite a largura do retângulo: ")))

  console.log(altura * largura)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = (Number(prompt("Digite o ano atual: ")))
  const anoDeNascimento = (Number(prompt("Digite o seu ano de nascimento")))

  console.log(anoAtual - anoDeNascimento)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const imc = peso / (altura * altura)
  return imc.toFixed(1)

}



// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let nome = prompt("Digite seu nome: ")
  let idade = Number(prompt("Digite sua idade: "))
  let email = prompt("Digite seu email: ")

  console.log("Meu nome é " + nome + ", tenho " + idade + " anos, e o meu email é " + email + ".") 
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let cor1 = prompt("Digite sua cor favorita")
  let cor2 = prompt("Digite sua segunda cor favorita")
  let cor3 = prompt("Digite sua terceira cor favorita")
  
  console.log([cor1, cor2, cor3])

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()

}
  const string1 = "oi"
  const resultado1 = retornaStringEmMaiuscula(string1)
  console.log(resultado1)

  const string2 = "bAnAnA"
  const resultado2 = retornaStringEmMaiuscula(string2)
  console.log(resultado2)


// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const qntIngressos = custo / valorIngresso
  return qntIngressos

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const stringCheck = string1 > string2
  return stringCheck

}


// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  const arrayRetornaPrimeiro = array
  return arrayRetornaPrimeiro[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const arrayRetornaUltimo = array
  return arrayRetornaUltimo[array.length -1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const primeiroElemento = array [0]
  const ultimoElemento = array[array.length - 1]

  array[0] = ultimoElemento
  array[array.length - 1] = primeiroElemento

  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const desconsiderandoCase = string1.toLowerCase() === string2.toLowerCase()
  return desconsiderandoCase

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Digite o ano atual:"))
  const anoNascimento = Number(prompt("Digite o ano de nascimento:"))
  const anoEmissaoRG = Number(prompt("Digite o ano de emissão do RG:"))

  const idade = anoAtual - anoNascimento
  const tempoDesdeEmissao = anoAtual - anoEmissaoRG

  const precisaRenovar = (idade <= 20 && tempoDesdeEmissao >= 5)
    || (idade > 20 && idade < 50 && tempoDesdeEmissao >= 10)
    || (idade >= 50 && tempoDesdeEmissao >= 15)

  console.log(precisaRenovar);
}


// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const multiploDe400 = ano % 400 === 0;
  const multiploDe4 = ano % 4 === 0;
  const multiploDe100 = ano % 100 === 0;

  return multiploDe400 || (multiploDe4 && !multiploDe100);
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

    const idade = prompt("Você tem mais de 18 anos? (sim ou nao)");
    const ensinoMedio = prompt("Você possui ensino médio completo? (sim ou nao)");
    const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso? (sim ou nao)");
  
    const inscricaoValida = idade.toLowerCase() === "sim" && ensinoMedio.toLowerCase() === "sim" && disponibilidade.toLowerCase() === "sim";
  
    console.log(inscricaoValida);
  
}
  
