import NotesAPI from "./NotesAPI.js";
import NotesView from "./NotesView.js";

export default class App {
  constructor(root) {
    this.note = [];
    this.activeNote = null;
    this.view = new NotesView(root, this._handlers());

    // 最初に呼ばれる
    this._refreshNotes();
  }

  _refreshNotes() {
    const notes = NotesAPI.getAllNotes();
    console.log(notes);

    this._setNotes(notes);

    if (notes.length > 0) {
      this._setActiveNote(notes[0]);
    }
  }

  _setActiveNote(note) {
    this.activeNote = note;
    this.view.updateActiveNote(note);
  }

  _setNotes(notes) {
    this.notes = notes;
    this.view.updateNoteList(notes);
  }

  _handlers() {
    return {
      onNoteSelect: (noteId) => {
        console.log(noteId + "のノートが選択されました");
        const selectedNote = this.notes.find((note) => note.id == noteId);
        this._setActiveNote(selectedNote);
      },
      onNoteAdd: () => {
        const newNote = {
          title: "新しいノート",
          body: "ここに本文を追加",
        };

        NotesAPI.saveNote(newNote);
        this._refreshNotes();
      },
      onNoteEdit: (title, body) => {
        NotesAPI.saveNote({
          id: this.activeNote.id,
          title: title,
          body: body,
        });

        this._refreshNotes();
      },
      onNoteDelete: (noteId) => {
        console.log(noteId + "のノートが削除されました");
      },
    };
  }
}
