const pluginName = '{{plugin_name}}'

module.exports = function(options) {
    const seneca = this

    seneca.add(`init: ${pluginName}`, function(msg, respond) {
        seneca.log.info('init ' + pluginName)
        respond(null)
    })

    // Responds with an OK status
    seneca.add(`role: ${pluginName}, cmd: isAlive`, function(msg, respond) {
        seneca.log.info(`called => role: ${pluginName}, cmd: isAlive`)
        respond(null, { response: 'true\n' })
    });

    return pluginName;
}
