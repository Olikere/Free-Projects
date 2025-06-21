function multiplesOf3Or5(number) {
  let total = 0;

  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      total += i;
    }
  }

  return total;
}

console.log(multiplesOf3Or5(1000));
