document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("data-form");

    if (!form) {
        console.error("Form not found! Check if #data-form exists in form.html.");
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        console.log("Save button clicked!");

        let name = document.getElementById("name").value.trim();
        let age = document.getElementById("age").value.trim();
        let select = document.getElementById("select").value.trim();
        let city = document.getElementById("city").value.trim();
        let hobbies = document.getElementById("hobbies").value.trim();
        let genderElement = document.querySelector('input[name="gender"]:checked');

        if (!genderElement) {
            alert("Please select a gender.");
            return;
        }

        let gender = genderElement.value;

        if (!name || !age || !select || !city || !hobbies) {
            alert("All fields are required!");
            return;
        }

        let entries = JSON.parse(localStorage.getItem("entries")) || [];
        entries.push({ name, age, select, city, hobbies, gender });

        localStorage.setItem("entries", JSON.stringify(entries));

        console.log("Data saved:", entries); 

        alert("Entry saved successfully!");
        window.location.href = "index.html"; 
    });

    document.getElementById("cancelBtn").addEventListener("click", function () {
        form.reset(); 
        window.location.href = "index.html"; 
    });
});
