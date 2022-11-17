const nome_cartao = 'Leticia'
const numero_cartao = 123
const cod_cartao = 1234

function validacao(nome, numero, cod) {
  const nome_correto = nome === nome_cartao;
  if(nome_correto){
    console.log('Nome Correto')
  } else{
    console.log('Nome incorreto')
  }
  const numero_correto = numero === numero_cartao;
  if(numero_correto){
    console.log('Numero Correto')
  } else{
    console.log('Numero Incorreto')
  }
  const cod_correto = cod === cod_cartao;
  if(cod_correto){
    console.log('Codigo Correto')
  } else{
    console.log('Codigo Incorreto')
  }
  const Validacao_todos_dados = cod_correto && nome_correto && numero_correto;
  return Validacao_todos_dados;
}


const validar_dados = validacao('Leticia', 123, 1234)
console.log(validar_dados)
