const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "http://localhost:4200/",
    uniqueName: "Host",
  },
  plugins: [
    new ModuleFederationPlugin({
      remotes: {
        mfe1: "mfe1@http://localhost:4201/remoteEntry.js",
      },
      shared: ["@angular/core", "@angular/common", "@angular/router"],
    }),
  ],
};