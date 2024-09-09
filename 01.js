function fibonacci(num) {
  if (num === 0 || num === 1) {
    return true;
  }

  let a = 0;
  let b = 1;
  let prox = a + b;

  while (prox <= num) {
    if (prox === num) {
      return true;
    }

    a = b;
    b = prox;
    prox = a + b;
  }
  return false;
}

function checarFibonacci(num) {
  if (fibonacci(num)) {
    console.log(`${num} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`${num} não pertence à uma sequencia de Fibonacci.`);
  }
}

checarFibonacci(21);
checarFibonacci(22);
