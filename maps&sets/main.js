//MAPS
const users = new Map();

users.set(1,"mehmet");
users.set("isim","ahmet");
users.set(true,"ali");

console.log(users);

let result = users.has(1);

console.log(result);

result = users.delete(1);

console.log(users.size);

// result = users.clear();

// console.log(users.size);

for(let i of users.keys()){
    console.log(i);
}

for(let i of users.values()){
    console.log(i);
}

for(let i of users.entries()){
    console.log(i);
}

for(let [key,value] of users){
    console.log([key,value]);
}

//SETS

const users2 = new Set();

// const users2 = new Set([1,2,3]); //constructor kullanımı

users2.add("ahmet");
users2.add(5776);
users2.add(false);

console.log(users2);

//array'e çevirme

const usersArr = [...users2];

console.log(usersArr);

users2.delete(5776); //eleman silme

console.log(users2);

console.log(users2.has("ahmet"));

for(let i of users2){
    console.log(i);
}