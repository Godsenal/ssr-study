import http from "http";
import Server from "./server";

let cnt = 0;
const server = new Server();
server.init();
let currentApp = server.app;
let httpServer = http.createServer(currentApp);

httpServer.listen(3000, () => console.log("f"));

if (module.hot) {
  module.hot.accept(["./server", "../shared/App"], () => {
    httpServer.close(() => {
      const newServer = new Server();
      newServer.init();
      httpServer = http.createServer(newServer.app);
      httpServer.listen(3000, () => console.log("f"));
      console.log(httpServer.listenerCount("request"));
    });
  });
}
