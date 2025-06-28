
let bakiye = Math.floor(Math.random() * 10000) + 1;
let yenisatir = "\r\n"

let cikti = "1-bakiye görüntüleme" + yenisatir +
"2-para çekme" + yenisatir +
"3-para yatırma" + yenisatir +
"4-çıkış" + yenisatir +
"Lütfen işlem seçiniz";

let secim = prompt(cikti)
while (secim !== "4") {
    

    switch(secim){
        case "1":
            alert("bakiyeniz" + bakiye);
            break;
        case "2":
            let cikar = Number(prompt("Ne kadar para çekmek istiyorsunuz?"));
            if (cikar <= 0) {
                alert("Geçerli bir tutar girmediniz.");
            } else if (cikar > bakiye) {
                alert("Yetersiz bakiye!");
            } else {
                bakiye -= cikar;
                alert(cikar + " TL çekildi. Güncel bakiyeniz: " + bakiye);
            }
            break;
        case "3":
            let ekle = Number(prompt("Ne kadar para eklemek istiyorsunuz?"));
            if (ekle == null || ekle <= 0) {
                alert("Geçerli bir tutar girmediniz.");
            } else {
                bakiye += ekle;
                alert(ekle + " TL eklendi. Güncel bakiyeniz: " + bakiye);
            }
            break;
        default:
            // console.log("Geçerli bir seçim yapınız.");
            // const devam = prompt("Devam etmek istiyor musunuz? (evet / hayır)")?.toLowerCase();
            // if (devam !== "evet") {
            //     secim = "4";
            //     alert("Program sonlandırıldı.");
            // }
    }
}