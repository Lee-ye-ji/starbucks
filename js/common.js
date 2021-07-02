// 메뉴바 검색
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});

// 메뉴바 slideDown 효과
$('.item__name').bind('mouseover focus', function (e) {
    $(this).addClass('on');
    $(this).next().stop(true, true).slideDown();

    e.preventDefault();
});

$('.item').bind('mouseleave', function () {
    $('.item__name').removeClass('on');
    $('.item__contents').slideUp();
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 올해년도