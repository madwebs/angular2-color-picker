/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    // map tells the System loader where to look for things
    var map = {
            'app':                        'app',

        '@angular':                   'https://npmcdn.com/@angular', // sufficient if we didn't pin the version
        '@angular/router':            'https://npmcdn.com/@angular/router' + routerVer,
        '@angular/forms':             'https://npmcdn.com/@angular/forms' + formsVer,
        '@angular/router-deprecated': 'https://npmcdn.com/@angular/router-deprecated' + routerDeprecatedVer,
        'angular2-in-memory-web-api': 'https://npmcdn.com/angular2-in-memory-web-api', // get latest
        'rxjs':                       'https://npmcdn.com/rxjs@5.0.0-beta.6',
        'ts':                         'https://npmcdn.com/plugin-typescript@4.0.10/lib/plugin.js',
        'typescript':                 'https://npmcdn.com/typescript@1.9.0-dev.20160409/lib/typescript.js',
        'angular2-color-picker': 'node_modules/angular2-color-picker'
    };
    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app': {main: 'main.js', defaultExtension: 'js'},
        'rxjs': {defaultExtension: 'js'},
        'angular2-in-memory-web-api': {main: 'index.js', defaultExtension: 'js'},
        'angular2-color-picker': {main:'index.js', defaultExtension: 'js'}
    };
    var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'forms',
        'http',
        'platform-browser',
        'platform-browser-dynamic',
        'router',
        'router-deprecated',
        'upgrade',
    ];
    // Individual files (~300 requests):
    function packIndex(pkgName) {
        packages['@angular/' + pkgName] = {main: 'index.js', defaultExtension: 'js'};
    }
    // Bundled (~40 requests):
    function packUmd(pkgName) {
        packages['@angular/' + pkgName] = {main: 'bundles/' + pkgName + '.umd.js', defaultExtension: 'js'};
    }
    // Most environments should use UMD; some (Karma) need the individual index files
    var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
    // Add package entries for angular packages
    ngPackageNames.forEach(setPackageConfig);
    var config = {
        map: map,
        packages: packages
    };
    System.config(config);
})(this);
