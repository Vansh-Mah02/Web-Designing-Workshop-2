let timer; 

function startCountdown() {
    const inputField = document.getElementById('Time');
    let count = parseInt(inputField.value);
    if (isNaN(count) || count <= 0) {
        alert("Please enter a positive number!");
        return;
    }

    const display = document.getElementById('result');
    display.innerText = count;
    timer = setInterval(() => {
        count--; 
        
        if (count >= 1) {
            display.innerText = count;
        }
        
    }, 1000);
}