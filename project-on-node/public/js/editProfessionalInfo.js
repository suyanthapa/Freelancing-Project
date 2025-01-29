document.getElementById('editBtn').addEventListener('click', function() {
  // Get all input fields in the professional info section
  const inputs = document.querySelectorAll('#professional-info input');

  // Enable all input fields by removing the 'disabled' attribute
  inputs.forEach(input => {
    input.disabled = false;
  });

  // Hide the 'Edit' button and show the 'Save' and 'Cancel' buttons
  document.getElementById('editBtn').classList.add('hidden');
  document.getElementById('saveBtn').classList.remove('hidden');
  document.getElementById('cancelBtn').classList.remove('hidden');
});

document.getElementById('saveBtn').addEventListener('click', function() {
  // Get all input fields in the professional info section
  const inputs = document.querySelectorAll('#professional-info input');

  // Disable all input fields after saving
  inputs.forEach(input => {
    input.disabled = true;
  });

  // Hide the 'Save' and 'Cancel' buttons and show the 'Edit' button again
  document.getElementById('saveBtn').classList.add('hidden');
  document.getElementById('cancelBtn').classList.add('hidden');
  document.getElementById('editBtn').classList.remove('hidden');

  // Optionally, you can add form submission logic here to save the updated data
  // For example, sending an AJAX request to save the data on the server
});

document.getElementById('cancelBtn').addEventListener('click', function() {
  // Get all input fields in the professional info section
  const inputs = document.querySelectorAll('#professional-info input');

  // Reset the values of all input fields to their original values
  inputs.forEach(input => {
    // Assuming original data is stored as data-original-value
    input.value = input.getAttribute('data-original-value');
  });

  // Disable all input fields again
  inputs.forEach(input => {
    input.disabled = true;
  });

  // Hide the 'Save' and 'Cancel' buttons and show the 'Edit' button again
  document.getElementById('saveBtn').classList.add('hidden');
  document.getElementById('cancelBtn').classList.add('hidden');
  document.getElementById('editBtn').classList.remove('hidden');
});
