class User{
    constructor(ad,soyad,yas,sehir){
        this.ad=ad;
        this.soyad=soyad;
        this.yas=yas;
        this.sehir=sehir;
    }
    showUserInfo(){
        console.log(
            `isim : ${this.ad}
            soyisim : ${this.soyad}
            yas : ${this.yas}
            sehir : ${this.sehir}
            `
        )
    }
}
const user1 = new User("salih","acar",19,"konya");
user1.showUserInfo();

class Math{
    static sum(a,b){
        console.log(a+b);
    }
         sub(a,b){
        console.log(a-b);
    }
         div(a,b){
        console.log(a/b);
    }
         mul(a,b){
        console.log(a*b);
    }
}

Math.sum(3,4); // static constructor gerektirmez

const div = new Math;
div.div(12,6);