import NotesAPI from "./NotesAPI.js";
import NotesView from "./NotesView.js";

// NotesAPI.saveNote({
//   id: 123456,
//   title: "更新した2回目のメモです",
//   body: "更新したプログラミングマスター受講中",
// });

const app = document.getElementById("app");
const view = new NotesView(app, {
  onNoteSelect() {
    console.log("ノートが選択されました");
  },
});

console.log(NotesAPI.getAllNotes());
