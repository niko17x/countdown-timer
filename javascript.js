// let output = document.querySelector('.output');
// output.innerHTML = '';


//create a countdown from 10 - 0 with a unique input for 10 and for 0:
function countdown() {
    for (i=10; i>=0; i--) {
        const para = document.createElement('p');
        if (i === 10) {
            para.textContent = `${i} - Countdown!`;
        } else if (i === 0) {
            para.textContent = `${i} - BLASTOFF!`;
        } else {
            para.textContent = `${i}`;
        }
    }
    output.appendChild(para);
}

countdown();