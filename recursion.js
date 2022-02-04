const factorial = ((n) => {
  let prod = 1;
  for (let i = n; i > 0; i--) {
    prod = prod * i;
  }
  return prod;
});

const factorialRec = ((n) => {
  if (n == 1 || n == 0) {
    return 1;
  } else {
    return n * factorialRec(n-1);
  }
});

const fibonacci = ((n) => {
  if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  } else {
    return fibonacci(n-1) + fibonacci(n-2);
  }
});
