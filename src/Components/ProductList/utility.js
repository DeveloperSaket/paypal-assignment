export function current(list = []) {
    const length = list.length();
    if (length === 0) {
        return { list, pointer: -1 };
    }
    const indexPointer = (length > 2) ? 1 : 0;

    return indexPointer === 0 ? { list, pointer: indexPointer } : { list: list.slice(0, 2), pointer: indexPointer };
}

export function prev(list = [], indexPointer) {
    const length = list.length();
    const indexPointer = indexPointer - 1;

    if (indexPointer === -1) {
        return false; // no change required
    }
    if (indexPointer === 0) {
        return length < 2 ? { list, pointer: indexPointer } : { list: list.slice(0, 1), pointer: indexPointer };
    } else if (length < 4) {
        return { list, pointer: indexPointer };
    } else if (length > indexPointer + 5) {
        return { list: list.slice(length - 4, length - 1), pointer: indexPointer };
    }
    return { list: list.slice(indexPointer + 1, indexPointer + 4), pointer: indexPointer };
}

export function next(list, indexPointer) {
    const length = list.length();
    const indexPointer = indexPointer + 1;

    if (indexPointer === length) {
        return false; // no change required
    }
    if (indexPointer === length - 1) {
        return length < 2 ? { list, pointer: indexPointer } : { list: list.slice(0, 1), pointer: indexPointer };
    } else if (length < 4) {
        return { list, pointer: indexPointer };
    } else if (length > indexPointer + 5) {
        return { list: list.slice(length - 4, length - 1), pointer: indexPointer };
    }
    return { list: list.slice(indexPointer + 1, indexPointer + 4), pointer: indexPointer };
}

// export function prev(list = [], indexStart) {
//     const length = list.length();
//     if (length < 4) {
//         return list;
//     } else if (length > indexStart + 5) {
//         return list.slice(length - 4, length - 1);
//     }
//     return list.slice(indexStart + 1, indexStart + 4);
// }

// export function next(list, indexStart) {
//     const length = list.length();
//     if (length < 4) {
//         return list;
//     } else if (length > indexStart + 5) {
//         return list.slice(length - 4, length - 1);
//     }
//     return list.slice(indexStart + 1, indexStart + 4);
// }