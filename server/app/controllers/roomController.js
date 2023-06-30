exports.newRoom = function newRoom(data) {
    console.log(`newRoom: ${data}`);
    this.dataService.add('rooms', data, this.socket.id);
    this.socket.join('data');
}