// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["bootstrap/dist/css/bootstrap.min.css" , '~/assets/css/responsive.css' , '~/assets/css/common.css' , '~/assets/css/style.css'],
  app: {
    head: {
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",
          type: "text/javascript",
        },
      ],
    },
  },
})
