const fs = require('fs');
const date = new Date();
fs.writeFileSync('latestdate.txt', date, 'utf8');
console.log("Sync Write Complete");