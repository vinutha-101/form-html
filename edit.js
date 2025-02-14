document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id"); 

    if (!id) {
        console.error("No ID found in URL.");
        return;
    }

    fetch(`http://localhost:3000/entries/${id}`)
        .then(response => {
            if (!response.ok) throw new Error("Failed to fetch entry.");
            return response.json();
        })
        .then(product => {
            if (!product) {
                console.error("No product found for the given ID.");
                return;
            }

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

            document.getElementById("saveBtn").setAttribute("data-id", id);
        })
        .catch(error => console.error("Error fetching entry:", error));

    document.getElementById("edit-form").addEventListener("submit", function (event) {
        event.preventDefault();

        let id = document.getElementById("saveBtn").getAttribute("data-id");
        if (!id) {
            console.error("No ID found for update.");
            return;
        }

        let updatedEntry = {
            id: parseInt(id), 
            name: document.getElementById("name").value,
            age: document.getElementById("age").value,
            select: document.getElementById("select").value,
            city: document.getElementById("city").value,
            hobbies: document.getElementById("hobbies").value,
            gender: document.querySelector('input[name="gender"]:checked').value
        };

        fetch(`http://localhost:3000/entries/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedEntry)
        })
        .then(response => {
            if (!response.ok) throw new Error("Failed to update entry.");
            return response.json();
        })
        .then(() => {
            alert("Entry updated successfully!");
            window.location.href = "index.html";
        })
        .catch(error => console.error("Error updating entry:", error));
    });

    document.getElementById("cancelBtn").addEventListener("click", function () {
        window.location.href = "index.html";
    });
});
