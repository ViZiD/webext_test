const path = require("path");
const { merge } = require("webpack-merge");

module.exports = {
  webpack: (config, { src, target, dev, vendor }) => {
    var target = path.resolve(target.replace("[vendor]", vendor));
    config.devtool = false;
    config.module = merge(config.module ?? {}, {
      noParse: [/test\.js$/],
    });
    return config;
  },
};
