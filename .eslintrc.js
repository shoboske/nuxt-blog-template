module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:prettier/recommended',
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'prettier',
  ],
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  rules: {
    "no-console": "off",
    "vue/no-v-html": "off",
    "vue/html-self-closing": "off",
    "nuxt/no-timing-in-fetch-data": "off"
  },
}
