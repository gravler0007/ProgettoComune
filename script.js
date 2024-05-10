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
    } catch (error){
        
        error();
        console.error(error);
    }
}

function error() {
    display.value = "ERROR";


    setTimeout(() => {
        del();
    }, 2000);
}

function goniometricOperator(operator) {

    if (isNaN(display.value)) {
        error();
    } else {
        let value = display.value;
        value = parseInt(value);  
        identifyOperator(operator, value);
    }


}

function delChar() {
    display.value = display.value.slice(0, -1);
}


function identifyOperator(selectedOperator, value) {
    let conversion;
    console.log(selectedOperator);
    switch (selectedOperator) {
        case "sin":
            conversion = Math.sin(value * Math.PI / 180);
            // console.log("here sine " + value);
            checkGoniometricOperator(value);
            break;
        case "cos":
            conversion = Math.cos(value * Math.PI / 180);
            // console.log("here cos " + value);
            checkGoniometricOperator(value);
            break;
        case "tan":
            conversion = Math.tan(value * Math.PI / 180);
            // console.log("here tan " + value);
            checkGoniometricOperator(value);
            break;

    }
}

function checkGoniometricOperator(value){

    if (value === 0 || value === 90 || value === 180 || value === 270 || value === 360)
        display.value = value.toFixed();
    else
        display.value = value.toFixed(2);

}