document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("data-form").addEventListener("submit", function (event) {
        event.preventDefault();

        let formData = {
            name: document.getElementById("name").value,
            age: document.getElementById("age").value,
            select: document.getElementById("select").value,
            city: document.getElementById("city").value,
            hobbies: document.getElementById("hobbies").value,
            gender: document.querySelector('input[name="gender"]:checked').value
        };

        fetch("http://localhost:3000/entries", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(() => {
            alert("Entry saved successfully!");
            window.location.href = "index.html"; 
        })
        .catch(error => console.error("Error saving entry:", error));
    });
});
