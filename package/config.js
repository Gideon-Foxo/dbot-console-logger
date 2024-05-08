export default {

    // This is the offset for the hour that shows on the timestamps. Default EST
    offset: -5,

    // This toggles if spacing is on or off
    spacing: false,

    // Turns on or off the log (could be useful to disable something in a prod or test build)
    debug: true,
    info: true,
    warn: true,
    error: true,

    
    // Format for the timestamp. Read here for formatting https://momentjs.com/docs/#/displaying/
    date: "DD/MM/YY",
    time: "HH:mm:ss",


    // Colors! Here are the ansi256 colors. Run "npm run test" to show all colors on your console
    timestamp: 247,
    error: 196,
    warn: 214,
    info: 123,
    debug: 36
}