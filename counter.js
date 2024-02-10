alert("Hello");

function change_nav() {
    if (document.getElementById("side_menu_1").style.width == "0px")
        document.getElementById("side_menu_1").style.width = "250px";
    else
        document.getElementById("side_menu_1").style.width = "0px";
}

document.getElementById("openBtn").onclick = function() {
    change_nav();
}