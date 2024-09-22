const add = (x,y) => (x + y).toFixed(2);
const subtract = (x,y) => (x - y).toFixed(2);
const multiply = (x,y) => (x * y).toFixed(2);
const divide = (x,y) => { 
    if (y == 0) {
        alert("Can not divide with 0 please try again")
        return x;
    }
    return (x / y).toFixed(2);}


let number1,number2;
let operator;

function operate(number1, number2, operator){
    if (operator == "+") return add(number1,number2);
    else if (operator == "-") return subtract(number1,number2);
    else if (operator == "*") return multiply(number1,number2);
    else if (operator == "/") return divide(number1,number2);
}

const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");
let displayTextAll = "";
let displayText = ""
let tempNumber ;
let arrCal = [];
let result ;
let x = false;
let lastAction = "";

buttons.forEach((button) => {
    button.addEventListener("click",(e)=>{ 
        // Handle the when enter operand for the first time
         if (["/","*","+","-"].includes(e.target.textContent)){
            if ((arrCal.length == 0 ) && display.textContent != "") {
                tempNumber = parseFloat(display.textContent)
                arrCal.push(tempNumber);
                arrCal.push(e.target.textContent)
                display.textContent="";
            }

        // Handle the when enter operand more than second time
            else if (arrCal.length > 0)
            {
                // normal flow  - when input operand and already key value 
                if (lastAction == "Operand") {
                    arrCal[arrCal.length - 1] = e.target.textContent;
                }
                else if (arrCal.length == 2 && display.textContent != "") { //
                    tempNumber =  parseFloat(display.textContent);
                    result = operate(arrCal[0], tempNumber, arrCal[arrCal.length - 1]);
                    display.textContent = result;
                    arrCal = [result,e.target.textContent]
                }
                // when input operand and have number -> handle = 
                else if (arrCal.length == 1 && display.textContent != "") {
                    arrCal.push(e.target.textContent);
                    display.textContent = "";

                }
                //เหลอเพิ่มเคสที่ใส num ---> operator --> operator แล้วไม่ให้ error        
                else {
                    arrCal[arrCal.length-1] = e.target.textContent;
                    displayTextAll += display.textContent;
                    console.log(3);
                }
                x = true;
            }
            lastAction = "Operand";
        }
        else if (e.target.textContent == "=")  
        {
            if (arrCal.length != 0) {
            tempNumber =  parseFloat(display.textContent);
            result = operate(arrCal[0], tempNumber, arrCal[1]);
            display.textContent = result;
            arrCal = [result];
            x = true;
            lastAction = "Equal";
            }
        }
        else if (e.target.textContent == "clear"){
            arrCal = [];
            display.textContent = "";
            lastAction = "Clear";
        }
        else if (e.target.textContent == "delete"){
            if (display.textContent.length == 1) {
                arrCal = [];
                display.textContent = "";
            }
            else {
                display.textContent  = display.textContent.slice(0,-1); 
            }
            lastAction = "Delete";
        }
        else
        {
            if (x){
                display.textContent = ""
            }
            display.textContent += e.target.textContent;
            x = false;
            lastAction = "Number";
        }
        console.log(arrCal)
        console.log(arrCal.length)
        //if click other concate the text 
    })
})



//Make the calculator work! You’ll need to store the first number and second number that are input into the calculator, utilize the operator that the user selects, and then operate() on the two numbers when the user presses the “=” key.
//1. the user input value that is number --> if not don't do anything?
//2. If the user enter any + - * or / store that value into variable 
//3. If number do the same in a loop
//when the user input + - * / the program store the display value 


//ตอนนี้ทำเคสที่ใส่ข้อมูลปกติและกด = กับกดเครื่องหมายมั่วๆตอนแรก

//เหลือทำเคสให้รองรับการกดเลข เครื่องหมาย แล้ว เลขต่อ กับกันเคสมั่วๆอีกหลายๆเคส

//+ ทำปุ่มเคลียกับ delete
