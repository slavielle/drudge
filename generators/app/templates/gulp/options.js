'use strict';

module.exports = {
  theme_name: "<%= project_name %>",
  module: {
    autoprefixer: {
      browsers: ['> 1%', 'not dead', 'last 2 versions', 'Firefox ESR', 'not ie < 11']
    },
    scsslint: { config: 'configs/.scsslint.yml' }
  },
  style_compiler: "gulp-sass",
  paths: {
    gulp_templates: './gulp/templates/',
    src : {
      styles: ['./assets/sass/style.scss'],
      scripts: './assets/scripts/',
      fonts: './assets/fonts/',
      images: './assets/images/**/*',
      svg_sprites: './assets/svg-sprites/**/*',
      metas: './assets/metas/',
      sass_common: './assets/sass/common/'
    },
    dist : {
      index: './dist/',
      styles: './dist/styles/',
      scripts: './dist/scripts/',
      images: './dist/images/',
      fonts: './dist/fonts/',
      metas: './dist/metas/'

    }
  },
  breakpoints: [
    {
      name:"xs",
      pixel_value: 575,
      targets: {
      }
    },
    {
      name:"sm",
      pixel_value: 767,
      targets: {
        drupal:{
          multipliers: ["1x", "2x"]
        }
      }
    },
    {
      name:"md",
      pixel_value: 991,
      targets: {
      }
    },
    {
      name:"lg",
      pixel_value: 1199,
      targets: {
        drupal:{
          multipliers: ["1x", "2x"]
        }
      }
    },
    {
      name:"xl",
      pixel_value: 1440,
      targets: {
        drupal:{
          multipliers: ["1x", "2x"]
        },
        bootstrap:{
          enabled: false
        }
      }
    }
  ],
};
