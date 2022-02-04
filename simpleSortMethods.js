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
///////////////////////////////////////////////////////////////
const selectionSort = ((array) => {

  for (let i = 0; i < array.length; i++) {

    let minIndex = i;
    let aux;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minValue = array[j];
        minIndex = j;
      }
    }

    aux = array[i];
    array[i] = minValue;
    array[minIndex] = aux;
  }

  return array;
});
