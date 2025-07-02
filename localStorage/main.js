//DEFINE OBJECT/ARRAY

const cars = [
    {brand : "Ford", Model : "Focus"},
    {brand : "Opel", Model : "Astra"},
    {brand : "Skoda", Model : "Octavia"}
];

//STORE

localStorage.setItem("cars",JSON.stringify(cars));

//READ

const readArr = localStorage.getItem("cars");
console.log(JSON.parse(readArr));