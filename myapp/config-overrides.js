// config-overrides.js
module.exports = function override(config, env) {
    module: {
        rules: [
          {
            loader: "eslint-loader",
            options: {
            /* this is the eslint-loader option */
              failOnWarning: false,
              failOnError: false
            }
          }
        ]
      }
    return config
}