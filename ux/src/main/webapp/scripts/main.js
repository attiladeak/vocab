/**
 * Created by attila.deak on 3/5/2017.
 */

// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({

    baseUrl: 'scripts/lib',
    paths: {
        jquery : 'jquery.min',
         app : '../app'
    },

    shim : {
        //'jquery': {
        //    deps : ['app/page'],//needed because otherwise paje.js would be executed earlier and jquery not recognized
        //    exports: '$'
        'bootstrap.min' : {
            deps : ['jquery']
        }
    }


});
// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['app/app']);