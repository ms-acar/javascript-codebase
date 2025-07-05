const quickSort = (dizi) =>{
    if(dizi.length <2){
        return dizi;
    }
    let pivot = dizi[dizi.length-1];
    let leftSide = [];
    let rightSide = [];

    for(let i = 0; i<dizi.length-1; i++){
        if(dizi[i] < pivot){
            leftSide.push(dizi[i])
        }else{
            rightSide.push(dizi[i])
        }
    }
    return[...quickSort(leftSide),pivot,...quickSort(rightSide)];
}

const dizi = [65,67,43,76,12,87,55,73,44];

console.log(quickSort(dizi));