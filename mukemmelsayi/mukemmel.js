let sayi = Number(prompt("sayı giriniz"));
kontrol(sayi);

function kontrol(sayi){
    for(let i=2;i<sayi/2;i++){
        let toplam =0;
        if(sayi%i==0){
            toplam+=i;
        }
    }
    
}