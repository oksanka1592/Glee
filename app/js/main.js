$(function () {
  $(".shop-content__btn").on("click", function () {
    $(".shop-content__btn").removeClass("shop-content__btn--active"),
      $(this).addClass("shop-content__btn--active")
  }),
    $(".button-list").on("click", function () {
      $(".product__item").addClass("product__item--list"),
        $(".product__items").addClass("product__items--list"),
        $(".shop-content__items").addClass("shop-content__nogrid")
    }),
    $(".button-grid").on("click", function () {
      $(".product__item").removeClass("product__item--list"),
        $(".product__items").removeClass("product__items--list"),
        $(".shop-content__items").removeClass("shop-content__nogrid")
    }),
    $(".product__item-card").on("click", function () {
      $(this).closest(".product__item-icon").addClass("product__item-icon--inactive"),
        $(this).closest(".product__item-info").find(".product__item-btn").addClass("product__item-btn--active");
    }),

    $(".star").rateYo({
      starWidth: "11px",
      normalFill: "#d6d6d6",
      ratedFill: "#ffcc00",
      numStars: 5,
    });

  $('.footer-top__title-spoiler').on('click', function () {
    $(this).toggleClass('active').next().slideToggle(300);

  });

  $('.filter-category__subtitle').on('click', function () {
    $(this).toggleClass('active').next().slideToggle(300);

  });

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (t) {
      $(".filter-price__from").text(t.from),
        $(".filter-price__to").text(t.to)
    },
    onChange: function (t) {
      $(".filter-price__from").text(t.from),
        $(".filter-price__to").text(t.to)
    }

  });

  $('.header__burger').on('click', function () {
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