function playGame() { 
    const secretNumber = Math.floor(Math.random() * 10) + 1;
    let guess;
    let attempts = 0;
    const maxAttempts = 3;

    do {
        guess = parseInt(prompt("Enter your guess (1-10): "));
        attempts++;

        if (guess === secretNumber) {
            document.getElementById("result").textContent = `correct the number was ${secretNumber}. you won in ${attempts} attempts.`
            document.getElementById("result").style.color = "green";
            return;
        }
    } while (guess !== secretNumber && attempts < maxAttempts)

    if (guess !== secretNumber) {
        document.getElementById("result").textContent = `Out of attempts. the correct number was ${secretNumber}`;
        document.getElementById("result").style.color = "red";
    }
}