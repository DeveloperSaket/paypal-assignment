export function current(list = []) {
    const length = list.length;
    if (length === 0) {
        return { list, pointer: -1 };
    }
    const indexPointer = (length > 2) ? 1 : 0;
    return indexPointer === 0 ? { list, pointer: indexPointer } : { list: list.slice(0, 3), pointer: indexPointer };
};

export function prev(list = [], currentIndexPointer) {
    const length = list.length;
    const indexPointer = currentIndexPointer - 1;
    if (length > 2) {
        let lst = [];
        switch (indexPointer) {
            case 0:
                lst = list.slice(indexPointer, indexPointer + 2);
                lst.unshift(list[length - 1]);
                return { list: lst, pointer: indexPointer };
            case -1:
                lst = list.slice(length - 2, length);
                lst.push(list[0]);
                return { list: lst, pointer: length - 1 };
            default:
                return { list: list.slice(indexPointer - 1, indexPointer + 2), pointer: indexPointer };
        }

    } else {

    }
}

export function next(list, currentIndexPointer) {
    const length = list.length;
    const indexPointer = currentIndexPointer + 1;
    if (length > 2) {
        let lst = [];
        switch (indexPointer) {
            case length - 1:
                lst = list.slice(length - 2, length);
                lst.push(list[0]);
                return { list: lst, pointer: indexPointer };
            case length:
                lst = list.slice(0, 2);
                lst.unshift(list[length - 1]);
                return { list: lst, pointer: 0 };
            default:
                return { list: list.slice(indexPointer - 1, indexPointer + 2), pointer: indexPointer };
        }

    } else {

    }
}

// export function prev(list = [], currentIndexPointer) {
//     const length = list.length;
//     const indexPointer = currentIndexPointer - 1;

//     if (indexPointer === -1) {
//         return false; // no change required
//     }
//     if (indexPointer === 0) {
//         return length < 2 ? { list, pointer: indexPointer } : { list: list.slice(0, 1), pointer: indexPointer };
//     } else if (length < 4) {
//         return { list, pointer: indexPointer };
//     } else if (length > indexPointer + 5) {
//         return { list: list.slice(length - 4, length - 1), pointer: indexPointer };
//     }
//     return { list: list.slice(indexPointer + 1, indexPointer + 4), pointer: indexPointer };
// }

// export function next(list, currentIndexPointer) {
//     const length = list.length;
//     const indexPointer = currentIndexPointer + 1;

//     if (indexPointer === length) {
//         return false; // no change required
//     }
//     if (indexPointer === length - 1) {
//         return length < 2 ? { list, pointer: indexPointer } : { list: list.slice(0, 1), pointer: indexPointer };
//     } else if (length < 4) {
//         return { list, pointer: indexPointer };
//     } else if (length > indexPointer + 5) {
//         return { list: list.slice(length - 4, length - 1), pointer: indexPointer };
//     }
//     return { list: list.slice(indexPointer + 1, indexPointer + 4), pointer: indexPointer };
// }
