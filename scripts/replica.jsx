// sort posts by post.updated
var pagination = require('hexo-pagination');
// posts = Query { data: [Document post], length }
// post = Document { title, date: moment, slug, layout, ...} depends on layout type

hexo.extend.helper.register('is_about', function(){
  return Boolean(this.page.__index);
});

hexo.theme.setView(hexo.route.format('about/'),{
  data: 'about',
  __about: true,
  modified: false,
});
