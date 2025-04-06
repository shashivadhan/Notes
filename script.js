function saveNote() {
    const noteInput = document.getElementById("noteInput");
    const noteText = noteInput.value.trim();
    if (noteText === "") return;
  
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(noteText);
    localStorage.setItem("notes", JSON.stringify(notes));
    noteInput.value = "";
    showNotes();
  }
  
  function deleteNote(index) {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    showNotes();
  }
  
  function showNotes() {
    const notesList = document.getElementById("notesList");
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notesList.innerHTML = "";
    notes.forEach((note, index) => {
      notesList.innerHTML += `
        <div class="note">
          ${note}
          <button onclick="deleteNote(${index})">Delete</button>
        </div>`;
    });
  }
  
  window.onload = showNotes;
  