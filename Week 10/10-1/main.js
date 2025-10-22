//Click Events
let button = document.getElementById("button");
let output = document.getElementById("output");

button.addEventListener("click", buttonClick);

/*function buttonClick(e) {
    console.log("Button Clicked");
    document.getElementById("header-title").textContent =
        "Hello John welcome to TM";
    document.querySelector("#main").style.backgroundColor = "#f4f4f4";
    console.log(e);
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.classList);
    console.log(e.target.classList[1]);
    e.target.style.backgroundColor = "#c70808ff";
    output.innerHTML = "<h3>" + e.target.id + "</h3>";
    console.log(e.clientX);
    console.log(e.clientY);
    console.log(e.shiftKey);
    console.log(e.altKey);
}*/


//Mouse Events
/*let buttons2 = document.getElementById("button");
let box = document.getElementById("box");
let output2 = document.getElementById("output");


buttons2.addEventListener("dblclick", runEvent);
buttons2.addEventListener("mouseup", runEvent);
buttons2.addEventListener("mousedown", runEvent);
buttons2.addEventListener("mouseenter", runEvent);
buttons2.addEventListener("mouseleave", runEvent);
box.addEventListener("mouseover", runEvent);
box.addEventListener("mouseout", runEvent);
box.addEventListener("mousemove", runEvent);


function runEvent(e) {
    console.log("Event type: " + e.type)
    output2.innerHTML =
        "<h3>Mouse X: " + e.offsetX + "</h3><h3>Mouse Y: " + e.offsetY + "</h3>";

}*/


// Keyboard Events
let itemInput = docuement.querySelector('input[type="text"]');
let form = document.querySelector("form");
let select = document.querySelector("select");

itemInput.addEventListener("keydown", runEvent);
itemInput.addEventListener("keyup", runEvent);
itemInput.addEventListener("focus", runEvent);
itemInput.addEventListener("blur", runEvent);
itemInput.addEventListener("cut", runEvent);
itemInput.addEventListener("paste", runEvent);
select.addEventListener("change", runEvent);

form.addEventListener("submit", runEvent)

function runEvent(e) {
    e.preventDefault();
    console.log("Event Type: " + e.type);
}