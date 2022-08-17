$('.navbar-nav li').on('click', function () {
    $('.navbar-nav li').find('div.nav-active').addClass('d-none');
    $(this).children('div').removeClass('d-none');
});

const popular = (value) => {
    let target = $('.popular-item-' + value)
    $('.popular-items-wrapper').find('div.popular-item-info').addClass('d-none');
    $('.popular-items-wrapper').find('div.popular-item-active').removeClass('popular-item-active');
    $(target).addClass('popular-item-active');
    $(target).children('div.popular-item-info').removeClass('d-none');
}

const chefList = (value) => {
    let find = $(".chef-list").find(".chef-list-card")
    let target = find[value]
    $('.chef-list').children('div.chef-list-card').removeClass('chef-list-card__active');
    $('.chef-list').find('a.chef-card-restaurant__detail').addClass('d-none');
    $(target).addClass('chef-list-card-active');
    $(target).children('a.chef-card-restaurant__detail').removeClass('d-none');
}

$('.ads-description-container').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.ads-sliders'
});
$('.ads-sliders').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    centerMode: false,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3000,
    asNavFor: '.ads-description-container',
    arrows: false
});