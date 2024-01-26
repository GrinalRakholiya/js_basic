function splitArray(arr) {
    const n = arr.length;
    if (n % 2 !== 0) {
        console.log("Odd Array length!!!");
        return [];
    }

    const array1 = []; // to store the split arrays.
    const array2 = [];
    const occur = {}; //keeps track of the occurrences of each number in input array

    // Count occur of each number
    for (const num of arr) {
        if (occur[num]) { //num has already occurred at least once before.
            occur[num] += 1; 
        } else {
            occur[num] = 1; // Initialize if not exists
        }

        // Distribute numbers into array1 or array2 based on their lengths
        if (occur[num] <= 2) {
            if (array1.length <= array2.length) {
                array1[array1.length] = num;
            } else {
                array2[array2.length] = num;
            }
        }
    } 

    //  both  arrays have equal lengths
    if (array1.length === n / 2 && array2.length === n / 2) {
        return [array1, array2];
    } else {
        console.log("Unequal lengths or duplication");
        return [];
    }
}

let array = splitArray([2, 1, 2, 3, 3, 4]);
console.log(array);
