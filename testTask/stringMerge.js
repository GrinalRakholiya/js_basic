function count(s, char) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == char) {
            count++;
        }
    }
    return count;
}

function merge(s1, s2) {
    let op = '';
    let i = 0, j = 0;

    while (i < s1.length && j < s2.length) {
        const c1 = s1[i]; //c1=char1
        const c2 = s2[j];
        const count1 = count(s1, c1);
        const count2 = count(s2, c2);

        if (count1 < count2 || (count1 == count2 && c1 < c2)) {
            op += c1;
            i++;
        } else {
            op += c2;
            j++;
        }
    }

    while (i < s1.length) {
        op += s1[i++];
    }

    while (j < s2.length) {
        op += s2[j++];
    }

    return op;
}

console.log(merge("dce", "cccbd")); 
console.log(merge("super", "tower")); 
