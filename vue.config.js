const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/Movies-And-TV-Shows-Streaming-Platform-VueJS/"
      : "/",
  transpileDependencies: ["vuetify"],
});
