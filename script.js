document.getElementById("contactLink").addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("contactModal").style.display = "block";
});

document.getElementById("closeModal").addEventListener("click", function() {
  document.getElementById("contactModal").style.display = "none";
});
