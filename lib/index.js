const pluginName = '{{package_name}}'

module.exports = function(options) {
    const seneca = this

    seneca.add(`init: ${pluginName}`, function(msg, respond) {
        seneca.log.info('init ' + pluginName)
        respond(null)
    })

    // Responds with an OK status
    seneca.add(`role: ${pluginName}, method: GET, uri: /monitoring/isAlive`, function(msg, respond) {
        seneca.log.info(`called => role: ${pluginName}, method: GET, uri: /monitoring/isAlive`)
        respond(null, { statusCode: 200, body: { message: "OK" } })
    })

    return pluginName
}
