document.addEventListener("DOMContentLoaded", function () {
    let entries = JSON.parse(localStorage.getItem("entries")) || [];
    let placeholder = document.querySelector("#data-output");

    if (!placeholder) {
        console.error("Element with ID 'data-output' not found.");
        return;
    }

    let out = "";

    entries.forEach((product, index) => {
        out += `
            <tr id="row-${index}">
                <td data-label="Name">${product.name}</td>
                <td data-label="Age">${product.age}</td>
                <td data-label="Class">${product.select}</td>
                <td data-label="City">${product.city}</td>
                <td data-label="Hobbies">${product.hobbies}</td>
                <td data-label="Gender">${product.gender}</td>
                <td data-label="Actions">
                    <div class="action-buttons">
                        <a href="edit.html?index=${index}" class="btn btn-edit">Edit</a>
                        <button class="btn btn-delete delete-btn" data-index="${index}">Delete</button>
                    </div>
                </td>
            </tr>
        `;
    });

    placeholder.innerHTML = out;

    document.querySelectorAll(".delete-btn").forEach(button => {
        button.addEventListener("click", function () {
            let index = this.getAttribute("data-index");
            deleteEntry(index);
        });
    });
});

function deleteEntry(index) {
    if (confirm("Are you sure you want to delete this entry?")) {
        let entries = JSON.parse(localStorage.getItem("entries")) || [];
        entries.splice(index, 1);
        localStorage.setItem("entries", JSON.stringify(entries));
        window.location.reload();
    }
}
