
//dinamik eleman ekleme
const todoList = document.querySelector(".list-group");
const cardBody = document.querySelectorAll(".card-body")[1];
                        // <li class="list-group-item d-flex justify-content-between">Todo 1
                        //     <a href="#" class="delete-item">
                        //         <i class="fa fa-remove"></i>
                        //     </a>
                        // </li>
const li = document.createElement("li");
const a = document.createElement("a");
const i = document.createElement("i");

a.className = "list-group-item d-flex justify-content-between";
a.innerHTML = "Todo 5";

li.href  = "#";
li.className = "delete-item";

i.className = "fa fa-remove";

todoList.appendChild(a);
a.appendChild(li);
li.appendChild(i);

//dinamik eleman silme

// console.log(todoList);
// const todos = document.querySelectorAll(".list-group-item");
// todos[0].remove();

// todoList.removeChild(todoList.lastElementChild);

