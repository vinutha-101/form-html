document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const index = params.get("index");

    if (index !== null) {
        let entries = JSON.parse(localStorage.getItem("entries")) || [];
        const product = entries[index];

        if (product) {
            document.getElementById("index").value = index;
            document.getElementById("name").value = product.name;
            document.getElementById("age").value = product.age;
            document.getElementById("select").value = product.select;
            document.getElementById("city").value = product.city;
            document.getElementById("hobbies").value = product.hobbies;

            if (product.gender === "Male") {
                document.getElementById("gender-male").checked = true;
            } else {
                document.getElementById("gender-female").checked = true;
            }
        }
    }

    document.getElementById("edit-form").addEventListener("submit", function (event) {
        event.preventDefault();

        let entries = JSON.parse(localStorage.getItem("entries")) || [];
        const index = document.getElementById("index").value;

        entries[index] = {
            name: document.getElementById("name").value,
            age: document.getElementById("age").value,
            select: document.getElementById("select").value,
            city: document.getElementById("city").value,
            hobbies: document.getElementById("hobbies").value,
            gender: document.querySelector('input[name="gender"]:checked').value
        };

        localStorage.setItem("entries", JSON.stringify(entries));

        alert("Entry updated successfully!");
        window.location.href = "index.html"; 
    });

    document.getElementById("cancelBtn").addEventListener("click", function () {
        window.location.href = "index.html";
    });
});
