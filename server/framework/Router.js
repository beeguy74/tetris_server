class Router {
  constructor() {
    this.routes = new Map();
  }

  use(event, controller) {
    this.routes.set(event, controller);
  }
}

module.exports = Router;