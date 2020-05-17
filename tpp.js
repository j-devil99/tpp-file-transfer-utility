let input = process.argv.slice(2);

let cmd = input[0];

switch (cmd) {
  case "view":
    console.log("view command is implemented");
    break;
  case "treefy":
    console.log("treefy command is implemented");
    break;
  case "untreefy":
    console.log("untreefy command is implemented");
    break;
  case "help":
    console.log("help command is implemented");
    break;
  default:
    console.log("enter a valid command");
}