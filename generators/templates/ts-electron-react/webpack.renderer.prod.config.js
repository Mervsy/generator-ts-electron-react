const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const baseConfig = require('./webpack.renderer.config');

module.exports = merge.smart(baseConfig, {
	mode: 'production',
	plugins: [new TerserWebpackPlugin()]
});
