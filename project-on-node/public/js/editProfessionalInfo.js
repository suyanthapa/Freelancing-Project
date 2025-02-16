// Ensure the DOM is fully loaded before adding event listeners
document.addEventListener("DOMContentLoaded", function () {
  // Enable form fields for editing
  document.getElementById("editBtn").addEventListener("click", function () {
    // Make input fields editable
    document.getElementById("skills").disabled = false;
    document.getElementById("language").disabled = false;
    document.getElementById("education").disabled = false;
    document.getElementById("certifications").disabled = false;
    document.getElementById("portfolio").disabled = false;
    document.getElementById("website").disabled = false;
    document.getElementById("linkedIn").disabled = false;

    // Show save and cancel buttons, hide edit button
    document.getElementById("saveBtn").classList.remove("hidden");
    document.getElementById("cancelBtn").classList.remove("hidden");
    document.getElementById("editBtn").classList.add("hidden");
  });

  // Attach event listener for cancel button
  document.getElementById("cancelBtn").addEventListener("click", function () {
    cancelEdit();
  });

  // Attach event listener for save button
  document.getElementById("saveBtn").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default form submission
    saveProfessionalInfo();
  });

  // Function to cancel editing and revert fields
  function cancelEdit() {
    document.getElementById("skills").disabled = true;
    document.getElementById("language").disabled = true;
    document.getElementById("education").disabled = true;
    document.getElementById("certifications").disabled = true;
    document.getElementById("portfolio").disabled = true;
    document.getElementById("website").disabled = true;
    document.getElementById("linkedIn").disabled = true;

    document.getElementById("saveBtn").classList.add("hidden");
    document.getElementById("cancelBtn").classList.add("hidden");
    document.getElementById("editBtn").classList.remove("hidden");
  }

  // Function to save professional info
  function saveProfessionalInfo() {
    const skills = document.getElementById("skills").value;

    const language = document.getElementById("language").value;
    
    const education = document.getElementById("education").value;
    
    const certifications = document.getElementById("certifications").value;
    
    const portfolio = document.getElementById("portfolio").value;
    
    const website = document.getElementById("website").value;
    
    const linkedIn = document.getElementById("linkedIn").value;

    // Log data to check if values are retrieved correctly
    console.log("Saving data:", {
      skills,
      language,
      education,
      certifications,
      portfolio,
      website,
      linkedIn,
    });

    // Send the updated data to the server using fetch
    fetch("/accountSetting", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        skills,
        language,
        education,
        certifications,
        portfolio,
        website,
        linkedIn,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Server response:", data); // Debugging response

        if (data.success) {
          alert("Professional info updated successfully!");
          location.reload(); // Reload to reflect changes
        } else {
          alert("Error saving professional info.");
        }
      })
      .catch((error) => {
        console.error("Fetch Error:", error);
        alert("There was an error saving the information.");
      });
  }
});
