function extendMenu() {
    var x = document.getElementById("mainMenu");
    if (x.className === "collapsible") {
        x.className += " responsive";
    } else {
        x.className = "collapsible";
    }
}
