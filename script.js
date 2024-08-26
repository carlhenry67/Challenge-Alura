const textoInput = document.getElementById('texto');
const resultadoOutput = document.getElementById('resultado');
const btnCriptografar = document.getElementById('criptografar');
const btnDescriptografar = document.getElementById('descriptografar');   


// Algoritmo de criptografia simples (substituição de caracteres)
function criptografar(texto) {
  const alfabeto = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let textoCriptografado = '';
  for (let i = 0; i < texto.length; i++) {
    const indice = alfabeto.indexOf(texto[i]);
    if (indice !== -1) {
      const novoIndice = (indice + 13) % alfabeto.length;
      textoCriptografado += alfabeto[novoIndice];
    } else {
      textoCriptografado += texto[i];
    }
  }
  return textoCriptografado;
}

// Função para descriptografar (inversa da criptografia)
function descriptografar(texto) {
  const alfabeto = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let textoDescriptografado = '';
  for (let i = 0; i < texto.length; i++) {
    const indice = alfabeto.indexOf(texto[i]);
    if (indice !== -1) {
      const novoIndice = (indice - 13 + alfabeto.length) % alfabeto.length;
      textoDescriptografado += alfabeto[novoIndice];
    } else {
      textoDescriptografado += texto[i];
    }
  }
  return textoDescriptografado;
}

btnCriptografar.addEventListener('click', () => {
  const texto = textoInput.value;
  const textoCriptografado = criptografar(texto);
  resultadoOutput.value = textoCriptografado;
});

btnDescriptografar.addEventListener('click', () => {
  const texto = textoInput.value;
  const textoDescriptografado = descriptografar(texto);
  resultadoOutput.value = textoDescriptografado;
});