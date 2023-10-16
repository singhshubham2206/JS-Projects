
// VIDEO LINK
// https://www.youtube.com/watch?v=Yy69xuYX-jE&list=PLMxec9nlD1X2ifPtxeu3Xm9nK1c4eBx2x&index=6&t=120s

const inputBox = document.getElementById('inputBox');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

let editTodo = null;

const addTodo = () => {
    const inputText = inputBox.value.trim();  // taking input from the user 

    // if task bar is empty 
    if (inputText.length <= 0) {
        alert("You must write something in your to do");
        return false;
    }

    // this code for the editing of the task  
    if (addBtn.value === "Edit") {
        // Passing the original text to editLocalTodos function before edit it in the todoList
        editTodo.target.previousElementSibling.innerHTML = inputText;
        addBtn.value = "Add";    // again changing the text of edit button to add button after editing
        inputBox.value = "";
    }

    // other wise add a task to it with task edit and delete button simutenously
    else {
        // creating task 
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.innerHTML = inputText;
        li.appendChild(p);


        // Creating Edit Btn
        const editBtn = document.createElement("button");
        editBtn.innerText = "Edit";
        editBtn.classList.add("btn", "editBtn");
        li.appendChild(editBtn);

        // Creating Delete Btn
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Remove";
        deleteBtn.classList.add("btn", "deleteBtn");
        li.appendChild(deleteBtn);


        todoList.appendChild(li);
        inputBox.value = "";
    }

}



// this is to remove or edit the task
const updateTodo = (e) => {
    if (e.target.innerHTML === "Remove") {
        todoList.removeChild(e.target.parentElement);
        // e.target.parentElement.remove();
    }

    if (e.target.innerHTML === "Edit") {
        inputBox.value = e.target.previousElementSibling.innerHTML;   // task bar me previous elm ka text aa jayega 
        inputBox.focus();
        addBtn.value = "Edit";   // change the text of add button to edit button
        editTodo = e; // passing the whole e 
    }
}


addBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', updateTodo);
