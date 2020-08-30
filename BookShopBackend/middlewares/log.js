var dateTime = require("date-time");

log = (req, res, next) => {
  let currentTime = dateTime();
  let method = req.method;
  let url = req.url;
  let log = currentTime + " " + method + " " + url;
  let logArray = [];
  logArray.push(log);
  console.log(logArray);
  next();

  // var fs = require("fs");
  // fs.appendFileSync("log_file.txt", log +"\n");
};

module.exports = log;