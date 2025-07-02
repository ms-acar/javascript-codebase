//işlemleri senkron bir biçimde çalıştırmak istiyorsak ilgili fonksiyonu async ile tanımlamalıyız.
//ayrıca fonksiyon içerisindeki işlemin birbirini takip eden adımları await ile tanımlanmalıdır ki adımlar karışmadan sırasıyla çalışabilsin.

document.querySelector("#btn").addEventListener("click", async () =>{
    const response = await Notification.requestPermission()
    console.log(response);
});

document.querySelector("#databtn").addEventListener("click", async () =>{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
        const post = await response.json()
        console.log(post);

        const urlComments = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`)
        const comments = await urlComments.json();

        console.log(post, comments);
});

//KISA VERSİYON:
document.querySelector("#databtn").addEventListener("click", async() => {
    const post = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json()
    const comments = await (await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`)).json()

    console.log(post, comments);
})
