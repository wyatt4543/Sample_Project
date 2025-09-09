function sendEmails() {
    const emailInput = document.getElementById("emailInput").value;
    const emailListDiv = document.getElementById("emailList");

    emailListDiv.innerHTML = "";


    const emailList = emailInput.split(",").map((email) => email.trim());
    console.log(emailList);

    for (let i = 0; i < emailList.length; i++) {
        const emailItem = document.createElement("p");
        emailItem.className = "email-item";
        emailItem.textContent = `Sending email to: ${emailList[i]}`;
        emailListDiv.appendChild(emailItem);
    }

    const successMessage = document.createElement("p");
    successMessage.className = 'email-item';
    successMessage.style.color = "green"
    successMessage.textContent = "All emails have been sent successfully";
    emailListDiv.appendChild(successMessage);
}