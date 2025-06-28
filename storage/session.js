// Session Storage

//değer ekleme
sessionStorage.setItem("123"/*key*/,"ahmet"/*value*/);
sessionStorage.setItem("456"/*key*/,"mehmet"/*value*/);
sessionStorage.setItem("789"/*key*/,"ali"/*value*/);

//değer silme
//sessionStorage.removeItem("456");
//hepsini silme
//sessionStorage.clear();

let value = sessionStorage.getItem("789");
alert(value);
console.log(value);

let names = ["Yasin","Adem","Ayşe","Enes"];

sessionStorage.setItem("names", JSON.stringify(names));

let value2 = JSON.parse(sessionStorage.getItem("names"));
alert(value2);
console.log(value2);
console.log(typeof value2);