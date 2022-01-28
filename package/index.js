process.env.FORCE_COLOR = "true"
const chalk = require('chalk');
const moment = require('moment');

// Import our config file. Here you can fine tune how this package works.
const config = require('./config.js');



// This function returns a timestamp that is put
const time = function() {

    // Sets the offset for the time stamps
    let t = moment().utcOffset(config.offset * 60)
    //Creates the timestamps. 
    return `[${chalk.bold.ansi256(config.timestamp)(t.format(config.date))}][${chalk.bold.ansi256(config.timestamp)(t.format(config.time))}]`
}


// Error logging
const error = function (text, objects = null) {
    console.log(`${time()} [${chalk.bold.ansi256("1")("Error")}] ${text}${(objects) ? "\n"+require("util").inspect(objects) : ""}`);
}

// Warn logging
const warn =  function (text, objects = null) {
    console.log(`${time()} [${chalk.bold.ansi256(config.warn)("Warning")}] ${text}${(objects) ? "\n"+require("util").inspect(objects) : ""}`)
}

// Info logging
const info =  function (text, objects = null) {
    console.log(`${time()} [${chalk.bold.ansi256(config.info)("Info")}] ${text}${(objects) ? "\n"+require("util").inspect(objects) : ""}`)
}

// Debug logging
const debug =  function (text, objects = null) {
    console.log(`${time()} [${chalk.bold.ansi256(config.debug)("Debug")}] ${text}${(objects) ? "\n"+require("util").inspect(objects) : ""}`)
}

// Test logging
const test =  function (text, objects = null) {
    console.log(`${time()} [${chalk.bold.ansi256(1)("Debug")}] ${text}${(objects) ? "\n"+require("util").inspect(objects) : ""}`)
}





module.exports = {
    time,
    chalk,
    error,
    warn,
    info,
    debug,
    test
}