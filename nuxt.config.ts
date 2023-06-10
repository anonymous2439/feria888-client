// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
      pageTransition: { name: 'page', mode: 'out-in' }
    },
    css: [
        '~/assets/css/global.css',
        '@fortawesome/fontawesome-free/css/all.css',
        '~/assets/fonts/opensans.css',
        '~/assets/fonts/oswald.css'
    ],
    modules: ['nuxt-swiper'],
    generate: {
        routes: [
          '/profile'
        ]
    },
    runtimeConfig: {
        public: {
        //   baseURL: process.env.BASE_URL || 'http://localhost/api/public',
          baseURL: process.env.BASE_URL || 'https://feria888.com/api',
        },
    },

    // nitro: {
    //     routeRules: {
    //         '/api': { proxy: 'http://39.98.58.238:8594' },
    //         "/proxy/**": { proxy: '/api/**' },
    //       }
    // },
})
