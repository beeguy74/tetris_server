import { io } from "socket.io-client";

// "undefined" means the URL will be computed from the `window.location` object
const URL = "http://0.0.0.0:3001";

io.on('rooms', (data) => console.log('rooms', data));

export const socket = io(URL);
