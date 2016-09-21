const seneca = require('seneca')()
const plugin = require('./index')

seneca.use(plugin)

describe('{{plugin_name}}', function() {

    it('isAlive', function(done) {
        seneca.act('role: {{plugin_name}}, cmd: isAlive', function(err, data) {
            console.log('response to isAlive:', err, data)
            if (err === null) {
                done(err)
            }
        })
    })
})
