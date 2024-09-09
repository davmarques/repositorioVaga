function contarLetraA(palavra) {
  let contador = 0;

  for (let i = 0; i < palavra.length; i++) {
    if (palavra[i] === "a" || palavra[i] === "A") {
      contador++;
    }
  }

  if (contador > 0) {
    console.log(`A letra 'a' aparece ${contador} vez(es) na string.`);
  } else {
    console.log(`A letra 'a' não aparece na string.`);
  }
}

contarLetraA("Quantas letras A tem nesta string?");