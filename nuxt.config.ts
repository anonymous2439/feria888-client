// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    css: [
        '~/assets/css/global.css',
        '@fortawesome/fontawesome-free/css/all.css',
        '~/assets/fonts/opensans.css',
        '~/assets/fonts/oswald.css'
    ],
    modules: ['nuxt-swiper'],
    // generate: {
    //     routes: [
    //       '/admin'
    //     ]
    // },
    runtimeConfig: {
        public: {
        //   baseURL: process.env.BASE_URL || 'http://localhost/api/public',
          baseURL: process.env.BASE_URL || 'https://feria888.com/api',
        },
    },
})
