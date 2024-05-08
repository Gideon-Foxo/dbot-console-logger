import chalk from 'chalk'
import moment from 'moment'

// Import our config file. Here you can fine tune how this package works.
import config from './config.js'


// This changes spacing if enabled or disabled
let names = {
    error: "Error",
    warn: "Warn",
    info: "Info",
    debug: "Debug"
} 
if (config.spacing) names = {
    error: names.error,
    debug: names.debug,
    warn: "Warn ",
    info: "Info "
}



// This function returns a timestamp that is put
const time = function() {
    // Sets the offset for the time stamps
    let t = moment().utcOffset(config.offset * 60)
    //Creates the timestamps. 
    return `[${chalk.bold.ansi256(config.timestamp)(t.format(config.date))}][${chalk.bold.ansi256(config.timestamp)(t.format(config.time))}]`
}


// Error logging
const error = function (text, objects = null) {
    if (!config.error) return
    console.log(`${time()} [${chalk.bold.ansi256(config.error)(names.error)}] ${text}${(objects) ? "\n"+require("util").inspect(objects) : ""}`);
}

// Warn logging
const warn =  function (text, objects = null) {
    if (!config.warn) return
    console.log(`${time()} [${chalk.bold.ansi256(config.warn)(names.warn)}] ${text}${(objects) ? "\n"+require("util").inspect(objects) : ""}`)
}

// Info logging
const info =  function (text, objects = null) {
    if (!config.info) return
    console.log(`${time()} [${chalk.bold.ansi256(config.info)(names.info)}] ${text}${(objects) ? "\n"+require("util").inspect(objects) : ""}`)
}

// Debug logging
const debug =  function (text, objects = null) {
    if (!config.debug) return
    console.log(`${time()} [${chalk.bold.ansi256(config.debug)(names.debug)}] ${text}${(objects) ? "\n"+require("util").inspect(objects) : ""}`)
}



// EXPOORRTTTT TIMMMEEEE!!!
export default {
    error,
    err: error,
    e: error,

    warn,
    warning: warn,
    w: warn,

    info,
    i: info,

    debug,
    db: debug,
    d: debug,

    time,
    timestamp: time,
    ts: time,
    t: time,

    chalk,
    c: chalk,

    moment,
    m: moment
}