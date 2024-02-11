var counter = 0;
var increment = 1;
var booleans = [true, true, true, true, true, true, true];
var items = [1, 1, 1, 1, 1, 1, 1];
var sideMenus = ["sideMenu1", "sideMenu2", "sideMenu3", "sideMenu4", "sideMenu5", "sideMenu6", "sideMenu7"];

function buy(button, amount, boolean) {
    if (counter >= amount) {
        document.getElementById(button).style.opacity = 0;
        
        booleans[boolean] = false;
        counter -= amount;
        document.getElementById("counter").textContent = counter;
    } else {
        alert("You need " + amount + " coins to buy this!");
    }
}

function change_nav(button) {

    if (document.getElementById(button).style.width == "0px") {
        for (let i = 0; i < sideMenus.length; i++) 
            if(!(sideMenus[i] == button)) {
                document.getElementById(sideMenus[i]).style.width = "0px";
                console.log("hello"); 
            }  
            document.getElementById(button).style.width = "250px";
    } 
        
    else
        document.getElementById(button).style.width = "0px";
}

document.getElementById("button1").onclick = function() {
    if (booleans[0])
        buy("button1", 10, 0);
    else
        change_nav("sideMenu1");
}

document.getElementById("button2").onclick = function() {
    if (booleans[1])
        buy("button2", 100, 1);
    else
        change_nav("sideMenu2");
}

document.getElementById("button3").onclick = function() {
    if (booleans[2])
        buy("button3", 1000, 2);
    else
        change_nav("sideMenu3");
}

document.getElementById("button4").onclick = function() {
    if (booleans[3])
        buy("button4", 10000, 3);
    else
        change_nav("sideMenu4");
}

document.getElementById("button5").onclick = function() {
    if (booleans[4])
        buy("button5", 100000, 4);
    else
        change_nav("sideMenu5");
}

document.getElementById("button6").onclick = function() {
    if (booleans[5])
        buy("button6", 1000000, 5);
    else
        change_nav("sideMenu6");
}

document.getElementById("button7").onclick = function() {
    if (booleans[6])
        buy("button7", 10000000, 6);
    else
        change_nav("sideMenu7");
}



document.getElementById("main_button").onclick = function() {
    counter += increment;
    document.getElementById("counter").textContent = Math.round(counter);
}

function addPowerUps(x, amount, multiplier) {
    if (counter >= amount) {
        document.getElementById("item-" + (x+1) + "-" + items[x]).style.opacity = 1;
        items[x]++;
        
        counter -= amount;
        document.getElementById("counter").textContent = Math.round(counter);

        increment *= 1+multiplier;
        document.getElementById("multiplier").textContent = increment.toFixed(2);
    } else {
        alert("You need " + amount + " coins to buy this!");
    }
}


document.getElementById("main_kneader").onclick = function() {
    addPowerUps(0, 20, 0.01);
}

document.getElementById("main_onion").onclick = function() {
    addPowerUps(1, 200, 0.02);
}

document.getElementById("main_pan").onclick = function() {
    addPowerUps(2, 2000, 0.04);
}

document.getElementById("main_heart").onclick = function() {
    addPowerUps(3, 20000, 0.08);
}

document.getElementById("main_dress").onclick = function() {
    addPowerUps(4, 200000, 0.16);
}

document.getElementById("main_lemon").onclick = function() {
    addPowerUps(5, 2000000, 0.032);
}

document.getElementById("main_leaf").onclick = function() {
    addPowerUps(6, 20000000, 0.64);
}






document.getElementById("notImplemented").onclick = function() {
    alertUpdate(); 
}

document.getElementById("notImplemented2").onclick = function() {
    alertUpdate(); 
}

document.getElementById("notImplemented3").onclick = function() {
    alertUpdate(); 
}


document.getElementById("notImplemented4").onclick = function() {
    alertUpdate(); 
}

document.getElementById("notImplemented5").onclick = function() {
    alertUpdate(); 
}

document.getElementById("notImplemented6").onclick = function() {
    alertUpdate(); 
}

document.getElementById("notImplemented7").onclick = function() {
    alertUpdate(); 
}

document.getElementById("notImplemented8").onclick = function() {
    alertUpdate(); 
}

document.getElementById("notImplemented9").onclick = function() {
    alertUpdate(); 
}
document.getElementById("notImplemented10").onclick = function() {
    alertUpdate(); 
}
document.getElementById("notImplemented11").onclick = function() {
    alertUpdate(); 
}


function alertUpdate() {
    alert("Special Abilities Will Be Added Next Update");
}