const eventButton1 = document.querySelector("#eventButton1");
const eventButton2 = document.getElementById("eventButton2");

eventButton1.addEventListener("click",function(){
    document.querySelector(".card-title").textContent = "Changed Title";
    console.log("Title Changed");
});

eventButton2.addEventListener("click",function(){
    document.getElementById("eventPic").src = "images/tick.jpg";
    console.log("Picture Changed");
});

eventButton2.addEventListener("click",function(e){
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.target.textContent);
    console.log(e.target.className);
});
