const repeatNumbers = function(data) {
  // Put your solution here

  // Create a function named repeatNumbers that will return a string with each of the given values repeated the appropriate number of times,
  return data.map(function(item) {
      // if there are multiple sets of values each set should be separated by a comma. 
      //If there is only one set of values then you should omit the comma.
    return item[0].toString().repeat(item[1]);

  });


};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));