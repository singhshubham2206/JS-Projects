
let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);    //is used to convert a NodeList, obtained from the document.querySelectorAll('button') method, into a regular JavaScript array.
                                  // it will make more eaiser to access all the button inside the foreach loop like a simple js array


arr.forEach(button => {
    button.addEventListener('click', (e) =>{    // whenever we click on any button 
        if(e.target.innerHTML == '='){
            string = eval(string);            // js function to evaluate the expression
            input.value = string;
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);   // this will delete the last number of the given user number (like 234->23)
            input.value = string;
        }
        else{
            string += e.target.innerHTML;   // else will show the input by the user in inout box
            input.value = string;
        }
        
    })
})