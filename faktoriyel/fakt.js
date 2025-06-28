
let sayi = Number(prompt("Faktöriyel hesaplama için sayı giriniz:"));
let sonuc = fakt(sayi);

function fakt(sayi){
    let carpim = sayi;
    if(sayi == 0){
        carpim = 1;
        
    }else{
        for(let i = sayi-1 ; i >0 ;i--){
            carpim *= i;
        }
    }
    return carpim;
}

alert(sayi+"! =" +sonuc);
