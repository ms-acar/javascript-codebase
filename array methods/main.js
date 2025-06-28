// ARROW METHODS
let sayilar = [11,43,56,7,12,78];

let tekSayi = sayilar.filter((sayi) => sayi % 2 != 0);
console.log(tekSayi);

tekSayi = sayilar.map((sayi) => {
    return sayi % 2 != 0;
});
console.log(tekSayi);

const ciftSayi = sayilar.filter((sayi) => sayi % 2 === 0);
console.log(ciftSayi); 


let ellidenKucuk = sayilar.find((sayi) => sayi<50);
console.log(ellidenKucuk);



const products = [
    {
        name: "TV",
        number: "15",
        price: "24000"
    },
        {
        name: "Computer",
        number: "30",
        price: "30000"
    },
        {
        name: "phone",
        number: "20",
        price: "20000"
    },
            {
        name: "printer",
        number: "40",
        price: "7000"
    }
];

let productsArr = products.map((product) => product.name);
console.log(productsArr);

let productsFiltered = products.filter((product) => product.price <=25000);
console.log(productsFiltered);

let productsName = products.filter((product) => product.price <=25000).map((product) => product.name);
console.log(productsName);

let productIndex = products.findIndex((product) => product.price <=20000);
console.log(productIndex);

const priceSum = products.reduce((baslangic,value)=> baslangic + (value.price*value.number),0);
console.log(priceSum);