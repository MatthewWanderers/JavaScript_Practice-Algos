Array.prototype.uniq = function() {
  let uniqueArray = [];

  for (let i = 0; i < this.length; i++){
    if (uniqueArray.indexOf(this[i]) === -1) {
      uniqueArray.push(this[i]);
    }
  }
  return uniqueArray;
};

Array.prototype.uniq2 = function() {
  let uniqueArray = [];

  this.forEach(function (el) {
    if (!uniqueArray.includes(el)) {
      uniqueArray.push(el);
    }
  });
  return uniqueArray;
};

// console.log([1, 1, 2, 2, 3, 3, 4, 4, 5, 5].uniq());
// console.log([1, 1, 2, 2, 3, 3, 4, 4, 5, 5].uniq2());

Array.prototype.twoSum = function() {
  const pairs = [];

  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        pairs.push([i, j]);
      }
    }
  }
  return pairs;
};

Array.prototype.twoSum2 = function() {
  let pairs = [];
  const indexHash = {};

  this.forEach((el,idx) => {
    if (indexHash[el * -1]) {
      let newPair = [indexHash[el * -1], idx];

      pairs.push(newPair);
    }
    indexHash[el] ? indexHash[el].push(idx) : indexHash[el] = idx;
    console.log(indexHash);
  });

  return pairs;
};

// console.log([-1, 0, 2, -2, 1].twoSum());
// console.log([-1, 0, 2, -2, 1].twoSum2());

Array.prototype.transpose = function() {
  const columns = Array.from(
    { length: this[0].length },
    () => Array.from({ length: this.length})
  );

  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this[i].length; j++) {
      columns[j][i] = this[i][j];
    }
  }
  return columns;
};

// console.log([[0, 1, 2], [3, 4, 5], [6, 7, 8]].transpose());
