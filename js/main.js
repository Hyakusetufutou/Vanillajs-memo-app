import NotesAPI from "./NotesAPI.js";
import NotesView from "./NotesView.js";

// NotesAPI.saveNote({
//   id: 123456,
//   title: "更新した2回目のメモです",
//   body: "更新したプログラミングマスター受講中",
// });

const app = document.getElementById("app");
const view = new NotesView(app, {
  onNoteSelect(id) {
    console.log(id + "のノートが選択されました");
  },
  onNoteAdd() {
    console.log("ノートが追加されました");
  },
  onNoteEdit(newTitle, newBody) {
    console.log(newTitle);
    console.log(newBody);
  },
  onNoteDelete(id) {
    console.log(id + "のノートが削除されました");
  },
});

console.log(NotesAPI.getAllNotes());

const notes = NotesAPI.getAllNotes();

view.updateNoteList(notes);
