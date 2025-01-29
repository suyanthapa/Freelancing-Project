function showSection(section) {
  // Hide all sections
  document.getElementById('basic-info').classList.add('hidden');
  document.getElementById('professional-info').classList.add('hidden');

  // Show selected section
  document.getElementById(`${section}-info`).classList.remove('hidden');

  // Update active tab
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
}

// Show Basic Info by default
document.addEventListener("DOMContentLoaded", () => {
  showSection('basic');
});
