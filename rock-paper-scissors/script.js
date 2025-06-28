const container = document.querySelector(".container"),
      userResult = document.querySelector(".user-images img")
      cpuResult = document.querySelector(".cpu-images img"),
      result = document.querySelector(".result"),
      optionImages = document.querySelectorAll(".option-image");

optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active")
        // console.log(e.target.value);

        optionImages.forEach((img2, index2) => {
            // console.log(index, index2);
            if(index !== index2) {
                img2.classList.remove("active")
            }
        })

        container.classList.add("start")

        let time = setTimeout(() => {
            container.classList.remove("start")
            let imageSrc = e.target.querySelector("img").src;
            // console.log(imageSrc);
            userResult.src = imageSrc;

            let randomNumber = Math.floor(Math.random() * 3)
            // console.log(randomNumber);

            let cpuImages = ["img/rock.png", "img/paper.png", "img/scissors.png" ]

            cpuResult.src = cpuImages[randomNumber]

            let cpuValue = ["R", "P", "S"][randomNumber];
            let userValue = ["R", "P", "S"][index];

            // console.log(userValue, cpuValue);

            let outcomes = {
                RR : "Berabere",
                RP : "Bilgisayar",
                RS : "Kullanıcı",
                PP : "Berabere",
                PR : "Kullanıcı",
                PS : "Bilgisayar",
                SS : "Berabere",
                SR : "Bilgisayar",
                SP : "Kullanıcı",
            };
            let outComeValue = outcomes[userValue + cpuValue]
            // console.log(outComeValue);

            result.textContent = userValue === cpuValue ? "Berabere" : `${outComeValue} Kazandı`
        }, 700)
    })
})