exports.modifyWebpackConfig = function(config, env) {
    config._config.output.publicPath = '';

    return config
}