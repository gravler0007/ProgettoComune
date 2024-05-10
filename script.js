let display = document.getElementById("display");

// let buttonOne = document.getElementById("one");
// let buttonTwo = document.getElementById("two");

// let numberNodeList = document.querySelectorAll(".number");
// let operationsNodeList = document.querySelectorAll(".operator");

// let numero = 0;


// numberNodeList.forEach(function (number) {

//     number.addEventListener("click", function () {
//         display.value += number.value;
//         // console.log(display.value);
//         numero = display.value;
//         console.log(numero);


//     });

// })

// operationsNodeList.forEach(function (operator) {

//     operator.addEventListener("click", function () {



//         if (operator.value !== "=") {

//             if (operator.value === "^") {
//                 display.value += "**";
//             } else {
//                 display.value += operator.value;
//             }
//         } else {
//             display.value = eval(display.value)
//         }
            

        


//         // console.log(display.value);
//     });
// })


function append(input) {
    display.value += input;
}

function del() {
    display.value= " ";
}

function calc() {
    
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "ERROR";
       
        setTimeout (() => {
            del();
        },2000);
    }
        
}

function delChar() {
    display.value = display.value.slice(0, -1);
}