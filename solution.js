const foo = (intervals) => {
  const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);

  const initialInterval = [sortedIntervals.shift()];
  
  const outputIntervals = sortedIntervals.reduce((previous, current) => {
    previous[previous.length - 1][1] < current[0]
      ? previous.push(current)
      : (previous[previous.length - 1][1] = Math.max(
          previous[previous.length - 1][1],
          current[1]
        ));

    return previous;
    
  }, initialInterval);

  return outputIntervals;
};

console.log(foo([[0, 3], [6, 10]])) // Expected Output : [[0, 3], [6, 10]]
console.log(foo([[0, 5], [3, 10]])) // Expected Output : [[0, 10]]
console.log(foo([[0, 5], [2, 4]]))  // Expected Output : [[0, 5]]
console.log(foo([[7, 8], [3, 6], [2, 4]]))  // Expected Output : [[2, 6], [7, 8]]
console.log(foo([[3, 6], [3, 4], [15, 20], [16, 17], [1, 4], [6, 10], [3, 6]])) // Expected Output : [[1, 10], [15, 20]]
