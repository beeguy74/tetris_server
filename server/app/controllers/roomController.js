exports.newRoom = function newRoom(data) {
    console.log(`newRoom: ${data}`);
    this.dataService.add('rooms', data, this.socket.id);
    this.socket.join('data');
}

exports.listRooms = function listRooms(data) {
    this.io.to(this.socket.id).emit('rooms',this.io.sockets.adapter.rooms);
}