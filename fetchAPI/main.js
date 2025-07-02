const url = "https://jsonplaceholder.typicode.com/posts";

fetch(url) //fetch yapısı, bir API üzerinde Promise tabanlı bir işlem yapar.

.then(res => res.json) //not: tek satırdaki ok fonksiyonlarında parantez kullanılmaz
.then(data => console.log(data));