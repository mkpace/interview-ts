/**
 * Exercise:
 * How would you refactor the following
 * to eliminate the "callback hell"?
 * Also, how would you clean-up this code to be more ES7-compliant?
 */
const errorMsg = "error";
interface Response {
  type: string;
  url: string;
}
const getConfig = (endpoint: string): Response => {
  const root = "http://localhost/api/v1";
  return {
    type: "get",
    url: `${root}/${endpoint}`
  };
};
interface Config {
  url: string;
}
const httpRequest = (config: Config, callback: Function): void => {
  // simulate a request
  // simulate a request
  setTimeout(function () {
    callback(null, `success calling: ${config.url}`);
  }, 500);
};

export const cbhell = async (cb: Function) => {
  let config = getConfig("orders");

  httpRequest(config, function (err: string, orders: Config) {
    if (err) throw new Error(err);

    config = getConfig("shipping");

    httpRequest(config, function (err: string, shipping: Config) {
      if (err) throw new Error(err);

      config = getConfig("tracking");

      httpRequest(config, function (err: string, tracking: Config) {
        if (err) throw new Error(err);

        cb(`orders: ${orders}`);
        cb(`shipped items: ${shipping}`);
        cb(`tracked items: ${tracking}`);
      });
    });
  });
};
