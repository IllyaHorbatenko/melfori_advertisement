$(function() {
    // создание табов

    //SVG Fallback
    // if(!Modernizr.svg) {
    //  $("img[src*='svg']").attr("src", function() {
    //      return $(this).attr("src").replace(".svg", ".png");
    //  });
    // };
});
        function getCookie() {document.cookie = "info=123";
            alert(document.cookie);
        };
         getCookie() 
// прокрутка по секциям

function buttonMobileMenu() {
    var button = $('.button-mobile-menu'),
        content = $('.main'),
        selectElem = $(".mobile_navigation a");

    button.click(function() {
        $(".mobile-menu").toggleClass("active");
        $(".mobile-menu .overlay").toggleClass("active");
        $('body').toggleClass('overflow');
        button.toggleClass("active");
    });

    selectElem.click(function() {
        selectElem.each(function(){
            if($(this) != selectElem){
                selectElem.removeClass("active");
            }
        });
        $(this).toggleClass("active");

    });
}



var limit = 0,
    thisSection = 0,
    naxtSection = 0;


// определение активной секции и добавление соотвецтвующей анимации
function setAnimation(down, up) {
    var section = document.querySelectorAll('section');

    // проебежим по всем секциям

    for (var i = 0; i < section.length; i++) {
        var sectionClass = section[i].getAttribute('class').split(' '),
            attribute = section[i].getAttribute('data-index');

        // пробежим по всем классам активной секции 
        for (var j = 0; j < sectionClass.length; j++) {

            // если секция активна то...
            if (sectionClass[j] == 'active') {
                for (var q = 0; q < sectionClass.length; q++) {
                    // проверяем на наличия класса animation
                    if (sectionClass[q] == 'animation') {
                        limit++;
                        thisSection = parseInt(attribute);
                    }
                    if (sectionClass[q] !== 'animation') {
                        section[i].classList.add('animation');
                        limit = 0;
                        nextSection = parseInt(attribute);
                    }
                }
                if (limit == 0) {
                    if (thisSection < nextSection) {
                        // вызов анимации по скроллу вниз
                        down[i].duration(2);
                        down[i].play(0);
                        for (var k = 0; k < section.length; k++) {
                            // удаление всех классов animation, кроме активной секции 
                            if (k != i) {
                                section[k].classList.remove('animation');
                                down[k].pause(0);
                            }
                        }
                    }
                    if (thisSection > nextSection) {
                        // вызов анимации по скроллу вверх
                        up[i].play(0);
                        for (var k = 0; k < section.length; k++) {
                            if (k != i) {
                                section[k].classList.remove('animation');
                                up[k].pause(0);
                            }
                        }
                    }
                }
            }
        }
    }
}



