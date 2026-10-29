let name = localStorage.getItem("studentName");

let events = JSON.parse(
    localStorage.getItem("events")
);

let summary = document.getElementById("summary");

summary.innerHTML = "<p>Name: " + name + "</p>";

summary.innerHTML += "<p>Events:</p>";

for (let i = 0; i < events.length; i++) {
    summary.innerHTML += events[i] + "<br>";
}

let totalFee = events.length * 150;

summary.innerHTML +=
    "<p>Total Fee: " + totalFee + " Taka</p>";

function goBack() {
    window.location.href = "p1.html";
}