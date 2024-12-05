const editor = document.getElementById("editor");

function saveText() {
  localStorage.setItem("editorContent", editor.value);
}

function loadText() {
  const savedText = localStorage.getItem("editorContent");
  if (savedText) {
    editor.value = savedText;
  }
}

loadText();

editor.addEventListener("input", saveText);
