const fs = require('fs');
const filename = 'data.txt';
fs.readFile(filename, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading the file "${filename}": ${err.message}`);
    return;
  }
  const wordCount = countWords(data);
  console.log(`Total word count in "${filename}": ${wordCount}`);
});
function countWords(text) {
  const cleanedText = text.replace(/\s+/g, ' ').trim();
  const words = cleanedText.split(' ');
  const filteredWords = words.filter((word) => word !== '');
  return filteredWords.length;
}
