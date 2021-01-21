const path = require('path');

function resolve (dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: './',
  devServer: {
    // can be overwritten by process.env.HOST
    host: '0.0.0.0',
    port: 8080
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('src', resolve('src'))
      .set('common', resolve('src/common'))
      .set('components', resolve('src/components'));
  },

  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        productName: 'OurFavourites'
      }
    }
  }
};

// devServer 用于设置开发环境的服务，这里表示在本地8080端口启动web服务。
//
// chainWebpack 我们给项目目录起了“别名(alias)”，在代码中，我们可以直接用“别名”访问资源，省去了每次输入完整相对路径的麻烦。
// ※注：
// ◉ 在js代码中可直接使用别名，例如：
// @/common/js/xxx.js 等价于 src/common/js/xxx.js
// common/js/xxx.js 等价于 src/common/js/xxx.js
// ◉ 在css或者html中使用别名，需要在别名前加“~”，例如：
// @import "~common/stylus/font.styl";
