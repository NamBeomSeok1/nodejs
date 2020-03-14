var fs = require('fs');
var date = new Date();
fs.writeFileSync('latestdate.txt', date, 'utf8');
  console.log("Sync Write Complete");