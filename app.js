var express = require('express')
var app = express()
var server = require('http').createServer(app)
var io = require('socket.io')(server)

io.on('connection',function (socket) {
    socket.on('chat',function (user,msg) {
        console.log(user + msg)
        io.sockets.emit('chat from server',user + '说:' + msg)
    })
})

server.listen(3000)
app.use(express.static('./public'))