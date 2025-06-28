let metin = prompt("metin giriniz.");
let harf = prompt("bulunacak harfi giriniz.");
let sonuc = bul(harf);

function bul(harf){
    let toplam = 0;
    for(let i = 0; i<metin.length;i++){
        if(harf.toLowerCase() == metin.charAt(i).toLowerCase()){
            toplam++;
         }
    }
    return toplam;
}
alert("metinde toplam "+sonuc+" adet " +harf+" harfi vardır.");
