class User{
    firstname = "salih";

    printName(){
        console.log(this.firstname);
    }
}

class isim extends User{
    printName2(){
        console.log("isim: ",this.firstname);
    }
}

const isim1 = new isim();
isim1.printName();

class marka{
    constructor(marka){
        this.marka = marka;
    }
    print(){
        console.log(`markasi: ${this.marka}`);
    }
}
class model extends marka{
    constructor(marka,model){
        super(marka);
        this.model = model;
    }
    print(){
        console.log(`markasi: ${this.marka} modeli: ${this.model}`);
    }
}

const arac = new model("mercedes","c180");
arac.print();

const sum =(a,b) => {
    console.log(a+b);
}
sum(3,4);