import Fastify from 'fastify'
import router from 'fastify-socket.io'

class Chat {
  constructor(port) {
    this.port = port
    this.server = Fastify()

    this.start()
  }

  start() {
    this.server.register(router, {
      cors: {
        origin: process.env.ORIGIN,
      },
    })

    this.server.ready(err => {
      if (err) {
        console.log(err)
      }

      this.server.io.on('connect', socket => {
        socket.on('message', message => {
          socket.broadcast.emit('message', message)
        })
      })
    })

    this.server.listen(this.port)
  }
}

export default Chat
