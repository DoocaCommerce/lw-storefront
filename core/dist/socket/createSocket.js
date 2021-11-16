"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_client_1 = require("socket.io-client");
function createSocket(hash, onUpdate, onFocus) {
    const URL = 'http://localhost:3000';
    const socketIO = (0, socket_io_client_1.io)(URL, { autoConnect: false, query: { hash } });
    socketIO.connect();
    socketIO.on('UPDATE_SETTINGS_DATA', onUpdate);
    socketIO.on('FOCUS_SECTION', onFocus);
    socketIO.on('connect', () => {
        console.log('Room', hash);
        console.log('socketed', socketIO.id);
    });
}
exports.default = createSocket;
//# sourceMappingURL=createSocket.js.map