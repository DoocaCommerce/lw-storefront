import { io } from 'socket.io-client';
function createSocket(hash, onUpdate, onFocus) {
    var URL = 'http://localhost:3000';
    var socketIO = io(URL, { autoConnect: false, query: { hash: hash } });
    socketIO.connect();
    socketIO.on('UPDATE_SETTINGS_DATA', onUpdate);
    socketIO.on('FOCUS_SECTION', onFocus);
    socketIO.on('connect', function () {
        console.log('Room', hash);
        console.log('socketed', socketIO.id);
    });
}
export default createSocket;
