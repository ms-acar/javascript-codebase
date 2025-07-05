//RECURSIVE:

// const factorial = sayi => {
//     if(sayi===0){
//         return 1;
//     }else{
//         return sayi*factorial(sayi-1);
//     }
// };

//STANDARD(FOR):

const factorial2 = sayi => {
    let fact = 1;
    if(sayi===0){
        return 1;
    }else{
    for(let i = 1; i<=sayi ; i++){
        fact = fact * i;
    }
    console.log(`${sayi}! = ${fact}`);
    }
};

factorial2(5);