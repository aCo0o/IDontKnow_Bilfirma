module.exports = function() {
  var appRoot = m.path.normalize(__dirname +'/');
  
  g.settings = {
    appRoot: appRoot,
    classLoader: {
      baseDir: m.path.join(appRoot,'classes/'),
      toLoad: [
        'DB',
        'REST',
        'Server',
        'LessWatch',
        'sql'
      ]
    },
    Server: {
      endpoint: '*',
      webroot: 'public',
      indexFile: 'index.html',
      port: 3000
    },
    LessWatch: {
      paths: {
        watchDirs: [
          './less/**/*.less'
        ],
        lessInput: [
          './less/all.less'
        ],
        cssOutput: './www/css'
      }
    },
    DB: {
      host: '127.0.0.1',
      db: 'vilBerkstad',
      modelDir: m.path.join(appRoot,'models/')
    },
    REST: {
      route: '/:databas/:model/:modelid?'
    }
  };
};