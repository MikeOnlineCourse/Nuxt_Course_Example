export default defineNuxtConfig({
  "modules": [
    '@nuxtjs/i18n'
  ],
  "i18n": {
    "strategy": 'no_prefix',
    "locales": [
      {
        "code": 'zh-TW',
        "file": 'zh-TW.json'
      },
      {
        "code": 'en-US',
        "file": 'en-US.json'
      },
      {
        "code": 'ja-JP',
        "file": 'ja-JP.json'
      },
    ],
    "langDir": 'language',
    "defaultLocale": 'zh-TW',
    "detectBrowserLanguage": {
      "useCookie": true,
    }
  },
})
