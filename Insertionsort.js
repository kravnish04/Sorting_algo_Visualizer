// Insertion Sort Function
function InsertionSort(array) {
    const moves = [];

    for (let i = 1; i < array.length; i++) {
        let j = i;
        moves.push({ indices: [j - 1, j], type: "comp" });

        while (j > 0 && array[j - 1] > array[j]) {
            moves.push({ indices: [j - 1, j], type: "swap" });
            [array[j - 1], array[j]] = [array[j], array[j - 1]];
            j--;
            moves.push({ indices: [j - 1, j], type: "comp" });
        }
    }

    return moves;
}

function playInsertionSort() {

    if(progresschecker)
   return;
progresschecker=true;

    const copy = [...array];
    const moves = InsertionSort(copy);
    animate(moves);
}