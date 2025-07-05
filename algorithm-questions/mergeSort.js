const mergeSort = dizi =>{
    if(dizi.length < 2){
        return dizi;
    }

    const mid = Math.floor(dizi.length / 2);
    const leftSide = dizi.slice(0,mid);
    const rightSide = dizi.slice(mid);

    return merge(mergeSort(leftSide),mergeSort(rightSide));
}

const merge = (leftSide,rightSide) => {
    const sorted = [];
    while(leftSide.length && rightSide.length){
        if(leftSide[0] <= rightSide[0]){
            sorted.push(leftSide.shift())
        }else{
            sorted.push(rightSide.shift())
        }
    }
    return[...sorted,...leftSide,...rightSide];
}

const dizi = [2,56,42,9,-22,-3];

console.log(mergeSort(dizi));
