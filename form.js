document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("data-form");
    const cancelBtn = document.getElementById("cancelBtn");

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        try {
            let formData = {
                id: generateId(5),
                name: document.getElementById("name").value.trim(),
                age: document.getElementById("age").value.trim(),
                select: document.getElementById("select").value,
                city: document.getElementById("city").value.trim(),
                hobbies: document.getElementById("hobbies").value.trim(),
                gender: document.querySelector('input[name="gender"]:checked')?.value || ""
            };

            if (!formData.name || !formData.age || !formData.select || !formData.city || !formData.hobbies || !formData.gender) {
                alert("Please fill in all fields.");
                return;
            }

            const response = await fetch("http://localhost:3000/entries", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error("Failed to save entry");

            alert("Entry saved successfully!");
            window.location.href = "index.html";
        } catch (error) {
            console.error("Error saving entry:", error);
            alert("An error occurred while saving. Please try again.");
        }
    });

    document.getElementById("cancelBtn").addEventListener("click", function () {
        window.location.href = "index.html";
    });

    function generateId(length = 5) {
        return [...crypto.getRandomValues(new Uint8Array(length))]
            .map(byte => byte.toString(16).padStart(2, "0"))
            .join("")
            .slice(0, length);
    }
});
