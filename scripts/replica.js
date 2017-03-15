/* global hexo */

'use strict';

hexo.extend.helper.register('is_about', function(){
  return Boolean(this.page.__about);
});

// about page
hexo.extend.generator.register('about', function(locals){
  var has_about = false;
  locals.pages.forEach(function(page, index){
    if (page.path === 'about/index.html') {
      has_about = true;
      page.__about = true;
    }
  });
  if (has_about) return;
  return {
    path: 'about/index.html',
    data: {
      content: null,
      __about: true,
    },
    layout: 'about'
  };
});

