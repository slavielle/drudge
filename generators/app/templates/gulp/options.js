'use strict';

module.exports = {
  module: {
    autoprefixer: {
      browsers: ['> 1%', 'not dead', 'last 2 versions', 'Firefox ESR', 'not ie < 11']
    },
    scsslint: { config: 'configs/.scsslint.yml' }
  },
  style_compiler: "gulp-sass",
  paths: {
    src : {
      styles: ['./assets/sass/style.scss'],
      scripts: './assets/scripts/',
      fonts: './assets/fonts/',
      images: './assets/images/**/*',
      svg_sprites: './assets/svg-sprites/**/*',
      metas: './assets/metas/'
    },
    dist : {
      index: './dist/',
      styles: './dist/styles/',
      scripts: './dist/scripts/',
      images: './dist/images/',
      fonts: './dist/fonts/',
      metas: './dist/metas/'
    }
  }
};
