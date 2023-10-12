const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something");
    }
    else{   //here we can add tasks by DOM manupulation
        let li = document.createElement("li");  // create a li
        li.innerHTML = inputBox.value;        // take the input passed by user
        listContainer.appendChild(li);        //  show the input 

        // create a cross icon
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";     // code for cross icon
        li.appendChild(span);
    }

    inputBox.value = "";   // imiditely clear the text bar after taking input
}


// WORKING OF CHECKED 
//1. e.target refers to the element that was clicked.

//2. e.target.tagName retrieves the HTML tag name of the clicked element.

// 3. if (e.target.tagName === "LI") checks if the clicked element is a list item (<li>).

// 4. If the clicked element is indeed a list item, the code inside the if block is executed.

// 5. e.target.classList allows you to work with the classes of the clicked list item.

// 6. toggle("checked") is used to toggle the presence of the "checked" class for the clicked list item.
// If the element has the "checked" class, it will be removed; if it doesn't have the "checked" class,
// it will be added.

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");  // class checked is added through js code only not in html
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();   // when clicked on cross icon it will remove the parent elm of span which is its LI
    }
},false);