module JournalEntry {
    export interface IJournal {
      title: string;
      entry: string;
    }

    export class Journal implements IJournal {
      constructor (public title: string, public entry: string) {}

    wordCount() {
      var entryLength = this.entry;
      return entryLength.split(' ').length;
    }

    titleCheck() {
      if (this.title.length > 20) {
        alert("Your title is too long!");
      } else {
        return this.title;
      }
    }

    bodyCheck() {
      if(this.entry.length > 500) {
        alert("Your entry is too long!");
      } else {
        return this.entry;
      }
    }
  }
}
