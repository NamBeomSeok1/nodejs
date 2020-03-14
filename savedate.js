var fs = require('fs');
<<<<<<< HEAD
var date =new Date();
=======
var date = new Date();
>>>>>>> master
fs.writeFileSync('latestdate.txt', date, 'utf8');
  console.log("Sync Write Complete");