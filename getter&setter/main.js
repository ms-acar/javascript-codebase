class User {
    constructor(ad, soyad, dogumYili) {
        this.ad = ad;
        this.soyad = soyad;
        this.dogumYili = dogumYili;
    }

    calculateAge() {
        let tarih = new Date().getFullYear();
        return tarih - this.dogumYili;
    }

    get ad() {
        return this._ad
    }

    set ad(value) {
        if(value.length < 3) {
            alert("girdiğiniz isim bilgisini kontrol edin");
        }
        this._ad = value
    }

    get dogumYili() {
        return this._dogumYili
    }

    set dogumYili(value) {
        if(value < 1900 || value > new Date().getFullYear()) {
            alert("girdiğiniz dogum tarihi yanlış");
        }
        this._dogumYili = value
    }
}

let user = new User("salih","acar",2006);

console.log(user);

console.log(user.ad);