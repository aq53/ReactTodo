var moment = require('moment');

console.log(moment().format());
var timestamp= moment().unix();
console.log("Current timestamp: ",moment.unix(timestamp).format('MMM Do YYYY @ h:mm a'));