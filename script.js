let main = document.querySelector("#app");
let button = document.querySelector(".btn");

function notes() {
    let note = document.createElement("textarea");
    main.appendChild(note);
    note.placeholder="Empty note";
    main.insertBefore(note,button)

    note.addEventListener("dblclick", () => {
        const warning = confirm("Do you want to delete this note?");
        if (warning) {
          note.remove();
        }
      });
}
button.addEventListener("click",notes)