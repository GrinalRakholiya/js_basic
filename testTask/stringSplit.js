const str = "xzxzx";

function splitting(str) {
    const n = str.length;
    let count = 0;

    for (let i = 1; i < n ; i++) {
        for (let j = i + 1; j < n; j++) {
            const a = str.substring(0, i);
            const b = str.substring(i, j);
            const c = str.substring(j);

            if (a + b !== b + c && b + c !== c + a && c + a !== a + b) {               
                console.log(`Combination ${count}: ${a} ${b} ${c}`);
                count++;
            }}}
    return count;
}
const totalCount = splitting(str);
console.log("Total Count:", totalCount);