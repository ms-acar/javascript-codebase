let a = 5;
let b = a; // deger tipleri değişkendeki değere göre karşılaştırılır.

console.log("a="+a);
console.log("b="+b);
console.log("---------");

if(a==b && b==5){
    console.log("esittir");
}else{
    console.log("esit degildir");
}

let d1 = [1,2,3];
let d2 = [1,2,3]; //referans tipler değişkenin adreslerine göre karşılaştırılır.
console.log(d1,d2);
if(d1==d2){
    console.log("esittir");
}else{
    console.log("esit degildir");
}

let d3 = [4,5,6];
let d4 = d3;
let d5 = d4;

d5.push(7);
console.log(d3,d4,d5);