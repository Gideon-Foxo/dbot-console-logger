<h1 align="center">Discord Bot Console Logger</h1>

Custom formatted console logs designed to be used in Discord bots!

<h1 align="center">Demo!</h1>

Default logs

![Without spacing](https://cdn.discordapp.com/attachments/833171605366243330/936844216800256040/unknown.png)

Logs with spacing enabled

![With spacing](https://cdn.discordapp.com/attachments/833171605366243330/936847660596469810/unknown.png)

After installing run `npm run test` for a full test and demo.

<h1 align="center">Installation</h1>

To install simply run `npm install dbot-console-logger` 

Then require with `const log = require('dbot-console-logger');`.

Settings such as changing the time, timestamp format, logging colors and more can be found in the `config.js` file.

<h1 align="center">Usage</h1>

log.**error**("text", "inspect (optional))
> Logs errors to the console. Aliases: `e`, `err` 

log.**warn**("text", "inspect (optional))
> Logs errors to the console. Aliases: `w`, `warning` 

log.**info**("text", "inspect (optional))
> Logs errors to the console. Aliases: `i`, `information` 

log.**debug**("text", "inspect (optional))
> Logs errors to the console. Aliases: `d`, `db`, `bug` 

log.**timestamp**()
> Logs a timestamp to the console. Aliases: `t`, `ts`, `time` 

log.**chalk**(options)
> Passes chalk though. Learn more at https://www.npmjs.com/package/chalk. Aliases: `c`

log.**moment**(options)
> Passes moment.js though. Learn more at https://momentjs.com/docs/. Aliases: `m`

<h1 align="center">Support</h1>

If you need help or assistance please either ask in my [Discord server](https://discord.gg/q4jrwWPWEt) or [create a new issue](https://github.com/Gideon-foxo/dbot-console-logger/issues/new).





