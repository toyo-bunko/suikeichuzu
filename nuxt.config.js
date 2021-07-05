import colors from 'vuetify/es5/util/colors'
const fs = require('fs')

const environment = process.env.NODE_ENV
const env = require(`./env/${environment}.ts`)

env.bc = true

env.index = "data/index_river.json"

env.aggs = {
  冊: {
    key: "冊",
    sort: 'name:asc',
    label: '冊',
    value: {},
    more: false,
    open:true
  },
  sort: {
    key: "sort",
    sort: '',
    label: 'sort',
    value: {},
    more: false,
    hide: true
  },
  記号: {
    key: "記号",
    sort: '',
    label: '記号',
    value: {},
    more: false,
    hide: true
  },
  図: {
    key: "図",
    sort: '',
    label: '図',
    value: {},
    more: false,
    open:true
  },
  区画南北: {
    key: "区画南北",
    sort: '',
    label: '区画南北',
    value: {},
    more: false,
    open:true
  },
  区画東西: {
    key: "区画東西",
    sort: '',
    label: '区画東西',
    value: {},
    more: false,
    open:true
  },
  墨朱: {
    key: "墨朱",
    sort: '',
    label: '墨朱',
    value: {},
    more: false,
    open:true
  },
  表裏: {
    key: "表裏",
    sort: '',
    label: '表裏',
    value: {},
    more: false,
    open:true
  },
  分類: {
    key: "分類",
    sort: '',
    label: '分類',
    value: {},
    more: false,
    open:true
  },
  記号説明: {
    key: "記号説明",
    sort: '',
    label: '記号説明',
    value: {},
    more: false,
    open:true
  },
  詳細区画: {
    key: "詳細区画",
    sort: '',
    label: '詳細区画',
    value: {},
    more: false,
    open:true
  },
  水名: {
    key: "水名",
    sort: '',
    label: '水名',
    value: {},
    more: false,
    open:true
  },
  "水経注：巻": {
    key: "水経注：巻",
    sort: '',
    label: '水経注：巻',
    value: {},
    more: false,
    open:true
  }
}

env.hide = ["sort"]

env.list = [
  "冊", "図"
]

env.detail = [
  {
    label: "冊",
    value: "冊"
  },
  {
    label: "記号",
    value: "記号"
  },
  {
    label: "図",
    value: "図"
  },
  {
    label: "区画南北",
    value: "区画南北"
  },
  {
    label: "区画東西",
    value: "区画東西"
  },
  {
    label: "墨朱",
    value: "墨朱"
  },
  {
    label: "表裏",
    value: "表裏"
  },
  {
    label: "分類",
    value: "分類"
  },
  {
    label: "記号説明",
    value: "記号説明"
  },
  {
    label: "詳細区画",
    value: "詳細区画"
  },
  {
    label: "水名",
    value: "水名"
  },
  {
    label: "水経注：巻",
    value: "水経注：巻"
  },
  {
    label: "備考",
    value: "備考",
    type: "text"
  },
  {
    label: "水経注図：冊子画像",
    value: "水経注図：冊子画像",
    type: "link"
  }
]

env.sort = [
  {label: "適合度", value: "_score"},
  {label: "冊", value: "冊"}
]

env.defaultSort = "冊:asc"

env.layout = [
  {
    label: 'list',
    value: 'list',
    icon: 'mdi-view-list',
    component: "search-layout-list"
  },
  {
    label: 'grid',
    value: 'grid',
    icon: 'mdi-view-grid',
    component: "search-layout-grid"
  },
  {
    label: 'table',
    value: 'table',
    icon: 'mdi-table',
    component: "custom-search-layout-table"
  },
  {
    label: 'graph',
    value: 'graph',
    icon: 'mdi-chart-bar',
    component: "search-layout-graph"
  },
  {
    label: 'map',
    value: 'map',
    icon: 'mdi-map',
    component: "custom-search-layout-map",
    hidePagination: true
  }
]

env.defaultLayout = "table"

const legend = JSON.parse(fs.readFileSync('static/data/legend.json'))
env.legend = legend

const kigo = []

for(const key in legend){
  const obj = legend[key]
  kigo.push({
    value: key,
    text: obj.分類 + (obj.記号説明 ? ": " + obj.記号説明 : "")
  })
}


env.advanced = [
  {
    label: "冊",
    type: "select",
    key: "冊",
    value: "",
    values: ['1', "2", "3", "4", "5", "6", "7", "8"]
  },
  {
    label: "図",
    type: "select",
    key: "図",
    value: "",
    values: ['本図', '越南', '西域']
  },
  {
    label: "区画南北",
    type: "select",
    key: "区画南北",
    value: "",
    values: ['南5', '南4', '南3', '南2', "南1", "中", "北1", "北2", "北3", "北4", "北5"]
  },
  {
    label: "区画東西",
    type: "select",
    key: "区画東西",
    value: "",
    values: ["東6", '東5', "東4", '東3', '東2', "東1", 
    "中", "西1", "西2", "西3", "西4", "西5", "西6", "西7", "西8", "西9", "西10", "西11", "西12"]
  },
  {
    label: "表裏",
    type: "select",
    key: "表裏",
    value: "",
    values: ['表', "裏"]
  },
  {
    label: "詳細区画",
    type: "select",
    key: "詳細区画",
    value: "",
    values: ["A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3", "D1", "D2", "D3"]
  },
  {
    label: "墨朱",
    type: "select",
    key: "墨朱",
    value: "",
    values: ['墨', "朱"]
  },
  {
    label: "記号",
    type: "select",
    key: "記号",
    value: "",
    values: kigo
  },
  {
    label: "地名/記述",
    type: "text",
    key: "地名/記述",
    value: "",
  },
  {
    label: "備考",
    type: "text",
    key: "備考",
    value: "",
  }
]

