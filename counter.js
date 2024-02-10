let counter = 0;
let increment = 10;
let boolean1 = true;

function buy(button, amount) {
    if (counter >= amount) {
        document.getElementById(button).style.opacity = 0;
        
        boolean1 = false;
        counter -= amount;
        document.getElementById("counter").textContent = counter;
    }
}

function change_nav(button) {
    if (document.getElementById(button).style.width == "0px")
        document.getElementById(button).style.width = "250px";
    else
        document.getElementById(button).style.width = "0px";
}

document.getElementById("button1").onclick = function() {
    if (boolean1)
        buy("button1", 10);
    else
        change_nav("sideMenu1");
}

document.getElementById("button2").onclick = function() {
    if (boolean2)
        buy("button2", 100);
    else
        change_nav();
}


function incrementCounter() {
    counter += increment;
    document.getElementById("counter").textContent = counter;
}

document.getElementById("main_button").onclick = function() {
    incrementCounter();
}