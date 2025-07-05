const searchBtn = document.getElementById("searchbtn");
const movieInput = document.getElementById("movieInput");
const apikey = "fad811b9";
const result = document.querySelector(".result");

searchBtn.addEventListener("click", ()=>{
    let movieName = movieInput.value;
    console.log(movieName);

    if(movieName.length <=0){
        result.innerHTML = `<h3 class ="alert">Lütfen bir film adı giriniz.</h3>`;
        return;
    }

    // Önce arama yapalım
    let searchUrl = `https://www.omdbapi.com/?s=${encodeURIComponent(movieName)}&apikey=${apikey}`;
    
    fetch(searchUrl)
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        if(data.Response === "True" && data.Search && data.Search.length > 0){
            // İlk sonucun detaylarını alalım
            let movieId = data.Search[0].imdbID;
            let detailUrl = `https://www.omdbapi.com/?i=${movieId}&apikey=${apikey}`;
            
            return fetch(detailUrl);
        } else {
            result.innerHTML = `<h3 class="alert">Film bulunamadı.</h3>`;
            throw new Error("Film bulunamadı");
        }
    })
    .then(res => res.json())
    .then(movieData => {
        console.log(movieData);
        if(movieData.Response === "True"){
            result.innerHTML = `
                <div class="info">
                    <img src="${movieData.Poster}" class="poster">
                    <div>
                        <h2>${movieData.Title}</h2>
                        <div class="rating">
                            <img src="images/star.svg">
                            <h4>${movieData.imdbRating}</h4>
                        </div>
                        <div class="details">
                            <span>${movieData.Rated}</span>
                            <span>${movieData.Year}</span>
                            <span>${movieData.Runtime}</span>
                        </div>
                        <div class="genre">
                            <div>${movieData.Genre.split(",").join("<div></div>")}</div> 
                        </div>
                    </div>
                </div>
                <div class="text">
                    <h3>Plot:</h3>
                    <p>${movieData.Plot}</p>
                    <h3>Cast:</h3>
                    <p>${movieData.Actors}</p>
                </div>
            `;
        } else {
            result.innerHTML = `<h3 class="alert">Film detayları alınamadı.</h3>`;
        }
    })
    .catch(err => {
        console.error("Hata:", err);
        result.innerHTML = `<h3 class="alert">Film Bulunamadı.</h3>`;
    });
});