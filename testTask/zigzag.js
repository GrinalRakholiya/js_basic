function zz(num) {
    const result = [];

    for (let i = 0; i < num.length - 2; i++) {
        const x =  num[i];
        const y = num[i + 1];
        const z = num[i + 2];

        if ((x < y && y > z) || (x > y && y < z)) {
            result.push(1); 
        } else {
            result.push(0); 
        }
    }

    return result;
}

console.log(zz([1, 2, 1, 3, 4]));           
console.log(zz([1, 2, 3, 4]));             
console.log(zz([1000000000, 1000000000, 1000000000])); 
