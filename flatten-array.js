function flattenArray(a) {
    if (!Array.isArray(a)) {
        return [a];
    }

    const aFlattened = [];
    for (let element of a) {
        const elementFlattened = flattenArray(element);
        for (let elem of elementFlattened) {
            aFlattened.push(elem);
        }
    }
    return aFlattened;
}

const a = [
    1, 2, 6, 4, [1, 5, 4], 4, 5, [[1, 5], 45, [1, [15, [1, 3]]]]
];

const aFlattened = flattenArray(a);
console.log(aFlattened);