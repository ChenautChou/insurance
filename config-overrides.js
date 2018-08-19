const { injectBabelPlugin } = require('react-app-rewired'); // 按需加载
const rewireLess = require('react-app-rewire-less'); // 样式重定义


module.exports = function override(config, env) {
    // do stuff with the webpack config...
    // 按需加载
    config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);
    config = rewireLess.withLoaderOptions({
            javascriptEnabled: true, modifyVars: { "@primary-color": "#1DA57A" },
       })(config, env);

    return config;
};