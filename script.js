const editor = document.getElementById("editor");
const preview = document.getElementById("preview");

editor.addEventListener("input", () => {

let text = editor.value;

text = text.replace(/^# (.*$)/gim, "<h1>$1</h1>");
text = text.replace(/^## (.*$)/gim, "<h2>$1</h2>");

preview.innerHTML = text;

});
