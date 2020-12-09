const proxy = require("http-proxy-middleware");

const Config = require("../config/const");

module.exports = function(app) {
  app.use(
    proxy("/proxyXcn", {
      target: "http://localhost:4000",
      ws: true,
      changeOrigin: true,
      pathRewrite: {
        "^/proxyXcn": ""
      }
    })
  );
  app.use(
    proxy("/api", {
      target: "http://localhost:" + Config.proxy.port
    })
  );
  app.use(
    proxy("/kapi/socket", {
      target: "ws://localhost:" + Config.socket.port,
      ws: true
    })
  );
};
