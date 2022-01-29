const log = require('./index.js');
const config = require('./config.js');


console.log("Shows your console support for chalk.")
console.log(log.chalk.default.supportsColor);
console.log("A list of all of the colors you can set in config.js")

console.log("\n")
for (let i = 0; i < 256; i++) console.log(log.chalk.bold.ansi256(i)(i +" this is a test"))
console.log("\n")

// Shows what is on, if disabled it wont show
if (config.error) log.error("This is an error log. Aliases: e, err")
if (config.warn) log.warn("This is an warn log. Aliases: w, warning")
if (config.info) log.info("This is an info log. Aliases: i, information")
if (config.debug) log.debug("This is an debug log. Aliases: d, db, bug")
log.time("This is a timestamp. Aliases: t, ts, time")
console.log("Chalk is passed though with chalk and c. Learn more: https://www.npmjs.com/package/chalk")
console.log("Moment is also passed though with moment and m. Learn more: https://momentjs.com/docs/")