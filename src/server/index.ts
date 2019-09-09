import http from "http";
import "regenerator-runtime/runtime";
import Server from "./server";

(async () => {
  const listenServer = (PORT = 3000) => {
    const server = new Server();
    server.init();
    let currentApp = server.app;
    let httpServer = http.createServer(currentApp);

    return new Promise<typeof httpServer>(res => {
      httpServer.listen(PORT, () => {
        console.log("server is running");
        return res(httpServer);
      });
    });
  };

  let httpServer = await listenServer();

  if (module.hot) {
    module.hot.accept(["./server", "../shared/App"], () => {
      httpServer.close(async () => {
        httpServer = await listenServer();
      });
    });
  }
})();
