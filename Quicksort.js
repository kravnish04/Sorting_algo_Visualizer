function playquicksort() {
    if (progresschecker) return;
    progresschecker = true;
    
    const copy = [...array];
    const moves = [];
    quicksort(copy, 0, copy.length - 1, moves);
    animate(moves);
}

async function quicksort(array, low, high, moves) {
    if (low < high) {
        const pivotIndex = await hoare_partition(array, low, high, moves);
        await quicksort(array, low, pivotIndex - 1, moves);
        await quicksort(array, pivotIndex, high, moves);
    }
}

async function hoare_partition(array, low, high, moves) {
    const pivot = array[Math.floor((low + high) / 2)];
    let i = low;
    let j = high;

    while (i <= j) {
        while (array[i] < pivot) {
            moves.push({ indices: [i, i], type: "comp" });
            i++;
        }

        while (array[j] > pivot) {
            moves.push({ indices: [j, j], type: "comp" });
            j--;
        }

        if (i <= j) {
            moves.push({ indices: [i, j], type: "swap" });
            [array[i], array[j]] = [array[j], array[i]];
            i++;
            j--;
        }
    }

    return i;
}