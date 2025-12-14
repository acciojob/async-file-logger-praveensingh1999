// Given array (already provided in your file)
const files = [
  "file1.txt",
  "file2.txt",
  "file3.txt",
  "file4.txt",
  "file5.txt"
];

// Read all files asynchronously
Promise.all(
  files.map(file =>
    fetch(file).then(response => response.text())
  )
).then(contents => {
  contents.forEach(content => {
    console.log(content);
  });
}).catch(error => {
  console.error("Error reading files:", error);
});
