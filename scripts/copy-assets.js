const shell =  require("shelljs");

// Copy view templates
shell.cp( "-R", "src/views", "dist/" );