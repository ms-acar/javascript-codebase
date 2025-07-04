const searchBtn = document.getElementById("searchbtn");
const countryInput = document.getElementById("countryInput");
const result = document.querySelector(".result");

searchBtn.addEventListener("click", ()=>{
    let countryName = countryInput.value;
    console.log(countryName);

    let url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

    fetch(url)
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        result.innerHTML = `
        <img src = "${data[0].flags.svg}" class = "flagImg"/>
        <h2>${data[0].name.common}</h2>
        <div className = "container">
            <div class="dataContainer">
                <h4>Başkent:</h4>
                <span>${data[0].capital[0]}</span>
            </div>
        </div>
        <div className = "container">
            <div class="dataContainer">
                <h4>Kıta:</h4>
                <span>${data[0].continents[0]}</span>
            </div>
        </div>
        <div className = "container">
            <div class="dataContainer">
                <h4>Nüfus:</h4>
                <span>${data[0].population}</span>
            </div>
        </div>
        <div className = "container">
            <div class="dataContainer">
                <h4>Para Birimi:</h4>
                <span>${data[0].currencies[0]}</span>
            </div>
        </div>
        `
    })
});



