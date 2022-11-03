const chalkPipe = reqwuire('chalk-pipe');

const error = (log) => {
    console.log(chalkPipe('red.bold')(`ERROR: ${log}`))
}

module.exports.logger.error = error

const warn = (log) => {
    console.log(chalkPipe('yellow.italic.bold')(`WARN: ${log}`))
}

module.exports.logger.warn = warn

const success = (log) => {
    console.log(chalkPipe('green.bold')(`SUCCESS: ${log} ✅`))
}

module.exports.logger.success = success

const info = (log) => {
    console.log(chalkPipe('white.bold')(`INFO: ${log}`))
}

module.exports.logger.info = info
