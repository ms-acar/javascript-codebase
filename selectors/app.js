//Selectors (Seçiciler) - Style Özellikleri

//classname , id , tag name

//getElementById : id ye göre elementi yakalar
//getElementByClassName : class ismine göre yakalar.
//getElementByTagName : etiket ismine göre yakalar.




const button = document.getElementById("todoAddButton");

// console.log(button);
// console.log(button.id);
// console.log(button.getAttribute("id"));

// console.log(button.className);
// console.log(button.getAttribute("class"));

 const classListesi = button.classList[3];
// const classListesi = button.classList[2];

// const classListesi = button.classList;

// classListesi.forEach(function(className){
//     console.log(className);
// })

console.log(classListesi);


// let buttonText = button.textContent;
// let buttonText2 = button.innerHTML;


// console.log(buttonText);
// console.log(buttonText2);



// button.innerHTML="<b>Todo Ekleyin</b>";


// const todoList = Array.from(document.getElementsByClassName("list-group-item"));
// todoList.forEach(function(todo){
//     console.log(todo.textContent);
// })
// console.log(todoList);



const forms1 = Array.from(document.getElementsByTagName("form"));
forms1.forEach(function(form){
    console.log(form);
})
console.log("----------------");

const forms = Array.from(document.getElementsByTagName("form"));
for(let i = 0;i<forms.length;i++){
    console.log(forms[i]);
}

console.log("----------------");

// const todoList = document.getElementsByTagName("li");
// console.log(todoList);



// getElementById - getElementByClassName - getElementByTagName


//querySelector - querySelectorAll


// const clearButton = document.querySelector("#todoClearButton");
// console.log(clearButton);

// console.log(document.getElementById("todoClearButton")));


// const todoList = document.querySelector(".list-group");
// console.log(todoList);

//odd ve even
const todoList = Array.from(document.querySelectorAll("li:nth-child(odd)"));

todoList.forEach(function(todo){
    todo.style.backgroundColor = "lightgrey";
    console.log(todo.className);
})

console.log(todoList);

const todo1 = document.querySelectorAll(".list-group-item")[0];

console.log(todo1);

todo1.style.color = "red";

const todo2 = document.querySelectorAll(".list-group-item")[1];

todo2.style.backgroundColor = "purple";
todo2.style.color = "white";
todo2.style.fontWeight = "bold";

const button1 = document.querySelector("#todoClearButton");
button1.style.backgroundColor = "red";
button1.style.color = "#fff";
button1.style.borderRadius = "8px";
button1.style.paddingTop = "20px";

const row = document.querySelector(".row");

let val = row.children[0].children[3].children[2].children[2];
let val2 = row.children[0].children[3].children[2].children[3].textContent = "değişti";
let val3 = row.children[0].children[3].children[2].children[2].previousElementSibling.textContent = "previous";
val.style.color = "blue";

console.log(val);