const inputDisplay = document.querySelector(".inputDisplay");

// iterates through each buttons and select and display
document.querySelectorAll(".button").forEach((button, index) => {
    if(index == 0) return;
    button.addEventListener("click", (e) =>{
        inputDisplay.textContent+= e.target.textContent;  // e.target tells which button was clicked
    })
})

function addition(a, b){
    return a + b;
};

function subtraction(a, b){
    return a - b;
};

function multiplication(a, b){
    return a * b;
};

function division(a, b){
    if(b == 0) return "Cannot Divide by Zero";
    return a / b;
};

kdfjkldfjk