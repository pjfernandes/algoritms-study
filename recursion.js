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
