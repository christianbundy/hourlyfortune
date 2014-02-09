var Twit = require('twit')
var config = require('./config.js');

var exec = require('child_process').exec;
var T = new Twit(config);
function execute(command, callback){
  exec(command, function(error, stdout, stderr){ callback(stdout); });
};

// run every hour
setInterval(function () {
  execute('fortune -s -n 140', function (fortune) {
    T.post('statuses/update', { status: fortune }, function(err, reply) {
      if (err) throw err;
      console.log(fortune);
    });
  });
},60*60*1000);
