document.addEventListener("DOMContentLoaded", function() {
    let formData = JSON.parse(localStorage.getItem("formData"));
  
    if (formData) {
      let tableBody = document.getElementById("table-body");
      
      let row = document.createElement("tr");
      row.innerHTML = `
        <td>${formData.name}</td>
        <td>${formData.age}</td>
        <td>${formData.classdetail}</td>
        <td>${formData.city}</td>
        <td>${formData.hobbies}</td>
        <td>${formData.gender}</td>
      `;
  
      tableBody.appendChild(row);
    } else {
      document.querySelector(".content").innerHTML = "<p>No data found. Please submit the form.</p>";
    }
  });
  