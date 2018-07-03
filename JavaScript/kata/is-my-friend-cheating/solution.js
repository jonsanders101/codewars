export default function removeNb(n) {
    const result = [];
    const sumOfSequence = ((n + 1) / 2) * n;

    for (let a = 1; a <= n; a++) {
        const b = (sumOfSequence - a ) / (a + 1);
        if ((b % 1 === 0) && (b <= n)) {
            result.push([a, b]);
        }
    };
    return result;
};