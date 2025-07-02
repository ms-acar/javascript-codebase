console.log("işlem başladı");

const login = (username, password, callback) => {
    setTimeout(() => {
         callback({username: username, email: "asdf@gmail.com"})
    }, 2000)
}



const getPostFromUsername = (username, callback) => {
    setTimeout(() => {
        callback(["post 1", "post 2", "post 3"])
    }, 1000)
}


const getPostDetails = (post, callback) => {
    setTimeout(() => {
        callback("post details")
    }, 1000)
}

login("meteyldrm","12345", user => {
    console.log(user.username);
    
    getPostFromUsername(user.username, (posts) => {
        console.log(posts);

        getPostDetails(posts[0], (details) => {
            console.log("details");
        })
    });

});


console.log("işlem bitti");
