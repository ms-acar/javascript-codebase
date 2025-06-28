const users = ["ali","ahmet","mehmet","yusuf"];

const getInfo = (name1,name2,...names) =>{
    console.log(name1);
    console.log(name2);
    console.log(...names);
}
getInfo(users[0],users[1],users[2],users[3]); //classic
getInfo(...users); //spreading

const paragraf = document.querySelectorAll("p");
[...paragraf].map(p => console.log(p));