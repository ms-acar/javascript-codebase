// const serverStatus = true;

// const promise = new Promise((resolve,reject) =>{
//     setTimeout(() => {
//         if(serverStatus){
//             resolve({username: "salihacar"});
//         }else{
//             reject("işlem başarısız");
//         }
//     },2000);
// });

// promise.then((user)=>{
//     console.log(user);
// }).catch((error)=>{
//     console.log(error);
// });

console.log("işlem başladı");

const serverStatus = true;

const login = (username ,password) =>{
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            if(serverStatus){
                resolve({username: username , email: "msacar23@gmail.com"});
            }else{
                reject("server hatası");
            }
        },2000);
    });
};

const getPostFromUsername = (username) => {
        return new Promise((resolve,reject) =>{
        setTimeout(() => {
            if(serverStatus){
                resolve(["post 1","post 2","post 3"]);
            }else{
                reject("server hatası");
            }
        },2000);
    });
};

const getPostDetails = (post) => {
        return new Promise((resolve,reject) =>{
        setTimeout(() => {
            if(serverStatus){
                resolve("user post details: ");
            }else{
                reject("server hatası");
            }
        },2000);
    });
};

login("salihacar","12345678")
.then((user) =>{
    console.log(user);
    return getPostFromUsername(user.username);
})
.then((post) =>{
    console.log(post);
    return getPostDetails(post.post[0]);
})
.then((details) =>{
    console.log(details);
})
.catch((error) => {
    console.log(error);
})