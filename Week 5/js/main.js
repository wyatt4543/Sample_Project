let globalVar = "I'm a global variable";

function outerFunction() {
    let outerVariable = "I'm a local scoped variable"

    console.log(globalVar);
    console.log(outerVariable);

    function innerFunction() {
        let innerVariable = "I'm an inner variable";
        console.log(innerVariable);
    }

    innerFunction();
}

outerFunction();