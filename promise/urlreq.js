
const getUserInfo = (url) =>{
    return new Promise((resolve , reject) =>{
        const xml = new XMLHttpRequest();
        xml.addEventListener("readystatechange", () =>{
            try {
                if(xml.readyState == 4 && xml.status == 200){
                    resolve(JSON.parse(xml.responseText));
                }

            } catch (error) {
                reject(error);
            }
        })
    })
}

const getCommentById = (url) =>{
        return new Promise((resolve , reject) =>{
        const xml = new XMLHttpRequest();
        xml.addEventListener("readystatechange", () =>{
            try {
                if(xml.readyState == 4 && xml.status == 200){
                    resolve(JSON.parse(xml.responseText));
                }
                
            } catch (error) {
                reject(error);
            }
        })
    })
}

getUserInfo("https://jsonplaceholder.typicode.com/users")
.then(res => {
    res.array.forEach(element => {
        console.log(res.name);
    })
    return getCommentById(`https://jsonplaceholder.typicode.com/users/${res.id}`) //.then uygulanbilmesi için fonksiyondan çıkmalıdır ve bu yüzden return kullanılmalıdır. 
})
.then(response => console.log(response.name))
.catch(err => console.log(err));


const serverStatus1 = true;
const serverStatus2 = false;

const promise1 = Promise.resolve("1. promise başarılı")
const promise2 = Promise.resolve("2. promise başarılı")
const promise3 = new Promise((resolve, reject) =>{
    if(serverStatus){
        resolve("3. promise başarılı");
    }else{
        reject("3. promise başarısız");
    }
})
const promise4 = Promise.reject("4. promise başarısız")

Promise.all([promise1,promise2,promise3,promise4])
.then(res =>{
    for(let value of res){
        console.log(value);
    }
})
.catch(err =>{
    console.log(err);
})