exports.login = function login (name) {
    this.dataService.add('users', this.socket.id, name);
}