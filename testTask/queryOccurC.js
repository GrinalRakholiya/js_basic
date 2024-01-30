function occur(ar, queries) {
    let op = [];
    let q,i,j,k;
    for (q of queries) {
        let count = 0;
        for (i = 0; i < ar.length - 2; i++) {
            if (ar[i] == q[0]) {
                for (j = i + 1; j < ar.length - 1; j++) {
                    if (ar[j] == q[1]) {
                        for (k = j + 1; k < ar.length; k++) {
                            if (ar[k] == q[2]) {
                                count++;
                            }
                        }
                    }
                }
            }
        }
        op.push(count);
    }
    return op;
}

console.log(occur([1, 2, 3, 4, 5], [[1, 2, 4], [2, 4, 3], [1, 1, 1]]));  
console.log(occur([1, 2, 2, 1, 2, 1, 2], [[1, 1, 2], [1, 2, 1]]));      
console.log(occur([1, 1, 1, 1], [[1, 1, 1]]));                          
