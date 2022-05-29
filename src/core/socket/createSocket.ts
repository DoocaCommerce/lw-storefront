import { io } from 'socket.io-client'

function createSocket(hash, onUpdate, onFocus) {
  const URL = 'http://localhost:3030'
  const socketIO = io(URL, { autoConnect: false, query: { hash } })

  socketIO.connect()
  socketIO.on('UPDATE_SETTINGS_DATA', onUpdate)
  socketIO.on('FOCUS_SECTION', onFocus)
}

export default createSocket
