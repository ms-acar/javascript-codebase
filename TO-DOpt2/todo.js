window.addEventListener("load", () => {
    const form = document.getElementsByClassName("new-task-form")[0];
    const newTaskInput = document.getElementsByClassName("textinput")[0];
    const taskList = document.getElementsByClassName("task-list")[0];

    form.addEventListener("submit", e => {
        e.preventDefault();

        const task = newTaskInput.value;

        const taskElement = document.createElement("div");
        taskElement.classList.add("task");

        const taskContent = document.createElement("div");
        taskContent.classList.add("content");

        taskElement.append(taskContent);

        const taskInput = document.createElement("input");
        taskInput.classList.add("text");
        taskInput.type = "text";
        taskInput.value = task;
        taskInput.setAttribute("readonly", "readonly");

        taskContent.append(taskInput);

        const taskAction = document.createElement("div");
        taskAction.classList.add("actions");

        const taskEdit = document.createElement("i");
        taskEdit.classList.add("fa-solid");
        taskEdit.classList.add("fa-pen");

        const taskDeleteElement = document.createElement("i");
        taskDeleteElement.classList.add("fa-solid");
        taskDeleteElement.classList.add("fa-trash");

        taskAction.append(taskEdit);
        taskAction.append(taskDeleteElement);

        taskElement.append(taskAction);

        taskList.append(taskElement);

        newTaskInput.value = "";

        taskEdit.addEventListener("click", e =>{

            console.log(e.target);

            if (taskEdit.classList.contains("fa-pen")) {
                taskEdit.classList.replace("fa-pen", "fa-floppy-disk");
                taskInput.removeAttribute("readonly");
                taskInput.focus();
            } else {
                taskEdit.classList.replace("fa-floppy-disk", "fa-pen");
                taskInput.setAttribute("readonly", "readonly");
            }
        });
        taskDeleteElement.addEventListener("click", e =>{

            if(taskDeleteElement.classList.contains("fa-trash")){
                taskElement.remove();
            }
        })
        // <div class="task">
        //     <div class="content">
        //         <input type="text" class="text" value="A new task" readonly>
        //     </div>
        //     <div class="actions">
        //         <i class="fa-solid fa-pen"></i>
        //         <i class="fa-solid fa-trash"></i>
        //     </div>
        // </div>
    });
});