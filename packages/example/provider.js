const Web3 = require("web3");

module.exports = () => {
    const { WebsocketProvider } = Web3.providers;
    const provider = new WebsocketProvider("ws://localhost:23000");
    return new Promise((resolve) => {
        provider.on("connect", () => resolve(provider));
        provider.on("error", console.log);
    });
};