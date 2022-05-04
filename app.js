const fs = require('fs');
const generatePage = require('./src/page-template.js');
const profileDataArgs = process.argv.slice(2);
const [theName, github] = profileDataArgs;

fs.writeFile('index.html', generatePage(theName, github), err => {
  if (err) throw err;

  console.log('Portfolio complete! Check out index.html to see the output!');
});
