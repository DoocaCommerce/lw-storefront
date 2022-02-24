import { io } from 'socket.io-client'

function createSocket(hash, onUpdate, onFocus) {
  const URL = 'http://localhost:3030'
  const socketIO = io(URL, { autoConnect: false, query: { hash } })

  socketIO.connect()
  socketIO.on('UPDATE_SETTINGS_DATA', onUpdate)
  socketIO.on('FOCUS_SECTION', onFocus)

  socketIO.on('connect', () => {
    console.log('socketId', socketIO.id)
  })
}

export default createSocket
