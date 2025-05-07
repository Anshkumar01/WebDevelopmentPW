const genbutton = document.getElementById("generateButton");
const copybutton = document.getElementById("copyButton");

const show = document.querySelector(".show");
const passwordInput = document.getElementById("password")


genbutton.onclick = function generatePassword() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";
    const passwordLength = 16; 
    let password = "";  

    for(let i =0; i<passwordLength; i++){
        let generatePwd = Math.floor(Math.random() * characters.length);
        password += characters.substring(generatePwd, generatePwd + 1); 
    }
    passwordInput.value = password; // Set the generated password to the input field
}

copybutton.onclick = function copyPassword() {
    const passwordValue = passwordInput.value; // Get the value of the password input field
    if(passwordValue.trim() === "") {
        alert("Please generate a password first!"); // Alert if the password field is empty
    }else{
        navigator.clipboard.writeText(passwordValue) // Copy the password to clipboard
            .then(function () {
                show.innerHTML = "Password is! "+ passwordValue; // Show success message                
                show.classList.add("active")
                setTimeout(()=>{
                    show.classList.remove("active") // Remove the success message after 2 seconds
                },2000)
                passwordInput.value = ""; // Clear the password input field
            });
    }
}