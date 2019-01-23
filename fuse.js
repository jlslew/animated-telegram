var FB = require('fuse-box');

var fuse = FB.FuseBox.init({
    output: '$name.min.js',
    target: 'browser',
    homeDir: '.',
    plugins: [
        (FB.QuantumPlugin)({
            bakeApiIntoBundle: true,
            treeshake: true,
            uglify: true
        })
    ]
});

fuse.bundle('app').cache(false)
    .instructions(' > index.js');

fuse.run();
