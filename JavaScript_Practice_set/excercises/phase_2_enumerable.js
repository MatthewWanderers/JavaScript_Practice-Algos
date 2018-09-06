const NUMS = [1, 2, 3, 4, 5];

Array.prototype.myEach = function (func) {
  for (let i = 0; i < this.length; i++) {
    func(this[i]);
  }
};

// NUMS.myEach((num) => {
//   console.log(`square of ${num} is ${num * num}`);
// });

Array.prototype.myReduce = function (func, initialValue) {
  let arr = this;

  if (!initialValue) {
    initialValue = arr[0];
    arr = arr.slice(1);
  }

  let result = initialValue;
  arr.myEach(el => result = func(result, el));

  return result;
};
// console.log(NUMS.myReduce( (total, item) => total + item ));