$(document).ready(function() {
    buttonMobileMenu();



    if (document.documentElement.clientWidth > 1200 && document.documentElement.clientHeight > 720) {
        $(".main").onepage_scroll({
            sectionContainer: "section", // контейнер, к которому будет применяться скролл
            easing: "ease", // Тип анимации "ease", "linear", "ease-in", "ease-out", "ease-in-out"
            animationTime: 500, // время анимации
            pagination: true, // скрыть или отобразить пагинатор
            animationTime: 800,
            moveDown: function() {
                console.log('index');
            },
            updateURL: false, // обновлять URL или нет
            // для инициализации tooltips
        });
        setInterval(function() {
            setAnimation(td, tu);
        }, 100);
        var scrollMouseArrow = new TimelineMax(),
            scrollMouse = new TimelineMax();
        scrollMouse.from($('.scroll-mouse'), 2, { ease: Elastic.easeOut.config(2, 0.7), y: -10 })
            .to($('.scroll-mouse'), 0.5, { y: -10 });
        scrollMouseArrow.staggerFrom($('.scroll-mouse li'), 0.6, { autoAlpha: 0.2 }, 0.2);

        scrollMouseArrow.repeat(Infinity);
        scrollMouse.repeat(Infinity);

    }

    if (document.documentElement.clientWidth > 1200 && document.documentElement.clientHeight > 720) {

        var td1 = new TimelineMax(),
            td2 = new TimelineMax(),
            td3 = new TimelineMax(),
            td4 = new TimelineMax(),
            td5 = new TimelineMax(),
            td6 = new TimelineMax(),
            td7 = new TimelineMax(),
            td8 = new TimelineMax(),
            td9 = new TimelineMax(),

            tu1 = new TimelineMax(),
            tu2 = new TimelineMax(),
            tu3 = new TimelineMax(),
            tu4 = new TimelineMax(),
            tu5 = new TimelineMax(),
            tu6 = new TimelineMax(),
            tu7 = new TimelineMax(),
            tu8 = new TimelineMax(),
            tu9 = new TimelineMax(),

            td = [td1, td2, td3, td4, td5, td6, td7, td8, td9];
        tu = [tu1, tu2, tu3, tu4, tu5, tu6, tu7, tu8, tu9];

        td1.pause();
        td2.pause();
        td3.pause();
        td4.pause();
        td5.pause();
        td6.pause();
        td7.pause();
        td8.pause();
        td9.pause();

        tu1.pause();
        tu2.pause();
        tu3.pause();
        tu4.pause();
        tu5.pause();
        tu6.pause();
        tu7.pause();
        tu8.pause();
        tu9.pause();

        // GREEN SOCKS FOR DOWN


        // секция 1

        td1.from('.advertising-title', 0.7, { y: 100, opacity: 0, ease: Power4.easeOut }, 'header-1');
        td1.from('.header-add-project-container', 0.7, { y: 100, opacity: 0, ease: Power4.easeOut }, 'header-1');
        td1.from('.scroll-mouse-container', 0.7, { y: 100, opacity: 0, ease: Power4.easeOut }, '-=0.6', 'header-3');

        // секция 2


        td2.from('.about-lever-context-container-title', 0.7, { y: 100, opacity: 0, ease: Power4.easeOut }, '+=0.5');
        td2.staggerFrom('.about-lever-context-col', 0.7, { y: 100, opacity: 0, ease: Power4.easeOut }, 0.2, '-=0.5');
        td2.from('.audit-information-title', 0.7, { y: 100, opacity: 0, ease: Power4.easeOut }, '-=0.6');
        td2.from('.audit-form-title', 0.7, { y: 100, opacity: 0, ease: Power4.easeOut }, '-=0.8');
        td2.from('.audit-form', 0.7, { y: 100, opacity: 0, ease: Power4.easeOut }, '-=0.7');
        // секция 3


        td3.from('.about-us-container-title', 0.7, { y: 100, opacity: 0, ease: Power4.easeOut }, '+=0.5');
        td3.staggerFrom('.about-us-icon-container', 0.7, { y: 100, opacity: 0, ease: Power4.easeOut }, 0.2, '-=0.6');
        td3.from('.main-result', 0.7, { y: 100, opacity: 0, ease: Power4.easeOut }, '-=0.9');
        // секция 4

        td4.from('.about-contextual-advertising-title', 0.7, { y: 100, opacity: 0, ease: Power4.easeOut }, '+=0.5', 'advertising-1');
        td4.from('.about-contextual-advertising-wrap-1 article', 0.7, { y: 100, opacity: 0, ease: Power4.easeOut }, '-=0.3', 'advertising-2');
        td4.from('.about-contextual-advertising-wrap-2 article', 0.7, { y: 100, opacity: 0, ease: Power4.easeOut }, '-=0.5', 'advertising-3');
        td4.from('.about-contextual-advertising-wrap-1 img', 0.7, { opacity: 0, scale: 0.5, ease: Power4.easeOut }, '-=0.6', 'advertising-img');
        td4.from('.about-contextual-advertising-wrap-2 img', 0.7, { opacity: 0, scale: 0.5, ease: Power4.easeOut }, '-=0.6', 'advertising-img');

        // секция 5

        td5.from('.finished-result-container-title', 0.7, { y: 100, opacity: 0, ease: Power4.easeOut }, '+=0.5');
        td5.from('.owl-carousel-list-img-container', 0.7, { y: 200, opacity: 0, ease: Power4.easeOut }, '-=0.6');
        td5.from('.owl-carousel-list-title', 0.7, { x: 100, opacity: 0, ease: Power4.easeOut }, '-=0.6');
        td5.from('.owl-carousel-list-article', 0.7, { x: 100, opacity: 0, ease: Power4.easeOut }, '-=0.6');

        // секция 6

        td6.from('.starting-work-container-title', 0.7, { y: 100, opacity: 0, ease: Power4.easeOut }, '+=0.5');
        td6.from('.tabs-wrap-container', 0.7, { y: 100, opacity: 0, ease: Power4.easeOut }, '-=0.4');
        td6.staggerFrom('.tabs-item', 0.7, { y: 100, autoAlpha: 0, ease: Power4.easeOut }, 0.1, '-=0.4', 'tabs-item');
        td6.staggerFrom('.starting-work-item', 0.7, { y: 100, autoAlpha: 0, ease: Power4.easeOut }, 0.1, '-=0.8', 'tabs-item');
        td6.from('.another-promotion', 0.7, { y: 100, opacity: 0, ease: Power4.easeOut }, '-=1.4');

        // секция 7

        td7.from('.main-quetions-container-title', 0.7, { y: 100, opacity: 0, ease: Power4.easeOut }, '+=0.5');
        td7.staggerFrom('.accordion', 0.7, { y: 100, autoAlpha: 0, ease: Power4.easeOut }, 0.1, '-=0.6');
        td7.from('.ask-quetion-submit', 0.7, { y: 100, opacity: 0, ease: Power4.easeOut }, '-=0.6');

        // секция 8
        td8.from('.developed-sociality-container-title', 0.7, { y: 100, opacity: 0, ease: Power4.easeOut }, '+=0.5');
        td8.staggerFrom('.developed-sociality-wrap li', 0.7, { x: -100, autoAlpha: 0, ease: Power4.easeOut }, 0.2);
        td8.from('.developed-sociality-foto-aside', 0.7, { x: 100, opacity: 0, ease: Power4.easeOut }, '-=0.7');
        td8.from('.developed-sociality-foto-wrap', 0.7, { x: 100, opacity: 0, ease: Power4.easeOut }, '-=0.5');

        // секция 9

        td9.from('.footer-container', 0.7, { y: 100, opacity: 0, ease: Power4.easeOut }, '+=0.2');
        td9.from('.footer-row', 0.7, { y: 100, opacity: 0, ease: Power4.easeOut }, '-=0.4');



        //  GREEN SOCKS FOR UP

        // секция 1

        tu1.set('.advertising-title', { y: -100, opacity: 0 }, '+=0.3', 'lable-1')
            .to('.advertising-title', 1, { y: 0, opacity: 1, ease: Power4.easeOut }, '+=0.3', 'lable-1');
        tu1.set('.header-add-project-container', { y: -100, opacity: 0 }, '-=0.6', 'lable-1')
            .to('.header-add-project-container', 1, { y: 0, opacity: 1, ease: Power4.easeOut }, '-=0.6', 'lable-1');
        tu1.set('.scroll-mouse-container', { y: -100, opacity: 0 }, '-=0.7', 'lable-1')
            .to('.scroll-mouse-container', 1, { y: 0, opacity: 1, ease: Power4.easeOut }, '-=0.7', 'lable-1');

        // секция 2


        tu2.set('.about-lever-context-container-title', { y: -100, opacity: 0 }, '+=0.3', 'lable-3')
            .to('.about-lever-context-container-title', 1, { y: 0, opacity: 1, ease: Power4.easeOut }, '+=0.3', 'lable-3');
        tu2.set('.about-lever-context-col', { y: -100, opacity: 0 }, '-=0.8', 'lable-3')
            .staggerTo('.about-lever-context-col', 1, { y: 0, opacity: 1, ease: Power4.easeOut }, 0.2, '-=0.8', 'lable-3');
        tu2.set('.audit-information-title', { y: -100, opacity: 0 }, '-=0.8', 'lable-3')
            .to('.audit-information-title', 1, { y: 0, opacity: 1, ease: Power4.easeOut }, '-=0.8', 'lable-3');
        tu2.set('.audit-form-title', { y: -100, opacity: 0 }, '-=0.8', 'lable-3')
            .to('.audit-form-title', 1, { y: 0, opacity: 1, ease: Power4.easeOut }, '-=0.8', 'lable-3');
        tu2.set('.audit-form', { y: -100, opacity: 0 }, '-=0.8', 'lable-3')
            .to('.audit-form', 1, { y: 0, opacity: 1, ease: Power4.easeOut }, '-=0.8', 'lable-3');

        // секция 3

        tu3.set('.about-us-container-title', { y: -100, opacity: 0 }, '+=0.3', 'lable-4')
            .to('.about-us-container-title', 1, { y: 0, opacity: 1, ease: Power4.easeOut }, '+=0.3', 'lable-4');
        tu3.set('.about-us-icon-container', { y: -100, opacity: 0 }, '-=0.8', 'lable-4')
            .staggerTo('.about-us-icon-container', 1, { y: 0, opacity: 1, ease: Power4.easeOut }, 0.2, '-=0.8', 'lable-4');
        tu3.set('.main-result', { y: -100, opacity: 0 }, '-=0.8', 'lable-4')
            .to('.main-result', 1, { y: 0, opacity: 1, ease: Power4.easeOut }, '-=0.8', 'lable-4');


        // секция 4
        tu4.set('.about-contextual-advertising-title', { y: -100, opacity: 0 }, '+=0.3', 'lable-2')
            .to('.about-contextual-advertising-title', 1, { y: 0, opacity: 1, ease: Power4.easeOut }, '+=0.3', 'lable-2');
        tu4.set('.about-contextual-advertising-wrap-1 article', { y: -100, opacity: 0 }, '-=0.7', 'lable-2')
            .to('.about-contextual-advertising-wrap-1 article', 1, { y: 0, opacity: 1, ease: Power4.easeOut }, '-=0.7', 'lable-2');
        tu4.set('.about-contextual-advertising-wrap-2 article', { y: -100, opacity: 0 }, '-=0.7', 'lable-2')
            .to('.about-contextual-advertising-wrap-2 article', 1, { y: 0, opacity: 1, ease: Power4.easeOut }, '-=0.7', 'lable-2');
        tu4.set('.about-contextual-advertising-wrap-1 img', { opacity: 0, scale: 0.5 }, '-=0.9', 'lable-2-img')
            .to('.about-contextual-advertising-wrap-1 img', 1, { opacity: 1, scale: 1, ease: Power4.easeOut }, '-=0.9', 'lable-2-img');
        tu4.set('.about-contextual-advertising-wrap-2 img', { opacity: 0, scale: 0.5 }, '-=0.9', 'lable-2-img')
            .to('.about-contextual-advertising-wrap-2 img', 1, { opacity: 1, scale: 1, ease: Power4.easeOut }, '-=0.9', 'lable-2-img');

        // секция 5

        tu5.set('.finished-result-container-title', { y: -100, opacity: 0 }, '+=0.3', 'lable-5')
            .to('.finished-result-container-title', 1, { y: 0, opacity: 1, ease: Power4.easeOut }, '+=0.3', 'lable-5');
        tu5.set('.owl-carousel-list-img-container', { y: -200, opacity: 0 }, '-=0.8', 'lable-5')
            .to('.owl-carousel-list-img-container', 1, { y: 0, opacity: 1, ease: Power4.easeOut }, '-=0.8', 'lable-5');
        tu5.set('.owl-carousel-list-title', { x: 100, opacity: 0 }, '-=0.8', 'lable-5')
            .to('.owl-carousel-list-title', 1, { x: 0, opacity: 1, ease: Power4.easeOut }, '-=0.8', 'lable-5');
        tu5.set('.owl-carousel-list-article', { x: 100, opacity: 0 }, '-=0.8', 'lable-5')
            .to('.owl-carousel-list-article', 1, { x: 0, opacity: 1, ease: Power4.easeOut }, '-=0.8', 'lable-5');

        // секция 6

        tu6.set('.another-promotion', { y: -100, opacity: 0 }, '-=0.2')
            .to('.another-promotion', 0.7, { y: 0, opacity: 1, ease: Power4.easeOut }, '-=0.2');
        tu6.set('.starting-work-container-title', { y: -100, opacity: 0 }, '-=0.2', 'lable-6')
            .to('.starting-work-container-title', 1, { y: 0, opacity: 1, ease: Power4.easeOut }, '-=0.2', 'lable-6');
        tu6.set('.tabs-wrap-container', { y: -100, opacity: 0 }, '-=0.8', 'lable-6')
            .to('.tabs-wrap-container', 1, { y: 0, opacity: 1, ease: Power4.easeOut }, '-=0.8', 'lable-6');
        tu6.set('.tabs-item', { y: -100, autoAlpha: 0 }, '-=0.8', 'lable-6')
            .staggerTo('.tabs-item', 1, { y: 0, autoAlpha: 1, ease: Power4.easeOut }, 0.2, '-=0.8', 'lable-6');
        tu6.set('.starting-work-item', { y: -100, autoAlpha: 0 }, '-=1.3', 'lable-6')
            .staggerTo('.starting-work-item', 1, { y: 0, autoAlpha: 1, ease: Power4.easeOut }, 0.2, '-=1.3', 'lable-6');

        // секция 7

        tu7.set('.main-quetions-container-title', { y: -100, opacity: 0 }, '+=0.3', 'lable-7')
            .to('.main-quetions-container-title', 1, { y: 0, opacity: 1, ease: Power4.easeOut }, '+=0.3', 'lable-7');
        tu7.set('.accordion', { y: -100, autoAlpha: 0 }, '-=0.8', 'lable-7')
            .staggerTo('.accordion', 1, { y: 0, autoAlpha: 1, ease: Power4.easeOut }, 0.1, '-=0.8', 'lable-7');
        tu7.set('.ask-quetion-submit', { y: -100, opacity: 0 }, '-=0.9', 'lable-7')
            .to('.ask-quetion-submit', 1, { y: 0, opacity: 1, ease: Power4.easeOut }, '-=0.9', 'lable-7');

        // секция 8 
        tu8.set('.developed-sociality-container-title', { y: -100, opacity: 0 }, '+=0.3')
            .to('.developed-sociality-container-title', 1, { y: 0, opacity: 1, ease: Power4.easeOut }, '+=0.3');
        tu8.set('.developed-sociality-wrap li', { x: -100, autoAlpha: 0 }, '-=0.3', 'lable-8')
            .staggerTo('.developed-sociality-wrap li', 1, { x: 0, autoAlpha: 1, ease: Power4.easeOut }, 0.3, '-=0.3', 'lable-8');
        tu8.set('.developed-sociality-foto-aside', { x: -100, opacity: 0 }, '-=0.9', 'lable-8')
            .to('.developed-sociality-foto-aside', 1, { x: 0, opacity: 1, ease: Power4.easeOut }, '-=0.9', 'lable-8');
        tu8.set('.developed-sociality-foto-wrap', { x: -100, opacity: 0 }, '-=0.9', 'lable-8')
            .to('.developed-sociality-foto-wrap', 1, { x: 0, opacity: 1, ease: Power4.easeOut }, '-=0.9', 'lable-8');
    }










    // $( document ).tooltip({
    //   track: true
    // });  
    //скролл по ссылке с атрибутом href 
    $(".mobile_navigation a[href*='#']").on("click", function(e) {
        e.preventDefault();
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 500);
        return false;
    });
    // Скролл по классу .scroll_to и атрибуту data-scroll у кнопки к примеру (data-scroll="куда скроллим" в элементе куда скроллим ставим id потом впишем в куда скроллим)
    // $(".scroll_to").on("click", function(e) {
    //     e.preventDefault();
    //     var anchor = $(this);
    //     $('html, body').stop().animate({
    //         scrollTop: $("#" + anchor.data('scroll')).offset().top
    //     }, 500);
    //     return false;
    // });
    //  Активация слайдера
    $(".owl-carousel").owlCarousel({
        loop: true,
        items: 1,
        dots: true,
        autoPlay: true
    });
    // td5.staggerFrom('.owl-dot', 0.7, { scale: 1, ease: Power4.easeOut }, '-=0.6');
    // tu5.set('.owl-dot', { scale: 0 }, '-=0.8', 'lable-5')
    //     .staggerTo('.owl-dot', 1, { scale: 1, ease: Power4.easeOut }, '-=0.8', 'lable-5');
    var counter = function($this) {
        var maxNum = Math.abs(parseInt($this.text()));
        var i = 0;
        var repeat = maxNum / 50;

        setInterval(function() {

            $this.text(parseInt(i += repeat));

            if (i > maxNum) {
                $this.text(parseInt(maxNum));
                return;
            }

        }, 40);
    };


    $(document).ready(function() {
        var screenWidth = screen.width;
        if (screenWidth > 1200) {
            console.log(screenWidth);
            $(window).bind('scroll', function() {
                if ($(window).scrollTop() > 57) {
                    $('.top-menu-fixed').addClass('fixed');
                    $('nav').css('padding-top', '1px');
                } else {
                    $('.top-menu-fixed').removeClass('fixed');
                    $('nav').css('padding-top', '0px');
                }
            })
        } else {
            $('.top-menu-fixed').addClass('fixed');
        }

    });



    $("#count .num").each(function(index, element) {
        counter($(element));
    });
    // Select в модальном окне
    $(document).click(function() {
        $('.slct').removeClass('active');
        $('.slct').parent().find('.drop').slideUp("fast");
    });
    $('.slct').click(function() {
        /* Заносим выпадающий список в переменную */
        var dropBlock = $(this).parent().find('.drop');
        //  закрываем все открытые
        $('.slct').removeClass('active').parent().find('.drop').slideUp("fast");

        /* Делаем проверку: Если выпадающий блок скрыт то делаем его видимым*/
        if (dropBlock.is(':hidden')) {
            dropBlock.slideDown();

            /* Выделяем ссылку открывающую select */
            $(this).addClass('active');
            $(this).siblings(".slct_arrow").addClass('active');


            /* Работаем с событием клика по элементам выпадающего списка */
            $('.drop').find('li').click(function() {

                /* Заносим в переменную HTML код элемента 
                списка по которому кликнули */
                var selectResult = $(this).html();

                /* Находим наш скрытый инпут и передаем в него 
                значение из переменной selectResult */
                $(this).parent().parent().find('input').val(selectResult);

                /* Передаем значение переменной selectResult в ссылку которая 
                открывает наш выпадающий список и удаляем активность */
                $(this).parent().parent().find(".slct").removeClass('active').html(selectResult);
                $(".slct_arrow").removeClass('active');

                /* Скрываем выпадающий блок */
                dropBlock.slideUp();
            });

            /* Продолжаем проверку: Если выпадающий блок не скрыт то скрываем его */
        } else {
            $(this).removeClass('active');
            $(".slct_arrow").removeClass('active');
            dropBlock.slideUp();
        }

        /* Предотвращаем обычное поведение ссылки при клике */
        return false;
    });
    // Открываем модальное окно  
    $(".modal").click(function(e) {
        e.preventDefault();
        var id = $(this).data('modal');
        var txt = $(this).data('info');
        var title = $(this).data('title'); // для изменения title в модалке
        $(".popup[data-modal=" + id + "]").toggle("fade", 200).find("form").css('display', 'block');
        $(".popup[data-modal=" + id + "] input[name=form_name").val(txt);
        $(".popup[data-modal=" + id + "] h2").html(title); // прописать в ссылку data-title="нужный title"

        if (window.matchMedia("(min-width: 992px)").matches) {
            $("body").css({ "overflow": "hidden", "padding-right": "17px" });
        }
        if (window.matchMedia("(max-width: 992px)").matches) {

            $("body").css({ "overflow": "hidden", "padding-right": "0px" });
        }
    });
    // overlay для закрытия
    $(".overlay").click(function() {
        $(this).parent().toggle("drop", { direction: "up" }, 200);
        $("body").css({ "overflow": "inherit", "padding-right": "0" });
    });
    // закрываем модальное окно на крестик
    $(".popup .close").click(function(e) {
        e.preventDefault();
        $(this).parents(".popup").hide("drop", { direction: "up" }, 200);
        $("body").css({ "overflow": "inherit", "padding-right": "0" });
    });
    //  Отправка форм
    $("form").submit(function() { // перехватываем все при событии отправки
        var form = $(this); // запишем форму, чтобы потом не было проблем с this
        var error = [];
        form.find('.modal_form_input').each(function() { // пробежим по каждому полю в форме

            if ($(this).val() == '') { // если находим пустое
                $(this).siblings().show("fade", 500);
                error.push(true); // ошибка
            } else if ($(this).val() !== '') { // если находим не пустое
                $(this).siblings().hide("fade", 500)
                error.push(false); // нет ошибки
            }
            $(this).focus(function() {
                $(this).siblings().hide("fade", 500)
            });

        });
        form.find('.modal_form_phone').each(function() { // пробежим по каждому полю в форме
            var pattern = /^(\+|d+)*\d[\d\(\)\-]{4,14}\d$/;
            if ($(this).val() == '') { // если пустое
                $(this).siblings().show("fade", 500);
                error.push(true); // ошибка 
                if ($(this).siblings().hasClass('input_error_phone')) {
                    $(this).siblings().removeClass('input_error_phone').text("").prepend("Заполните поле<div class='modal_error_triangle'></div><div class='modal_error_chest_img'></div>");
                }
            } else if ($(this).val() !== '') {
                if ($(this).val().match(pattern)) {
                    $(this).siblings().hide("fade", 500);
                    error.push(false); // нет ошибок
                } else {
                    $(this).siblings().show("fade", 500).addClass('input_error_phone').text("").prepend("Введите правильный телефон<div class='modal_error_triangle'></div><div class='modal_error_chest_img'></div>");
                    error.push(true); // ошибка  
                }
            }
            $(this).focus(function() {
                $(this).siblings().hide("fade", 500);
            });

        });
        form.find('.modal_form_email').each(function() { // пробежим по каждому полю в форме
            var pattern = /^(([a-zA-Z0-9]|[!#$%\*\/\?\|^\{\}`~&'\+=-_])+\.)*([a-zA-Z0-9]|[!#$%\*\/\?\|^\{\}`~&'\+=-_])+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9-]+$/;
            if ($(this).val() == '') { // если пустое
                $(this).siblings().show("fade", 500);
                error.push(true); // ошибка
                if ($(this).siblings().hasClass('input_error_email')) {
                    $(this).siblings().removeClass('input_error_email').text("").prepend("Заполните поле<div class='modal_error_triangle'></div><div class='modal_error_chest_img'></div>");
                }

            } else if ($(this).val() !== '') {
                if ($(this).val().match(pattern)) {
                    $(this).siblings().hide("fade", 500).removeClass('input_error_email');
                    error.push(false); // нет ошибок
                } else {
                    $(this).siblings().show("fade", 500).addClass('input_error_email').text("").prepend("Введите правильный Email<div class='modal_error_triangle'></div><div class='modal_error_chest_img'></div>");
                    error.push(true); // ошибка  
                }
            }
            $(this).focus(function() {
                $(this).siblings().hide("fade", 500);
            });

        });
        var erorr_finish = 0;
        for (var i = 0; i < error.length; i++) {
            if (error[i] == false) {
                erorr_finish = erorr_finish + 1;
            };
            console.log(error[i]);
        }
        console.log(erorr_finish);
        var size = error.length - 1;
        if (erorr_finish > size) { // в зависимости от полей которые проверяются (в нашем случае 3 поля)
            var data = form.serialize(); // подготавливаем данные
            $.ajax({ // инициализируем ajax запрос
                type: 'POST', // отправляем в POST формате, можно GET
                url: 'mail.php', // путь до обработчика, у нас он лежит в той же папке
                dataType: 'json', // ответ ждем в json формате
                data: data, // данные для отправки
                beforeSend: function(data) { // событие до отправки
                    form.find('input[type="submit"]').attr('disabled', 'disabled'); // например, отключим кнопку, чтобы не жали по 100 раз
                },
                success: function(data) { // событие после удачного обращения к серверу и получения ответа
                    if (data['error']) { // если обработчик вернул ошибку
                        alert(data['error']); // покажем её текст
                    } else { // если все прошло ок
                        $('.dm-modal form').hide(); // пишем что все ок                
                        $('.dm-modal .sucess_mail').show('fade', 500);
                        $('.popup .close').hide();
                        $('.popup').delay(2000).fadeOut(
                            function() {
                                $('.popup').hide('fade');
                                form.trigger('reset');
                                $('.dm-modal .sucess_mail').removeClass('active');
                                $("#win .close").trigger('click');
                                $('.popup .close').show();
                            }
                        );
                        if (data['form'] == "form_2") { //Проверяем какая форма, если в форме есть <input type="hidden" name="id_form" value="form_2"> то выполняем код что ниже
                            $('.dm-modal .sucess_mail').addClass('active');
                            $('.popup2 .close').hide();
                            $('.popup2').show().delay(2000).fadeOut(
                                function() {
                                    $('.popup2').removeClass('active');
                                    form.trigger('reset');
                                    $('.dm-modal .sucess_mail').addClass('active');
                                    $("#win2 .close").trigger('click');
                                    $('.popup2 .close').show();
                                }
                            );
                        }
                    }
                },
                error: function(xhr, ajaxOptions, thrownError) { // в случае неудачного завершения запроса к серверу
                    alert(xhr.status); // покажем ответ сервера
                    alert(thrownError); // и текст ошибки
                },
                complete: function(data) { // событие после любого исхода
                    form.find('input[type="submit"]').prop('disabled', false); // в любом случае включим кнопку обратно
                }

            });
        }
        return false; // вырубаем стандартную отправку формы
    });

    function accordion() {
        $(".accordion .accordion_title").click(function() {
            $content = $(this).next();
            if ($content.is(":visible")) { //если нажали на title аккордеона,
                $content.slideUp(500, function() { //и если контент аккордеона видимый, то
                }); //убираем его
                $(this).children().removeClass("active"); //убираем активный класс у стрелки к примеру
                $(this).removeClass("active");

            } else {
                $(".accordion .accordion_content").slideUp("slow"); //если невидимый, прячем все скрытые 
                $(".accordion .accordion_title").children() //убираем активный класс у стрелки к примеру
                    .removeClass("active");
                $(".accordion_title").removeClass("active"); //убираем активный класс у стрелки к примеру
                $content.slideToggle("slow"); //открываем скрытый блок у того что нажали
                $(this).children().addClass("active"); //добавляем активный класс у стрекли к примеру
                $(this).addClass("active");
            }
        });
    }

    accordion();



    // табы
    $(".tabs-container .tabs-item").on('click', function(event) { //ссылки которые будут переключать табы
        event.preventDefault();

        $(".tabs-container .tabs-item").removeClass('active'); //убираем активные состояния у ссылок

        $(this).addClass('active'); //Добавляем активное состояние у той что нажали

        var data = $(this).data('tab'); //создаём переменную с датой
        $('.tabs-wrap').removeClass("active"); //убираем активные состояния у табов
        $('.tabs-wrap[data-tab=' + data + ']').addClass('active'); //если таб соответствует тому, какой data
        //атрибут в ссылке то делаем его активным
        TweenMax.staggerFrom($('.tabs-wrap[data-tab=' + data + '] .starting-work-item'), 0.5, { y: 30, autoAlpha: 0 }, 0.1);
    });


});
$(".loader_inner").fadeOut();
$(".loader").delay(100).fadeOut("slow");

function navButton() {
    var headerNav = document.querySelector('#header_nav_id'),
        buttonSpan = document.querySelectorAll('.header_nav_button_span'),
        headerNavButton = document.querySelector('.header_nav_button');


    for (var i = 0; i < buttonSpan.length; i++) {
        buttonSpan[i].classList.toggle("active");
    }
    headerNav.classList.toggle("active");
    headerNavButton.classList.toggle("active");
}
