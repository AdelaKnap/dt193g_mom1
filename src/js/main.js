/* JS-kod för fomruläret för kontroll av input och för att lägga till data i tabellen */

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("addForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Bootstrap-valideringen
        form.classList.add("was-validated");

        if (form.checkValidity()) {
            const name = document.getElementById("name").value;
            const age = document.getElementById("age").value;
            const breed = document.getElementById("breed").value;
            const color = document.getElementById("color").value;
            const description = document.getElementById("description").value;
            const checkbox = document.getElementById("checkbox").checked;

            // Ny rad i tabellen
            const tableBody = document.getElementById("table-body");
            const newRow = tableBody.insertRow();

            newRow.insertCell(0).textContent = name;
            newRow.insertCell(1).textContent = age;
            newRow.insertCell(2).textContent = breed;
            newRow.insertCell(3).textContent = color;
            newRow.insertCell(4).textContent = description;
            newRow.insertCell(5).textContent = checkbox ? "Ja" : "Nej";

            // Rensa formuläret och ta bort valideringsklassen
            form.reset();
            form.classList.remove("was-validated");
        }
    });
});

// Funktion för att toggla hamburger-menyn
document.getElementById("toggler").addEventListener("click", function (event) {
    event.preventDefault();
    const nav = document.getElementById("nav");
    nav.classList.toggle("show");
});