env.viewer = "curation"
env.visualization = "https://nakamura196.github.io/dd2"

const settings = JSON.parse(fs.readFileSync('static/data/settings.json'))
env.settings = settings

const norm = JSON.parse(fs.readFileSync('static/data/norm.json'))
env.itaiji =norm


// `DEPLOY_ENV` が `GH_PAGES` の場合のみ `router.base = '/<repository-name>/'` を追加する
const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: '/suikeichuzu/',
        },
      }
    : {}

// path
const baseUrl = env.BASE_URL || ''
const baseDir = env.BASE_DIR || '/'
const basePath = baseUrl + baseDir

// meta
const lang = 'ja'
const siteName = '水経注図'
env.siteName = siteName

const siteDesc = '水経注図のプロトタイプシステムです。'
env.siteDesc = siteDesc

const footer = '東洋文庫'
env.footer = footer

const siteKeywords = 'IIIF'

// images
const iconImages = baseDir + 'img/icons/'
const ogpImages = basePath + 'img/ogp/' // cdnPath + 'img/ogp/'

env.top = basePath + 'img/ogp/home.jpg'

// pwa
const shortName = '水経注'
const manifestIcon = 'img/icons/icon-512.png'
// const splashscreens = cdnPath + 'img/splashscreens/'

export default {
  server: {
    port: 8003 // デフォルト: 3000
  },
  // Target (https://go.nuxtjs.dev/config-target)

  ssr: false,
  target: 'static',
  // srcDir: 'src/',

  env,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#',
      lang,
    },
    titleTemplate: `%s - ${siteName}`,
    title: siteName,
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'format-detection',
        content: 'telephone=no, email=no, address=no',
      },
      // SEO関連
      { hid: 'description', name: 'description', content: siteDesc },
      { hid: 'keywords', name: 'keywords', content: siteKeywords },
      // ogp関連
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: siteName,
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: basePath },
      { hid: 'og:title', property: 'og:title', content: siteName },
      {
        hid: 'og:description',
        property: 'og:description',
        content: siteDesc,
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${ogpImages}home.jpg`,
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      // pwa iOS
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black-translucent',
      },
    ],
    link: [
      {
        rel: 'icon',
        sizes: '16x16',
        type: 'image/png',
        href: iconImages + 'favicon-16.png',
      },
      {
        rel: 'icon',
        sizes: '32x32',
        type: 'image/png',
        href: iconImages + 'favicon-32.png',
      },
      {
        rel: 'icon',
        sizes: '48x48',
        type: 'image/png',
        href: iconImages + 'favicon-48.png',
      },
      {
        rel: 'icon',
        sizes: '72x72',
        type: 'image/png',
        href: iconImages + 'favicon-72.png',
      },
      // apple touch icon
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: iconImages + 'apple-touch-icon.png',
      },
      {
        rel: 'stylesheet',
        href:
          'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
      },
    ],
  },

  manifest: {
    lang,
    name: siteName,
    short_name: shortName,
    description: siteDesc,
    background_color: '#ffffff',
    theme_color: '#ffffff',
    display: 'standalone',
    orientation: 'portrait',
  },
  icon: {
    iconFileName: manifestIcon,
  },

  loading: { color: '#E64A19', height: '5px' },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/utils.ts',
    '@/plugins/searchUtils.ts',
    '@/plugins/leaflet.js',
    '@/plugins/vue-reactivesearch.js',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/moment',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  moment: {
    // ここにオプションが記述できる
    locales: ['ja'],
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    'nuxt-i18n',
    // Simple usage
    // '@nuxtjs/amp',
    '@nuxt/content'
  ],

  sitemap: {
    path: '/sitemap.xml',
    hostname: baseUrl,
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  i18n: {
    locales: [
      { code: 'en', iso: 'en_US', file: 'en.json' },
      { code: 'ja', iso: 'ja_JP', file: 'ja.json' },
    ],
    defaultLocale: 'ja',
    vueI18nLoader: true,
    lazy: true,
    langDir: 'lang/',
    // strategy: 'no_prefix'
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    /*
    //standalone: true, // これを追加！
    babel: {
      plugins: [
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        ['@babel/plugin-proposal-class-properties', { loose: true }]
      ]
    }
    */
  },

  ...routerBase,

  generate: {},
}
