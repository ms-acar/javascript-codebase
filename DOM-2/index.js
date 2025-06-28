for(let i = 0; i<4 ; i++){
    const pTags = document.createElement("p");
    pTags.className = "pTag";
    pTags.style.fontSize = "4rem";
    pTags.style.color = "white";
    pTags.style.backgroundColor = "red";
    pTags.textContent = "lorem";
    document.body.append(pTags);
}

const allP = document.querySelector("p");

// for(let p of allP){
//     p.remove();
// }