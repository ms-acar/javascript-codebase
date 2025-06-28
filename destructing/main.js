//Array kullanımı

const [productName,price] = ["Printer",7000];

console.log(productName,price);

//Object kullanımı

const product = {   
    product1Name : "product1",
    productPrice : "34000",
    productColor : "green"
};

// const {product1Name,productPrice,productColor} = product; //destructor 1
// console.log(productPrice);

const {product1Name,productPrice,productColor:color} = product; //destructor 2
console.log(color);

//fonksiyon kullanımı

const products = (value) => {
    console.log(value);
};

// const productName = ({product1Name}) => {
//     console.log(product1Name);
// };

// products = ({
//     product1Name : "product1",
//     productPrice : "34000",
//     productColor : "green"
// });

const product2 = {
    brand : "brand1",
    model : {
        old : ["model1","model2","model3"],
        new : ["model4","model5","model6"]
    }
}
const {model : { new : [red , ...black]}} = product2;

console.log(black);

//obj to array

const product3 = {
    brand : "brand1",
    model : "model1",
    color : "white"
}

for(let [key,value] of Object.entries(product3)){
    console.log(key,value);
}
for(let [key,value] of Object.values(product3)){
    console.log(key,value);
}