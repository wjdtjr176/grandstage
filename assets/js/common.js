





let lastScrollTop = 0;
$(window).scroll(function(){
    curr = $(this).scrollTop();


    if (curr > 0) {
        $('.btn-fix').addClass('show')
    }else{
        $('.btn-fix').removeClass('show')
    }

    if (curr >= 100) {
        if (curr > lastScrollTop) {
            $('.header .fix').addClass('hide')
            $('.btn-fix').addClass('on')
        }else{
            $('.header .fix').removeClass('hide')
            $('.btn-fix').removeClass('on')
        }
        lastScrollTop = curr;
    }
})




$('.btn-fix .btn-top').click(function(){
    window.scrollTo({top:0,behavior:"smooth"})
})




