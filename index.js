const path = require('path')
const moment = require('moment')
const util = require('util')
const events = require('events')
const Client = require('ssh2').Client
const fs = require('fs')

const server = {
    host: 'https://www.baidu.com',
    port: 22,
    username: 1,
    password: 2
}
/// do something
function doConnect(server, then) {
    const conn = new Client()
    conn.on('ready', function () {
        then && then(conn)
    }).on('error', function (err) {
        console.error('connect error!', err)
    }).on('close', function () {
        conn.end()
    }).connect(server)
}
