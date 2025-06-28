// Local Storage

//değer ekleme
localStorage.setItem("drink1"/*key*/,"tea"/*value*/);
localStorage.setItem("drink2"/*key*/,"coffee"/*value*/);
localStorage.setItem("drink3"/*key*/,"coke"/*value*/);

//değer silme
//localStorage.removeItem("drink1");
//hepsini silme
//localStorage.clear();

let value = localStorage.getItem("drink2");
alert(value);
console.log(value);

let drinks = ["tea","coffee","coke","chocolate"];

localStorage.setItem("drinks", JSON.stringify(drinks));

let value2 = JSON.parse(localStorage.getItem("drinks"));
alert(value2);
console.log(value2);
console.log(typeof value2);