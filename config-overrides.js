const { override } = require("customize-cra")

const setPublicPath = () => (config) => {
  if (process.env.NODE_ENV === "development") {
    config.output.publicPath = "/AlgoLens/"
  }
  return config
}

module.exports = override(setPublicPath())
