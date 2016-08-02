define(function(require, exports, module) {
  var $ = require('seajq');
  require('../stylesheets/style.css');
  require('../stylesheets/swiper.css');
  require('../stylesheets/bootstrap.min.css');
  require('../stylesheets/admin.css');
  require.async('swiper-3.3.1.jquery.min');
  require.async('bootstrap.min');
  require.async('swiper');

  require.async('_slide', function(slide) {
    slide.searchSlide();
    slide.indexSlide();
    slide.userSlide();
  });

  require.async('_index', function(index) {
    index.click();
  });

  require.async('_admin', function(admin){
    admin.operate();
  });

})
