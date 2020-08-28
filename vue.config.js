module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '' // Ex.: si je mets '/production-sub-path/' ->  commpile css /production-sub-path/css/app.25e5ee50.css
    : '/',

  pwa: {
    name: 'AC Conseils',
    themeColor: '#f96332',
    msTileColor: '#2ca8ff',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#f96332',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'service-worker.js',
    },
  },
  lintOnSave: false,
};
