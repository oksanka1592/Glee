$ (function(){

  $('.header__burger').on('click', function (){
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });

  $('.user-nuv__menu').on('click', function () {
    $('.user-nuv__menu,.user-nuv__search,.user-nuv__link ').toggleClass('active');
  });

  $('.slider__items').slick({
    dots: true,
    arrows: false,
    infinite: false,
  });

  var mixer = mixitup('.product__items');
  var mixer = mixitup('.desing__items');

});