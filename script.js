function saveFormData(event) {
    event.preventDefault(); 
    let formData = {
      name: document.getElementById("name").value,
      age: document.getElementById("age").value,
      classdetail: document.getElementById("classdetail").value,
      city: document.getElementById("city").value,
      hobbies: document.getElementById("hobbies").value,
      gender: document.querySelector('input[name="gender"]:checked')?.value || "Not specified",
    };
  
    localStorage.setItem("formData", JSON.stringify(formData))
    window.location.href = "display.html";
  }
  