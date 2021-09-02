export default {
  target: "static",
  head: {
    title: "Hypercolor",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
  modules: [],
  build: {},
  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700, 900]
    }
  }
};
