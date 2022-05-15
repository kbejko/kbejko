import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      name: 'viewport', content: 'width=device-width, initial-scale=1',
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Klajdi's home on the internets."
        }
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "stylesheet",
          href:
            "https://fonts.googleapis.com/css2?family=Recursive:slnt,wght,CASL,CRSV,MONO@-15..0,300..1000,0..1,0..1,0..1&display=swap"
        }
      ],
    }
  }
})
