const yellowButtons = document.querySelectorAll("#screen-btn");
const input = document.querySelector("#screen");
// console.log(yellowButtons);
//to show values on screen
for (const yelloBtn of yellowButtons) {
    yelloBtn.addEventListener("click", function () {
        input.value += this.innerText;
    })
}
//to clear the screen
const cancelBtn = document.querySelector(".c");
cancelBtn.addEventListener("click", () => {
    input.value = "";
})
//to evalute
const eqlBtn = document.querySelector("#eql");
eqlBtn.addEventListener("click", function () {
    const expression = input.value;
    // console.log(expression);
    const num1 = +expression[0];
    const num2 = +expression[2];
    // console.log(typeof num1,num2);
    const operation = expression[1];
    let ans;
    switch (operation) {
        case '+': ans = num1 + num2;
            break;
        case '*': ans = num1 * num2;
            break;
        case '-': ans = num1 - num2;
            break;
        case '/': ans = num1 / num2;
            break;
    }
    input.value=''+ans;
    


})
