const array = [65,67,43,76,12,87,55,73,44];

const bubbleSort = (array) =>{
    for(let i = 0; i < array.length -1; i++){
        for(let j = 0; j < array.length -1; j++){
            if(array[j] > array[j+1]){
                const swap = array[j];
                array[j] = array[j+1]
                array[j+1] = swap;
            }
        }
    }
    return array;
}
console.log(bubbleSort(array));