(function(){
  'use strict';

  var header = document.getElementById('header');
  var toc = document.getElementById('secondary');
  var backToTop = document.getElementById('back-to-top');
  var headerHeight = header.clientHeight;

  if (!toc) return;

  function updateSidebarPosition(){
    var scrollTop = document.scrollingElement.scrollTop;

    if (scrollTop > headerHeight){
      toc.classList.add('fixed');
    } else {
      toc.classList.remove('fixed');
    }
  }

  window.addEventListener('scroll', function(){
    window.requestAnimationFrame(updateSidebarPosition);
  });

  updateSidebarPosition();

  if (backToTop) backToTop.addEventListener('click', function(e){
    e.preventDefault();
    document.scrollingElement.scrollTop = 0;
  });
})();
