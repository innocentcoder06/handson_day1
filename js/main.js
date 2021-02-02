var citiesJson;
window.onload = function(e) {
    console.log("Loaded");
    var req = new XMLHttpRequest();
    req.open("GET", '../assets/cites.json', false);
    req.send(null);
    citiesJson = JSON.parse(req.responseText);
    var parent = document.getElementById("city_list");
    for (let i in citiesJson) {
        var child = document.createElement("option");
        child.setAttribute("value", citiesJson[i].name);
        parent.appendChild(child);
    }
}