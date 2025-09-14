const args = process.argv.slice(2); // captures everything after "node file.js"

if (args[0] === undefined) {
  console.log("No argument");
} else {
  console.log(args[0]);
}
