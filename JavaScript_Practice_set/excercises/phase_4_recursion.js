function range(start,end) {
  if (start == end) {
    return [];
  }

  let arr = range(start, end - 1);
  arr.push(end - 1);
  return arr;
}
// console.log(`range(3, 10) = ${range(3, 10)}`);

function sumRec(numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  let lastNum = numbers[numbers.length -1];
  return sumRec(numbers.slice(0, numbers.length - 1)) + lastNum;
}

console.log(`sumRec([1, 3, 5]) = ${sumRec([1, 3, 5])}`);
