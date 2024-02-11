var counter = 0;
var increment = 1000000000;
var booleans = [true, true, true, true, true, true, true];
var items = [1, 1, 1, 1, 1, 1, 1];
var sideMenus = ["sideMenu1", "sideMenu2", "sideMenu3", "sideMenu4", "sideMenu5", "sideMenu6", "sideMenu7"];

function buy(button, amount, boolean) {
    if (counter >= amount) {
        document.getElementById(button).style.opacity = 0;
        
        booleans[boolean] = false;
        counter -= amount;
        document.getElementById("counter").textContent = counter;
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
    document.getElementById("counter").textContent = counter;
}

function addPowerUps(x) {
    document.getElementById("item-" + x+1 + "-" + items[x]).style.opacity = 1;
    items[x]++;
    
    counter -= 10;
    document.getElementById("counter").textContent = counter;
}


document.getElementById("main_kneader").onclick = function() {
    addPowerUps(0, 20);
}

document.getElementById("main_onion").onclick = function() {
    addPowerUps(1, 200);
}

document.getElementById("main_pan").onclick = function() {
    addPowerUps(2, 2000);
}

document.getElementById("main_heart").onclick = function() {
    addPowerUps(3, 20000);
}

document.getElementById("main_dress").onclick = function() {
    addPowerUps(4, 200000);
}

document.getElementById("main_lemon").onclick = function() {
    addPowerUps(5, 2000000);
}

document.getElementById("main_leaf").onclick = function() {
    addPowerUps(6, 20000000);
}





// document.getElementById('button-play').addEventListener('click', function() {
//     var childDiv = document.querySelector('.child');
//     var child1Div = document.querySelector('.child1');
//     var containerDiv = document.getElementById('containerDiv');
//     var titleDiv = document.getElementById('title');
//     var parentDiv = document.querySelector('.parent');

//     // Slide away animation for child divs
//     childDiv.style.transition = 'transform 1s ease-out';
//     child1Div.style.transition = 'transform 1s ease-out';
    
//     childDiv.style.transform = 'translateX(-200%)'; // Move child 1 to the left
//     child1Div.style.transform = 'translateX(200%)'; // Move child 2 to the right

//     // After child divs animation, slide container div down
//     setTimeout(function() {
//         containerDiv.style.transition = 'transform 1s ease-out';
//         containerDiv.style.transform = 'translateY(100vh)'; // Move container down
//         titleDiv.style.transition = 'opacity 1s ease-out'; // Add fade out transition to title
//         titleDiv.style.opacity = 0; // Make title transparent
//         setTimeout(function() {
//             childDiv.style.display = 'none'; // Hide child div 1
//             child1Div.style.display = 'none'; // Hide child div 2
//             containerDiv.style.display = 'none'; // Hide container div
//             parentDiv.style.display = 'none'; // Hide parent div
//             document.body.style.backgroundColor = 'peachpuff'; // Set background color
//         }, 1000); // Time to wait for title fade out in milliseconds
//     }, 1000); // Time of child divs animation in milliseconds
// });
