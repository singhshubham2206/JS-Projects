let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");
let copyIcon = document.getElementById("copyIcon");

sliderValue.textContent = inputSlider.value ;
inputSlider.addEventListener('input', ()=>{
    sliderValue.textContent = inputSlider.value;
})

genBtn.addEventListener('click', ()=>{
    passBox.value = generatePassword();
})

let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "!@#$%^&*";


// FUNCTION TO GENERATE PASSWORD
function generatePassword(){
    let genPassword="";
    let allChars ="";

    allChars  += lowercase.checked ? lowerChars : "";  // allchars will contains all the lowercase chars
    allChars  += uppercase.checked ? upperChars : "";  // allchars will contains all the lowercase + uppercase chars
    allChars  += numbers.checked ? allNumbers : "";    // allchars will contains all the lowercase + uppercase + numbers chars
    allChars  += symbols.checked ? allSymbols : "";    // allchars will contains all the lowercase + uppercase + numbers + symbols chars

    let i = 1;
    while(i<=inputSlider.value){
        genPassword += allChars.charAt(Math.floor(          // with ever value of i genpassword store a char in it that is at the random place in allchar 
                        Math.random() * allChars.length));
        i++;
    }

    return genPassword;
}

// copy the password from the Bar 
copyIcon.addEventListener('click', ()=>{
    if(passBox.value != "" || passBox.value.lenth >=1){
        navigator.clipboard.writeText(passBox.value);
        copyIcon.title="Password Copied";
        copyIcon.innerHTML="check";

        setTimeout(()=>{
            copyIcon.title="";
            copyIcon.innerHTML="content_copy";
        },2000)
    }    
})
