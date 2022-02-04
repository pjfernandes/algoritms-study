const bubbleSort = ((array) => {

  for (let j = 0; j< array.length; j++) {

    for (let i = 0; i < array.length - 1; i++) {
      let aux;
      if (array[i] > array[i+1]) {
        aux = array[i];
        array[i] = array[i+1];
        array[i+1] = aux;
      }
    }

  }
  return array;
});
