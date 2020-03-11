var result = [];

function count(n) {
    if (0 <= n <= 30000)
        for (let i = 1; i <= n; i++) {
            for (let j = i; j <= n; j++) {
                if (i != j) {
                    result.push("" + i + j + "");

                }
            }

        }
        // console.log("Combinations : ", result);
    return result.length;
}

console.log("Count of combinations : ", count(20000));