/**
 * Created by AlejandroC on 10/2/2017.
 */

class RoutesHelper {
  constructor(app){
      this.app = app;
  }

  initRoute(route){
      this.notifyRoute(route);
      switch (route.method){
          case "GET":
              this.app.get(route.endpoint, route.handler);
              break;
          case "PUT":
              this.app.put(route.endpoint, route.handler);
              break;
          case "POST":
              this.app.post(route.endpoint, route.handler);
              break;
          case "DELETE":
              this.app.delete(route.endpoint, route.handler);
              break;
          default:
              throw new Error("Invalid http method "+route.method);
      }
  }

  notifyRoute(route){
      console.log(`Activating endpoint: ${route.endpoint} -> ${route.method}`)
  }
}

module.exports = RoutesHelper;