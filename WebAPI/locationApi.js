const x = document.getElementById("geo");

const btn = document.querySelector("#geobtn");

btn.addEventListener("click", () =>{
    try {
    navigator.geolocation.getCurrentPosition(showPosition);
  } catch(err) {
    x.innerHTML = err;
  }
})

const showPosition = (position) => {
  x.innerHTML = "Enlem: " + position.coords.latitude + 
  "<br>Boylam: " + position.coords.longitude;
};