const url = "https://api.openweathermap.org/data/2.5/";
const key = "a01ff81242fd8fcf61b81bf132892175";

const searchEvent = (e) => {
    if (e.code === "Enter") {
        const city = e.target.value;
        result(city);
    }
};

document.getElementById("cityInput").addEventListener("keypress", searchEvent);

const result = (city) => {
    let api = `${url}weather?q=${city}&appid=${key}&units=metric&lang=tr`;
    fetch(api)
        .then(response => response.json())
        .then(showResult)
        // .catch(err => console.error("Hata:", err));
};

const showResult = (data) => {
    if (data.cod !== 200) {
        console.error("Hata:", data.message);
        return;
    }
    console.log(data);

    const city = document.querySelector(".city");
    city.innerText = `${data.name}, ${data.sys.country}`;

    const temp = document.querySelector(".temp");
    temp.innerText = `${Math.round(data.main.temp)} °C`;

    const descText = document.querySelector(".desc-text");
    const descIcon = document.querySelector(".desc-icon");
    let description = data.weather[0].description;
    const icon = weatherIcon(description);

    console.log(description);
    descText.innerText = `${data.weather[0].description}`;
    descIcon.className = "desc-icon fa " + icon[0];

    const minmax = document.querySelector(".minmax");
    minmax.innerText = `${Math.round(data.main.temp_min)}°C / ${Math.round(data.main.temp_max)}°C`;

};

const weatherIcon = (description) => {
    let iconClass;
    switch (description) {
        case "parçalı bulutlu":
            iconClass = ["fa-cloud-sun"];
            break;
        case "açık":
            iconClass = ["fa-sun"];
            break;
        case "kapalı":
            iconClass = ["fa-cloud"];
            break;
        case "yağmurlu":
            iconClass = ["fa-cloud-showers-heavy"];
            break;
        default:
            iconClass = ["fa-question"];
            break;
    }
    return iconClass;
};


