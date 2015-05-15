'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Fitcar = new Module('fitcar');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Fitcar.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Fitcar.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Fitcar.menus.add({
    title: 'fitcar example page',
    link: 'fitcar example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Fitcar.aggregateAsset('css', 'fitcar.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Fitcar.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Fitcar.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Fitcar.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Fitcar;
});
