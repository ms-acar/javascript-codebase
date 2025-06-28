

let kilo = Number(prompt("kilonuzu girniz"));
let boy = Number(prompt("Boyunuzu giriniz"));

let sonuc = kilo/(boy^2);

if(sonuc<=18.5){
    console.log("ideal kilonun altında");
}
else if(sonuc>18.5 && sonuc<=25){
    console.log("ideal kiloda");
}
else if(sonuc>25 && sonuc<=30){
    console.log("ideal kilonun üstünde");
}
else if(sonuc>30 && sonuc<=40){
    console.log("ideal kilonun çok üstünde");
}else if(sonuc>40){
    console.log("ideal kilonun aşırı üstünde");
}