const header = document.querySelector(".header");
const content = document.querySelector(".content");
const button = document.querySelector(".load-btn");

const printResponse = () =>{
    const request = new XMLHttpRequest();

    request.open("GET","https://api.quotable.io/random");
    request.send();

    request.addEventListener("load", ()=>{
        const info = JSON.parse(request.responseText);
        header.innerText = info.author;
        content.innerText = info.content;
    });
};

printResponse();

button.addEventListener("click",printResponse);

