(function(){
  'use strict';

  var header = document.getElementById('header');
  var main = document.getElementById('main');
  var secondary = document.getElementById('secondary');
  var backToTop = document.getElementById('back-to-top');
  var headerHeight = header.clientHeight;

  if (!secondary) return;

  function updateSidebarPosition(){
    var scrollTop = document.scrollingElement.scrollTop;

    if (scrollTop > headerHeight && main.clientHeight > secondary.clientHeight){
      secondary.classList.add('fixed');
    } else {
      secondary.classList.remove('fixed');
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
