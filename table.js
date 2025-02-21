document.addEventListener("DOMContentLoaded", function () {
  fetch("http://localhost:3000/entries") 
      .then(response => response.json())
      .then(entries => {
          let placeholder = document.querySelector("#data-output");

          if (!placeholder) {
              console.error("Element with ID 'data-output' not found.");
              return;
          }

          let out = "";
          entries.forEach(product => {
              out += `
                  <tr id="row-${product.id}">
                      <td>${product.name}</td>
                      <td>${product.age}</td>
                      <td>${product.select}</td>
                      <td>${product.city}</td>
                      <td>${product.hobbies}</td>
                      <td>${product.gender}</td>
                      <td>
                          <div class="action-buttons">
                              <a href="edit.html?id=${product.id}" class="btn btn-edit">Edit</a>
                              <button class="btn btn-delete delete-btn" data-id="${product.id}">Delete</button>
                          </div>
                      </td>
                  </tr>
              `;
          });

          placeholder.innerHTML = out;

          document.querySelectorAll(".delete-btn").forEach(button => {
              button.addEventListener("click", function () {
                  let id = this.getAttribute("data-id");
                  deleteEntry(id);
              });
          });
      })
      .catch(error => console.error("Error fetching data:", error));
});

function deleteEntry(id) {
  if (confirm("Are you sure you want to delete this entry?")) {
    fetch(`http://localhost:3000/entries/${id}`, {
          method: "DELETE"
      })
      .then(response => {
          if (!response.ok) {
              console.error("Failed to delete entry.");
          }
          return response.json();
      })
      .then(() => {
          alert("Entry deleted successfully!");
          window.location.reload();
      })
      .catch(error => console.error("Error deleting entry:", error));
  }
}
