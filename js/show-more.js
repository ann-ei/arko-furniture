$(document).ready(function() {
    var closeHeight = '10em'; 
      var moreText 	= 'Показать все'; 
      var lessText	= 'Скрыть';
      var duration	= '1000';
    var easing = 'linear'; 
  
      $('.item-content').each(function() {
          
          var current = $(this).children('.item-characteristics');
          current.data('fullHeight', current.height()).css('height', closeHeight);
  
          current.after('<a href="javascript:void(0);" class="more-link closed">' + moreText + '</a>');
  
      });
    
      var openSlider = function() {
          link = $(this);
          var openHeight = link.prev('.item-characteristics').data('fullHeight') + 'px';
          link.prev('.item-characteristics').animate({'height': openHeight}, {duration: duration }, easing);
          link.text(lessText).addClass('open').removeClass('closed');
          link.unbind('click', openSlider);
          link.bind('click', closeSlider);
      }
  
      var closeSlider = function() {
          link = $(this);
          link.prev('.item-characteristics').animate({'height': closeHeight}, {duration: duration }, easing);
          link.text(moreText).addClass('closed').removeClass('open');
          link.unbind('click');
          link.bind('click', openSlider);
      }
    
      $('.more-link').bind('click', openSlider);
    
  });