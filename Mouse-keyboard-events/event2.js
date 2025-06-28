// window.addEventListener("load",run);
// function run(){
//     console.log("sayfa yüklendi")
// };
const cardHeader = document.querySelector(".card-header");
// const cardBody = document.querySelector(".card-body");

// cardHeader.addEventListener("mouseenter",run2);
// cardBody.addEventListener("mouseleave",run2);

// function run2(e){
//     console.log(e.type);
// }

// document.addEventListener("keydown",run3);

// function run3(e){
//     if(e.keyCode == 116){
//         alert("sayfa yenileme engellendi");
//     }
//     e.preventDefault(); //sayfayı yenilemeden yap
// }
const input = document.getElementById("#sorgula");

input.addEventListener("keyup",run);

function run(e){
    cardHeader.textContent = e.target.value;
}
