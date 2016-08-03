exports.modifyWebpackConfig = function(config) {
    config._config.output.publicPath = '';

    return config;
}