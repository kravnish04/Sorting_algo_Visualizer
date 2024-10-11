// Merge Sort Visualization

function playmergeSort() {
    if (progresschecker)
    {  
        return;
    }
    progresschecker = true;
    const copy = [...array];
    const moves = [];
    mergeSort(copy, 0, copy.length - 1, moves);
    console.log("yehhh moves array animation k liye"); 
    for(let i=0;i<moves.length;i++)
    {
        console.log(moves[i].indices);
    }
   console.log("printing sorted array") 
    for(let i=0;i<copy.length;i++)
    {
        console.log(copy[i]);
    }
    animate(moves);
}

function mergeSort(array, start, end, moves) {
    if (start < end) {
        const mid = Math.floor((start + end) / 2);
        mergeSort(array, start, mid, moves);
        mergeSort(array, mid + 1, end, moves);
        merge(array, start, mid, end, moves);
    }
}

function merge(array, start, mid, end, moves) {
    const leftArray = array.slice(start, mid + 1);
    const rightArray = array.slice(mid + 1, end + 1);

    let i = 0,  j = 0, k = start;

    while (i < leftArray.length && j < rightArray.length) {
       //moves.push({ indices: [i, j], type: "comp" });

        if (leftArray[i] <= rightArray[j]) {
            moves.push({ indices: [leftArray[i], k], type: "fix" });
            array[k] = leftArray[i];
            i++;
        } 
       
        else 
        {
            moves.push({ indices: [rightArray[j], k], type: "fix" });
            array[k] = rightArray[j];
            j++;
        }
        k++;
    }

    while (i < leftArray.length) {
        moves.push({ indices: [leftArray[i], k], type: "fix" });
        array[k] = leftArray[i];
        i++;
        k++;
    }

    while (j < rightArray.length) {
        moves.push({ indices: [rightArray[j], k], type: "fix" });
        array[k] = rightArray[j];
        j++;
        k++;
    }
}