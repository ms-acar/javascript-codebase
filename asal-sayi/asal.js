let sayi = Number(prompt("Asallık kontrolü için sayı giriniz:"));

let sonuc = true;
for(let i = 2; i<=Math.floor(sayi/2) ; i++){
    if(sayi%i==0){
        sonuc=false;
        break;
    }
}
if(sonuc){
    alert(sayi + " asaldir")
}else{
    alert(sayi + " asal değildir")
}