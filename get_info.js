const path = require('path');
const fs   = require('fs');
const ytdl = require('./lib/index');
const id  = 'qR9fuHodXG4';

const filepath = path.resolve(__dirname, 'info.json');

ytdl.getInfo(id, (err, info) => {
  if (err) throw err;
  console.log('title:', info.title);
  console.log('rating:', info.avg_rating);
  console.log('uploaded by:', info.author.name);
  console.log('uploaded by:', info.streamingData.formats.url);
  const json = JSON.stringify(info, null, 2)
    .replace(/(ip(?:=|%3D|\/))((?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|[0-9a-f]{1,4}(?:(?::|%3A)[0-9a-f]{1,4}){7})/ig, '$10.0.0.0');
  fs.writeFile(filepath, json, err => {
    if (err) throw err;
  });
});
