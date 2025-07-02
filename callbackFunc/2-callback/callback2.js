//örnek 1
const login = (isim,callback) =>{
    setTimeout(()=>{
        callback(isim);
    },2000);
}
login("ahmet",(sonuc) =>{
    console.log("isim: " + sonuc);
})

//örnek 2

const ogrenciBilgi = (bolum, callback) => {
   let bilgi = bolum.toUpperCase();
   callback(bilgi);
}

ogrenciBilgi("bilgisayar mühendisliği", (sonuc) => {
   console.log("Bölüm: " + sonuc);
});

//örnek 3

const topla = (sayi1,sayi2,callback) => {
  let sonuc = sayi1 + sayi2;
  callback(sonuc);
}

topla(3, 7, (sonuc) => {
  console.log("Toplam: " + sonuc);
});

//örnek 4

const selamVer = (isim, callback) => {
  console.log("Selam veriliyor...");
  callback(isim);
}

const yazdir = (isim) => {
  console.log("Merhaba " + isim);
}

selamVer("Ali", yazdir);

