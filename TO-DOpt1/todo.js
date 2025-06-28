                        // <li class="list-group-item d-flex justify-content-between">Todo 1
                        //     <a href="#" class="delete-item">
                        //         <i class="fa fa-remove"></i>
                        //     </a>
                        // </li>
//todo ekleme

const todoAddButton = document.getElementById("todoAddButton");
const form = document.getElementById("todoAddForm");
const addInput = document.getElementById("todoName");
const list = document.getElementsByClassName("list-group")[0];
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.getElementById("clearButton");

runEvents();

function runEvents(){
    form.addEventListener("submit",addTodo);
}
function addTodo(e){
    let inputText = addInput.value.trim();
    if(inputText== null || inputText == ""){
        alert("lütfen bir değer giriniz");
    }else{
        /*ui ekleme */
        addInputToUi(inputText);
        /*storage ekleme */
        addInputToStorage(inputText);
    }
    e.preventDefault();
}

function addInputToUi(newTodo){
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between";
    li.textContent = newTodo;

    const a = document.createElement("a");
    a.href = "#"
    a.className = "delete-item";

    const i = document.createElement("i");
    i.className = "fa fa-remove";

    a.appendChild(i);
    li.appendChild(a);
    list.appendChild(li);

    addInput.value = "";

}
// function addInputToStorage(newTodo){
//     const index = sessionStorage.length;
//     sessionStorage.setItem(index, newTodo);
// } (index olarak storage ekleme)

function addInputToStorage(newTodo){// (array güncelleyerek storage ekleme)
    checkTodosFromStorage();
    todos.push(newTodo);
    sessionStorage.setItem("todos",JSON.stringify(todos));
}
function checkTodosFromStorage(){
    if(sessionStorage.getItem("todos") ==null){
        todos = [];//todos ta storagede önceden eleman eklenmemişse boş array başlat
    }else{
        todos = JSON.parse(sessionStorage.getItem("todos")); //todos ta storagede önceden eleman eklenmişse üzerine array oluştur
    }
}