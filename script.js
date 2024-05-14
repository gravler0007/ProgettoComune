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

function fError() {
    display.value = "ERROR";


    setTimeout(() => {
        del();
    }, 1000);
}

function append(input) {
    display.value += input;
}

function del() {
    display.value= " ";
}

function calc() {
    
    try {
        display.value = eval(display.value);
    } catch (error){
        
        fError();
        console.error(error);
    }
}


function delChar() {
    display.value = display.value.slice(0, -1);
}


function identifyOperator(selectedOperator) {

    let conversion;
    let value = display.value;

    if (isNaN(value) || value === "") {
        console.log("error")
        fError();
        return;
    } 
    
    value = parseInt(value);

    
    console.log(selectedOperator);
    switch (selectedOperator) {

        case "sin":
            console.log("entaro in case sin");
            conversion = Math.sin(value * Math.PI / 180);
            // console.log("here sine " + value);
            checkGoniometricOperator(value, conversion);
            break;
        
        case "cos":
            conversion = Math.cos(value * Math.PI / 180);
            // console.log("here cos " + value);
            checkGoniometricOperator(value, conversion);
            break;
        
        case "tan":
            conversion = Math.tan(value * Math.PI / 180);
            console.log(conversion);
            // console.log("here tan " + value);
            checkGoniometricOperator(value, conversion);
            break;
        
        case "%":
            display.value = value % 2;

        //     break;
        
        // case "":

        //     break;
        
        // case "":

        //     break;

    }
}

function checkGoniometricOperator(value, conversion){

    if (value === 0 || value === 90 || value === 180 || value === 270 || value === 360)
        display.value = conversion.toFixed();
    else
        display.value = conversion.toFixed(2);

}