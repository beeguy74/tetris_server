exports.login = function login (name) {
    console.log(`name: ${name}`);
    this.dataService.add(this.socket.id, name);
    console.log(this.dataService);
}