module.exports = {
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
