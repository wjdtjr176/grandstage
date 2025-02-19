


const ad1Slide = new Swiper('.sc-ad-area .swiper',{
    effect:'fade',
    autoplay:{
        delay:3000
    },
    loop:true,
    pagination:{
        el:".swiper-pagination",
        type:'fraction',
    },
})







ScrollTrigger.create({
    trigger:".category",
    start:"0% 0%",
    end:"100% 100%",
    onEnter:function(){
        $('.category').addClass('sticky')
    },
    onLeaveBack:function(){
        $('.category').removeClass('sticky')
    }
})


const cateSlide = new Swiper('.category .swiper',{
    slidesPerView:'auto',
})


$('.category .swiper-slide a').click(function(e){
    e.preventDefault();
    target = $(this).data('target');
    targetOffset = $(target).offset().top;

    window.scrollTo({top:targetOffset,behavior:"auto"})

    $(this).parent().addClass('on').siblings().removeClass('on')

})


areaArr = ['#area1','#area2','#area3','#area4','#area5','#area6','#area7','#area8','#area9'];

areaArr.forEach((element,i) => {

    ScrollTrigger.create({
        trigger:element,
        start:"0% 0%",
        end:"100% 0%",
        onUpdate:function(){

            $('.category .swiper-slide').eq(i).addClass('on').siblings().removeClass('on');

            cateSlide.slideTo(i,0)
        }
    })
});










const visualSlide = new Swiper('.sc-visual .swiper',{
    loop:true,
    slidesPerView:'auto',
    spaceBetween:20,
    pagination:{
        el:".swiper-pagination",
    },
})

$('.sc-ranking .tab-item a').click(function(e){
    e.preventDefault();

    tabName=$(this).data('tab');

    $(this).addClass('active').parent().siblings().find('a').removeClass('active');
    $(tabName).addClass('show').siblings().removeClass('show');
})




const bestSlide = new Swiper('.sc-best .swiper',{
    loop:true,
    slidesPerView:1.3,
    spaceBetween:10,
})



const launchSlide = new Swiper('.sc-launching .swiper',{
    slidesPerView:'auto',
})

gsap.to('.sc-launching .ico',{
    rotation:360,
    scrollTrigger:{
        trigger:".sc-launching .ico",
        start: "top center",
        end: "bottom center",
        scrub: 0,
    },
    repeat:-1,
    duration:1
})

const adbannerSlide = new Swiper('.ad-banner .swiper',{
    slidesPerView:'auto',
   autoplay:{
    delay:0,
    disableOnInteraction:false,
   },
   speed:6000,
   loop:true,
})


const restockSlide = new Swiper('.sc-restock .swiper',{
    pagination:{
        el:".swiper-pagination",
    },
})



$('.sc-restock .tab-item a').click(function(e){
    e.preventDefault();

    tabName=$(this).data('tab');

    $(this).addClass('active').parent().siblings().find('a').removeClass('active');
    $(tabName).addClass('show').siblings().removeClass('show');
})



const hotSlide = new Swiper('.sc-hot .swiper',{
    loop:true,
    slidesPerView:1.5,
    spaceBetween:10,
})

const curatorSlide = new Swiper('.sc-curator .swiper',{
    slidesPerView:'auto',
    spaceBetween:10,
})
$('.sc-curator .swiper-slide a').click(function(e){
    e.preventDefault();

    tabName=$(this).data('tab');

    $(this).addClass('active').parent().siblings().find('a').removeClass('active');
    $(tabName).addClass('show').siblings().removeClass('show');
})




const apparelSlide = new Swiper('.sc-apparel .swiper',{
    slidesPerView:'auto',
    spaceBetween:10,
})
$('.sc-apparel .swiper-slide a').click(function(e){
    e.preventDefault();

    tabName=$(this).data('tab');

    $(this).addClass('active').parent().siblings().find('a').removeClass('active');
    $(tabName).addClass('show').siblings().removeClass('show');
})





const plusSlide = new Swiper('.sc-plus .swiper',{
    loop:true,
    slidesPerView:2,
    spaceBetween:10,
    pagination:{
        el:".swiper-pagination",
    },
})

const loglSlide = new Swiper('.sc-log .swiper',{
    loop:true,
    slidesPerView:'auto',
    spaceBetween:16,
})

const promotionlSlide = new Swiper('.sc-promotion .swiper',{
    loop:true,
    pagination:{
        el:".swiper-pagination",
    },
})


const video = document.getElementById('myvideo');
$('.sc-video .video-area .btn-autoplay').click(function(){
    $('.sc-video .video-pop').addClass('show');
    $('body').addClass('no-scroll');
    video.currentTime = 0;
    video.play();
})
$('.sc-video .video-pop .btn-close').click(function(){
    $('.sc-video .video-pop').removeClass('show');
    $('body').removeClass('no-scroll');
    video.pause();
})






const brandSlide = new Swiper('.sc-brand .swiper',{
    loop:true,
    slidesPerView:'auto',
    centeredSlides:true,
    autoplay:{
        delay:2000,
    }
})




const footerSlide = new Swiper('#footer .swiper',{
    loop:true,
    direction:'vertical',
    autoplay:{
        delay:2000,
    },

})

$('#footer .btn-more').click(function(){
    $(this).toggleClass('active');
    $('#footer .adr').toggleClass('active');
})