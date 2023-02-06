const noteText = document.getElementById("note-text");
const saveButton = document.getElementById("save-button");

saveButton.addEventListener("click", function() {
  localStorage.setItem("note", noteText.value);
  alert("Note saved successfully!");
});

window.onload = function() {
  const savedNote = localStorage.getItem("note");
  if (savedNote) {
    noteText.value = savedNote;
  }
};
