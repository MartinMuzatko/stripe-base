var autoprefixer = require('autoprefixer')

module.exports = {
    entry: './index.js',
    output: {
        path: './',
        filename: 'bundle.js',
        sourceMapFilename: "[name].js.map",
    },
    module: {
        preLoaders: [
            { test: /\.js$/, loader: 'source-map' },
        ],
        loaders: [
            { test: /\.html$/, loader: 'html'},
            { test: /\.(jpe?g|png|gif|svg|mp4)$/i, loader: 'file'},
            { test: /\.js$/, loader: 'babel', query: { presets: 'es2015' }},
            { test: /\.less$/, loader: 'style!css?minimize!postcss!less'},
        ]
    },
    postcss: () => {
        return [
            autoprefixer({browsers: 'last 2 versions'})
        ];
    },
    eslint: {
        configFile: './.eslintrc'
    },
    devtool: 'source-map'
}
