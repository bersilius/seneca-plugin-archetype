const expect = require('chai').expect
const seneca = require('seneca')(/*{ log: { level: 'warn+' } }*/)
const plugin = require('./index')
const pluginName = "{{package_name}}"

before(function(done) {
    this.seneca = seneca
        .use(plugin)
        .ready(function() {
            done()
        })
})

after(function() {
    seneca.act('role:seneca,cmd:close')
})

describe(`${pluginName}`, function() {

    it('isAlive', function(done) {
        seneca.act(`role: ${pluginName}, method: GET, uri: /monitoring/isAlive`, function(err, data) {
            seneca.log.info('response to isAlive:', err, data)
            if (err === null) {
                expect(data).to.eql({ statusCode: 200, body: { message: "OK" } })
                done(err)
            }
        })
    })
})
