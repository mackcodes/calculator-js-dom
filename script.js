const inputDisplay = document.querySelector(".inputDisplay");

// iterates through each buttons and select and display
document.querySelectorAll(".button").forEach((button, index) => {
    if(index == 0) return;
    button.addEventListener("click", () =>{
        inputDisplay.textContent+= button.textContent + " ";
    })
})

