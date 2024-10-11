function playselectionsort() {

    if(progresschecker)
   return;
progresschecker=true;

    const copy = [...array];
    const moves = selectionsort(copy);
    animate(moves);
}
function selectionsort(array) {
    const moves = [];

    for (let i = 0; i < array.length ; i++) {
        let minIndex = i;

        for (let j = i + 1; j < array.length; j++) {
            moves.push({ indices: [minIndex, j], type: "comp" });

            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            moves.push({ indices: [minIndex, i], type: "swap" });
            [array[i], array[minIndex]] = [array[minIndex], array[i]];
        }
    }

    return moves;
}