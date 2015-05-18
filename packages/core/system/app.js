'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module,
  favicon = require('serve-favicon');

var SystemPackage = new Module('system');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
SystemPackage.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  SystemPackage.routes(app, auth, database);

  SystemPackage.aggregateAsset('css', 'common.css');

    //Lib Aggregated files

    var jsDir = '../lib/js/';
    var cssDir = '../lib/css/';
   // var imgDir = '../lib/css/';

    console.log(cssDir);
    //css
    SystemPackage.aggregateAsset('css',cssDir + 'bootstrap.min.css');
    SystemPackage.aggregateAsset('css',cssDir +'fancybox/jquery.fancybox.css');
    SystemPackage.aggregateAsset('css',cssDir + 'flexslider.css');
    SystemPackage.aggregateAsset('css',cssDir + 'style.css');
    SystemPackage.aggregateAsset('css',cssDir +'skins/default.css');
    //js
    SystemPackage.aggregateAsset('js',jsDir + 'jquery.js');
    SystemPackage.aggregateAsset('js',jsDir + 'jquery.easing.1.3.js');
    SystemPackage.aggregateAsset('js',jsDir + 'bootstrap.min.js');
    SystemPackage.aggregateAsset('js',jsDir + 'jquery.fancybox.pack.js');
    SystemPackage.aggregateAsset('js',jsDir + 'jquery.fancybox-media.js');
    SystemPackage.aggregateAsset('js',jsDir + 'google-code-prettify/prettify.js');
    SystemPackage.aggregateAsset('js',jsDir + 'portfolio/jquery.quicksand.js');
    SystemPackage.aggregateAsset('js',jsDir + 'portfolio/setting.js');
    SystemPackage.aggregateAsset('js',jsDir + 'jquery.flexslider.js');
    SystemPackage.aggregateAsset('js',jsDir + 'animate.js');
    SystemPackage.aggregateAsset('js',jsDir + 'custom.js');



    SystemPackage.angularDependencies(['ui.router', 'mean-factory-interceptor']);

  // The middleware in config/express will run before this code

  // Set views path, template engine and default layout
  app.set('views', __dirname + '/server/views');

  // Setting the favicon and static folder
  app.use(favicon(__dirname + '/public/assets/img/favicon.ico'));

  // Adding robots and humans txt
  app.useStatic(__dirname + '/public/assets/static');

  SystemPackage.menus.add({
    title: 'Log Out',
    link: 'Log Out',
    roles: ['authenticated'],
    menu: 'account'
  });
  

  return SystemPackage;

});
