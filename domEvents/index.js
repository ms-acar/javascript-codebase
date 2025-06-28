const buton1 = document.querySelector(".buton1");

const input = document.querySelector("#input");

buton1.addEventListener("click", e =>{
    console.log("butona tıklandı");
    console.log("buton html etiketi : ",e.target);
});

input.addEventListener("keypress", e =>{
    console.log(e,e.target);
})