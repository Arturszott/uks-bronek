import path from 'path';

exports.modifyWebpackConfig = function(config) {
    config._config.output.publicPath = '';
    config._config.resolve.modulesDirectories.push('styles');

    return config;
}