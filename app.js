const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");


//add note
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    debugger;

    notes.addNote(argv.title, argv.body);
  }
});

// remove note
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.removeNote(argv.title);
  }
});

//list notes
yargs.command({
  command: "list",
  describe: "Lists all of your notes",
  handler() {
    notes.listNotes();
  }
});
//
yargs.command({
  command: "read",
  describe: "Reads a single note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.readNote(argv.title);
  }
})

yargs.parse();


