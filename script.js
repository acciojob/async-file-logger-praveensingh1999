//your JS code here. If required.
const fileNames = [
  "file1.txt",
  "file2.txt",
  "file3.txt",
  "file4.txt",
  "file5.txt",
];

// do not change the code above
// add your code here
files.forEach(file => {
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text(); // Read the response as text
        })
        .then(data => {
            console.log(data); // Log the content of the file
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
});