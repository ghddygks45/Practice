var mql = window.matchMedia('all and (min-width:1100px)');
// matchMedia의 메소드 === addListener 이다.
mql.addListener(function(){
    media();
});
function media(){
    if(mql.matches){
        document.querySelector('html').classList.add('desktop')
        document.querySelector('html').classList.remove('mobile')
    } else{
        document.querySelector('html').classList.add('mobile')
        document.querySelector('html').classList.remove('desktop')
    }
}media()


$(document).ready(function(){

    $('#aside>ul>li>a').on('click',function(){
        $(this).parent('li').toggleClass('on')
    });

    // lnb functioin
    function lnb(dep1, dep2){
        $('#aside>ul>li').eq(dep1 - 1).addClass('on');
        if(dep1){
            $('#aside>ul>li').eq(dep1 - 1).find('.sub_menu li').eq(dep2 - 1).addClass('on');
        }

    }lnb(2,1)

    // location function
    /*function location(){ // depth가 1개일때
        var location = document.querySelector('.location .inner');
        var depth1 = document.createElement('span');
            depth1.className = 'depth1';
            location.appendChild(depth1);
            $('.depth1').addClass('on').text($('#aside>ul>li.on').find('>a').text());
            $('.ctn_subject h2').text($('#aside>ul>li.on').find('>a').text());
        if($('.sub_menu>ul>li').hasClass('on')){ // depth가 2개일때
            var depth2 = document.createElement('span');
            depth2.className = 'depth2';
            location.appendChild(depth2);
            $('.depth1').removeClass('on')
            $('.depth2').addClass('on').text($('.sub_menu>ul>li.on').find('>a').text().replace('-','').trim());
            
        }
    }location()*/

    // layerPopup
    /*function layerPopup(){
        var popupOpenBtn = document.querySelector('#layerPopup');
        var popupContent = document.querySelector('.popup_box');
        var popupCloseBtn = document.querySelector('.popup_close');

        popupOpenBtn.addEventListener('click',function(e){
            e.preventDefault();
            popupContent.classList.add('on')
        })
        popupCloseBtn.addEventListener('click',function(e){
            e.preventDefault();
            popupContent.classList.remove('on')
        })
    }layerPopup()*/

    $('.select_box>a').on('click',function(e){
        e.preventDefault();
        $(this).parent('.select_box').toggleClass('on')
    })

    $(document).on('click','.mobile .gnb>li>a',function(e){
        e.preventDefault();
        $(this).parent('li').toggleClass('on')
    })

    $(document).on('click','.mobile .gnb .sub_menu>ul>li>a',function(){
        $(this).parent('li').toggleClass('on');
        if($(this).parent('li').hasClass('on')){
            $('.sub_menu>ul>li').removeClass('on')
            $(this).parent('li').addClass('on');
        }
    })

    $(document).on('focus mouseenter','.desktop .gnb>li',function(){
        $('.header_wrap').addClass('open');
        $('.sub_menu').addClass('open');
        $(this).addClass('on');
    })

    $(document).on('focusout mouseleave','.desktop .gnb>li',function(){
        
        $('.header_wrap').removeClass('open');
        $('.sub_menu').removeClass('open')
        $(this).removeClass('on')
    })

    $(document).on('click','.mobile .m_menu_open',function(){
        $('.header_bottom').addClass('open');
        $('.header_wrap').append('<div class="menu_bg"></div>')
    })

    $(document).on('click','.mobile .m_menu_close',function(){
        $('.header_bottom').removeClass('open');
        $('.menu_bg').remove()
    })

})