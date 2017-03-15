# Replica

An elegant theme for [Hexo]. Replica of [Typecho] default theme.

- [Preview](https://blog.crucifyml.com/)

## Installation

### Install

```bash
$ git clone https://github.com/crucifyml/hexo-theme-replica.git theme/replica
```

### Enable

Modify `theme` setting in `_config.yml` to `replica`.

### Update

``` bash
cd themes/landscape
git pull
```

## Configuration

[Theme config file](_config.yml).

## TODO List

- [x] Posts & posts pagination sorted by updated/date.
  - **hexo-generator-index** already has config options.
- [x] <del>Post unique cid for premalink. (1, 2, 3 ...)</del>
  - This is not a good idea for static blog. number id is not permanent.
  - Pls use **hexo-generator-alias** for migrated posts.
- [ ] Structured data. Microdata.
  - [Google Structed Data Testing Tool](https://search.google.com/structured-data/testing-tool) Passed: **False**
- [ ] Search. Better impelementation needed.
- [x] Links. Link other sites.
- [ ] Better web fonts.
- [ ] Disqus comments.
- [ ] Rewrite css in [stylus](https://github.com/stylus/stylus).
  - [ ] Responsive UI.
- [ ] Brand new icons.
- [ ] Documentation.
- [ ] Material design.
  - [ ] [Icon Font](http://google.github.io/material-design-icons/).
  - [ ] [Material Colors](https://github.com/shuhei/material-colors).
- [ ] [gulp.js](http://gulpjs.com/).

[Hexo]: https://hexo.io/
[Typecho]: http://typecho.org/
