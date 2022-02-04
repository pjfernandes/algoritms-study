const sequentialSearch = ((array, value) => {
  for (let i = 0; i < array.length; i++) {
    if (value === array[i]) {
      console.log(`${value} in ${i} position`);
      break;
    }
    else {
      continue;
    }
  }
});
/////////////////////////////////////////////////////////////
const binarySearch = ((array, value) => {

  let start = 0;
  let end = array.length;
  let m;

  while (start < end) {

    m = parseInt((start + end) / 2);

    if (array[m] > value) {
      end = m - 1;
    } else if (array[m] < value) {
      start = m + 1;
    } else {
      console.log(`Value found at ${m} position`);
      break;
    }
  }
});

let a = [1, 2, 3, 4, 10, 21, 23]
binarySearch(a, 21)
