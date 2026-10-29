let events = [];

function addEvent() {
    let eventName = document.getElementById("eventName").value;

    if (eventName.trim() === "") {
        alert("Please enter an event name.");
        return;
    }

    if (events.length >= 3) {
        alert("You can join a maximum of 3 events.");
        return;
    }

    events.push(eventName);

    document.getElementById("eventName").value = "";

    let list = document.getElementById("eventList");
    list.innerHTML = "";

    for (let i = 0; i < events.length; i++) {
        list.innerHTML += "<li>" + events[i] + "</li>";
    }

    alert("Event Added");
}

function confirmRegistration() {
    let name = document.getElementById("studentName").value;

    if (name.trim() === "") {
        alert("Please enter your name.");
        return;
    }

    if (events.length === 0) {
        alert("Please add an event first.");
        return;
    }

    localStorage.setItem("studentName", name);
    localStorage.setItem("events", JSON.stringify(events));

    window.location.href = "conf.html";
}