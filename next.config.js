const path = require("path")

module.exports = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en"
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack", "url-loader"]
    })

    return config
  },
  sassOptions: {
    includePaths: [
      path.join(__dirname, "src/styles"),
      path.join(__dirname, "node_modules")
    ]
  }
}
