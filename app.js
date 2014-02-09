var config =  require('./config.js');
var Twit =    require('twit');
var child =    require('child_process');
var twitter = new Twit(config);

setInterval(function () {
  child.exec('fortune -s -n 140', function (error, stdout, stderr) {
    if (error) throw error;
    if (stderr) throw stderr;
    twitter.post('statuses/update', { status: stdout }, function(err, response) {
      if (err) throw err;
      console.log(stdout);
    });
  });
}, 60 * 60 * 1000);

