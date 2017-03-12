// sort posts by post.updated
var pagination = require('hexo-pagination');
// posts = Query { data: [Document post], length }
// post = Document { title, date: moment, slug, layout, ...} depends on layout type

hexo.extend.helper.register('is_about', function(){
  return Boolean(this.page.__about);
});
hexo.extend.generator.register('about', function(locals){
  let has_about = false;
  locals.pages.forEach((page, index) => {
    if (page.path == 'about/index.html') {
      has_about = true;
      page.__about = true;
    }
  });
  if (has_about) return;
  return {
    path: 'about/index.html',
    data: {
      content: 'Nothing here. Please edit `about/index.md`',
      __about: true,
    },
    layout: 'about'
  };
});
hexo.extend.filter.register('template_locals', function(locals){
});
