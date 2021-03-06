module.exports.help = function help() {
  let helpString = `
    NAME: 

      tpp - file transfer utility

    USAGE:

      node tpp [COMMAND]... [PATH ARGS(s)]... [MODE]...

    COMMANDS:

      view:

        To view the complete structure of a directory.

        TreeView (-t) :

          node tpp view dirPath -t

        FlatFileView (-f) :

          node tpp view dirPath -f

      treefy:

        To convert the complete structure of a directory into a JSON file, 
        and transfer the files to the destinantion path.

          node tpp treefy srcPath destPath

      untreefy:

        To create the directory structure from a JSON file, and transfer 
        the files.
        
          node tpp untreefy srcPath destPath.

      help:

        To view the documentation.
  `;
  console.log(helpString);
};
