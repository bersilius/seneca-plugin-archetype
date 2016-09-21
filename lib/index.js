module.exports = function(options) {
    const seneca = this

    seneca.add('init: {{plugin_name}}', function(msg, respond) {
        console.log('init {{plugin_name}}')
        respond(null)
    })

    // Responds with an OK status
    seneca.add('role: {{plugin_name}}, cmd: isAlive', function(msg, respond) {
        console.log('called => role: {{plugin_name}}, cmd: isAlive')
        respond(null, { response: 'true\n' })
    });

    return '{{plugin_name}}';
}
