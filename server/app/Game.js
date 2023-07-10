class Game{
  constructor(host, room) {
    this.host = host;
    this.room = room;
    this.isRun = false;
  };

  start() {
    this.isRun = true;
  }

};

module.exports = Game;
