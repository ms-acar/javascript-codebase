const dizi = [12,56,4,23,76,24,8,92];

const insertionSort = (dizi) =>{
    for(let i = 1; i<dizi.length; i++){
        let current = dizi[i];
        let j = i-1;

        while(j>=0 && dizi[j]>current){
        dizi[j+1] = dizi[j];
        j--;
    }
    dizi[j+1] = current;
    }
    return dizi;
}
let result = insertionSort(dizi);
console.log(result);