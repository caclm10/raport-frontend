export const getSortedIndex = (arr, key, keyName = 'id') => {
    let idx = 0
    for (const data of arr) {
        if (key < data[keyName]) {
            break;
        }
        idx++
    }

    return idx
}