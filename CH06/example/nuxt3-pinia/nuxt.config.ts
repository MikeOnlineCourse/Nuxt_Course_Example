// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    "imports": {
        "dirs": ['stores']
    },
    "modules": [
        [
            '@pinia/nuxt',
            {
                'autoImports': ['defineStore', 'acceptHMRUpdate'],
            },
        ]
    ],
})
