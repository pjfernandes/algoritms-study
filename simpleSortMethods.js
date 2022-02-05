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

  for (let j = 0; j < array.length; j++) {
    let minIndex = j;
    let aux;
    for (let i = j + 1; i < array.length; i++) {
      if (array[i] < array[minIndex]) {
        minIndex = i;
      }
    }

    aux = array[j];
    array[j] = array[minIndex];
    array[minIndex] = aux;
  }

  return array;
});
////////////////////////////////////////////////////////////
const insertionSort  = ((array) => {

  let x;
  for (let i = 1; i < array.length; i++) {
    x = array[i];
    for (let j = i-1; j >= 0 && array[j] > x; j--) {
      array[j + 1] = array[j];
      array[j] = x;
    }
  }
  return array;
});
