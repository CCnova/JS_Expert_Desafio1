const { createService } = require("./factories.js");

const service = createService();

const routes = {
  "GET:/team": async (request, response) => {
    const team = await service.getTeam();
    response.writeHeader(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(team));
  },

  default: (request, response) => {
    response.writeHeader(200);
    response.end("Go to route /team to see the pokemons we have...");
  },
};

function handler(request, response) {
  const { url, method } = request;
  const routeKey = `${method}:${url}`;
  const routeHandler = routes[routeKey] ?? routes.default;
  return routeHandler(request, response);
}

module.exports = {
  routes,
  handler,
};
