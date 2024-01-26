 function sort(a) {
     const n = a.length;
     const array = [];

      //Initialize diagonal array
     for (let i = 0; i < 2 * n - 1; i++) {
         array.push([]);
     }

      //Collect elements from each diagonal parallel to the secondary diagonal
     for (let i = 0; i < n; i++) {
         for (let j = 0; j < n; j++) {
             array[i + j].push(a[i][j]);
         }
     }

      //Sort the elements within each diagonal
     array.forEach(array => array.sort((a, b) => a - b));

      //Put sorted elements back into the matrix
     for (let i = 0; i < n; i++) {
         for (let j = 0; j < n; j++) {
             a[i][j] = array[i + j].shift();                                                                                                                                                                                                                                                                                                                                                                               
         }
     }

     return a;
 }

  //Test the function
 const a = [
     [1, 3, 9, 4],
     [9, 5, 7, 7],
     [3, 6, 9, 7],
     [1, 2, 2, 2]
 ];

function transpose(matrix) {
    return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
}

const op = transpose(sort(a)); // Transpose the result matrix
op.forEach(column => console.log(column)); // Display the transposed result


