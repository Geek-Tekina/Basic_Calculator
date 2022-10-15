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
      for(let it of expression){
        if(it=='+' || it=='-' || it=='*' || it=='/'){
        var seperator=it;}
      }
    const[num1,num2]=expression.split(seperator);
    // console.log(num1,num2);
    let operation;
    let ans;
    switch (seperator) {
        case '+': ans = +num1 + +num2;
            break;
        case '*': ans = +num1 * +num2;
            break;
        case '-': ans = +num1 - +num2;
            break;
        case '/': ans = +num1 / +num2;
            break;
    }
    input.value=''+ans;



})
