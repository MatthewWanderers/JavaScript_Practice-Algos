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

// console.log(`sumRec([1, 3, 5]) = ${sumRec([1, 3, 5])}`);

function sumIter(numbers) {
  let sum = 0;

  numbers.forEach(function (number) {
    sum += number;
  });
  return sum;
}
// console.log(`sumIter([1, 3, 5]) = ${sumIter([1, 3, 5])}`);
// console.log([1,3,5].reduce((acc, el) => acc + el));

function exp1(base, exponent) {
  return exponent === 0 ? 1 : (base * exp1(base, exponent - 1));
}

// console.log(`exp1(2, 4) = ${exp1(2, 4)}`);

function exp2(base, exponent) {
  if (exponent === 0) {
    return 1;
  }

  if (exponent % 2 === 0) {
    let subAnswer = exp2(base, exponent / 2);
    return subAnswer * subAnswer;
  } else {
    let subAnswer = exp2(base, (exponent -1) / 2);
    return subAnswer * subAnswer * base;
  }
}

// console.log(`exp2(2, 4) =  ${exp2(2, 4)}`);
// console.log(`exp2(2, 5) =  ${exp2(2, 5)}`);
