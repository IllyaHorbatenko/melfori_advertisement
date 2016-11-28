$(function() {
    // создание табов

    //SVG Fallback
    // if(!Modernizr.svg) {
    //  $("img[src*='svg']").attr("src", function() {
    //      return $(this).attr("src").replace(".svg", ".png");
    //  });
    // };
});

// прокрутка по секциям


function buttonMobileMenu() {
    var button = $('.button-mobile-menu'),
        header = $('.top-menu-container'),
        content = $('.main'),
        menu = $('.mobile-menu');

    button.click(function() {
        header.toggleClass("active");
        content.toggleClass("active");
        menu.toggleClass("active");
        $('body').toggleClass('overflow');
    });
    content.click(function() {
        content.removeClass("active")
        header.removeClass("active");
        menu.toggleClass("active");
        $('body').removeClass('overflow');
    })
    menu.click(function() {
        content.removeClass("active")
        header.removeClass("active");
        menu.toggleClass("active");
        $('body').removeClass('overflow');
    })
}



var limit = 0;

function setSection(t) {
    var section = document.querySelectorAll('section');

    for (var i = 0; i < section.length; i++) {
        var sectionClass = section[i].getAttribute('class').split(' '),
            attribute = section[i].getAttribute('data-index');
        for (var j = 0; j < sectionClass.length; j++) {
            if (sectionClass[j] == 'active') {
                for (var q = 0; q < sectionClass.length; q++) {
                    if (sectionClass[q] == 'animation') {
                        limit++;
                    }
                    if (sectionClass[q] !== 'animation') {
                        section[i].classList.add('animation');
                        limit = 0;
                    }
                }
                if (limit == 0) {
                    // вызов анимации
                     t[i].play(0);
                    console.log(attribute);
                    for (var k = 0; k < section.length; k++) {
                        if (k != i) {
                            section[k].classList.remove('animation');
                            t[k].pause(0);
                        }
                    }
                }
            }
        }
    }


}


$(document).ready(function() {
    buttonMobileMenu();



    if (document.documentElement.clientWidth > 1200 && document.documentElement.clientHeight > 920) {
        $(".main").onepage_scroll({
            sectionContainer: "section", // контейнер, к которому будет применяться скролл
            easing: "ease", // Тип анимации "ease", "linear", "ease-in", "ease-out", "ease-in-out"
            animationTime: 500, // время анимации
            pagination: true, // скрыть или отобразить пагинатор
            animationTime: 500,
            moveDown: function() {
                console.log('index');
            },
            updateURL: false, // обновлять URL или нет
            // для инициализации tooltips
        });
            setInterval(function() {
        setSection(t);
    }, 100);


    }

if (document.documentElement.clientWidth > 1200 && document.documentElement.clientHeight > 920) {

    var t1 = new TimelineMax(),
        t2 = new TimelineMax(),
        t3 = new TimelineMax(),
        t4 = new TimelineMax(),
        t5 = new TimelineMax(),
        t6 = new TimelineMax(),
        t7 = new TimelineMax(),
        t8 = new TimelineMax(),
        t9 = new TimelineMax(),
        t = [t1, t2, t3, t4, t5, t6, t7, t8, t9];
    t1.pause();
    t2.pause();
    t3.pause();
    t4.pause();
    t5.pause();
    t6.pause();
    t7.pause();
    t8.pause();
    t9.pause();
    t1.from('.advertising-title', 0.7, { y: 100, opacity: 0, ease: Power4.easeOut }, 'header-1');
    t1.from('.header-add-project-container', 0.7, { y: 100, opacity: 0, ease: Power4.easeOut }, 'header-1');
    t1.from('.scroll-mouse-container', 0.7, { y: 100, opacity: 0, ease: Power4.easeOut }, '-=0.6', 'header-3');


    t2.from('.about-contextual-advertising-title', 0.7, { y: 100, opacity: 0, ease: Power4.easeOut }, 'advertising-1');
    t2.from('.about-contextual-advertising-wrap-1', 0.7, { y: 100, opacity: 0, ease: Power4.easeOut }, '-=0.3', 'advertising-2');
    t2.from('.about-contextual-advertising-wrap-2', 0.7, { y: 100, opacity: 0, ease: Power4.easeOut }, '-=0.6', 'advertising-3');

    t3.from('.about-lever-context-container-title', 0.7, { y: 100, opacity: 0, ease: Power4.easeOut });
    t3.staggerFrom('.about-lever-context-col', 0.7, { y: 100, opacity: 0, ease: Power4.easeOut }, 0.2, '-=0.4');
    t3.from('.audit-information-title', 0.7, { y: 100, opacity: 0, ease: Power4.easeOut }, '-=0.6');
    t3.from('.audit-form-title', 0.7, { y: 100, opacity: 0, ease: Power4.easeOut }, '-=0.6');
    t3.from('.audit-form', 0.7, { y: 100, opacity: 0, ease: Power4.easeOut }, '-=0.6');


    t4.from('.about-us-container-title', 0.7, { y: 100, opacity: 0, ease: Power4.easeOut });
    t4.staggerFrom('.about-us-icon-container', 0.7, { y: 100, opacity: 0, ease: Power4.easeOut }, 0.2, '-=0.5');
    t4.from('.main-result', 0.7, { y: 100, opacity: 0, ease: Power4.easeOut }, '-=0.6');

    t5.from('.finished-result-container-title', 0.7, { y: 100, opacity: 0, ease: Power4.easeOut });
    t5.from('.owl-carousel-list-img-container', 0.7, { y: 200, opacity: 0, ease: Power4.easeOut }, '-=0.6');
    t5.from('.owl-carousel-list-title', 0.7, { y: 100, opacity: 0, ease: Power4.easeOut }, '-=0.6');
    t5.from('.owl-carousel-list-article', 0.7, { y: 100, opacity: 0, ease: Power4.easeOut }, '-=0.6');
    t5.from('.owl-dots', 0.7, { y: 100, opacity: 0, ease: Power4.easeOut }, '-=0.6');

    t6.from('.starting-work-container-title', 0.7, { y: 100, opacity: 0, ease: Power4.easeOut },'-=0.5');
    t6.from('.tabs-wrap-container', 0.7, { y: 100, opacity: 0, ease: Power4.easeOut }, '-=0.4');
    t6.staggerFrom('.tabs-item', 0.7, { y: 100, autoAlpha: 0, ease: Power4.easeOut }, 0.1, '-=0.4','tabs-item');
    t6.staggerFrom('.starting-work-item', 0.7, { y: 100, autoAlpha: 0, ease: Power4.easeOut }, 0.1, '-=0.8','tabs-item');



    t7.from('.main-quetions-container-title', 0.7, { y: 100, opacity: 0, ease: Power4.easeOut }, '-=0.7');
    t7.staggerFrom('.accordion', 0.7, { y: 100, autoAlpha: 0, ease: Power4.easeOut }, 0.1,'-=0.6');
    t7.from('.ask-quetion-submit', 0.7, { y: 100, opacity: 0, ease: Power4.easeOut }, '-=0.6');


    t8.staggerFrom('.developed-sociality-wrap li', 0.7, { x: -100, autoAlpha: 0, ease: Power4.easeOut }, 0.2);
    t8.from('.developed-sociality-foto-aside', 0.7, { x: 100, opacity: 0, ease: Power4.easeOut }, '-=0.7');
    t8.from('.developed-sociality-foto-wrap', 0.7, { x: 100, opacity: 0, ease: Power4.easeOut }, '-=0.5');

    t9.from('.footer-container', 0.7, { y: 100, opacity: 0, ease: Power4.easeOut }, '+=0.2');
    t9.from('.footer-row', 0.7, { y: 100, opacity: 0, ease: Power4.easeOut }, '-=0.4');
}




    // GREEN SOCKS FOR DOWN




    //  GREEN SOCKS FOR UP


    // $( document ).tooltip({
    //   track: true
    // });  
    //скролл по ссылке с атрибутом href 
    $(".header_nav a[href*='#']").on("click", function(e) {
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
        $(".popup[data-modal=" + id + "]").toggle("fade", 500).find("form").css('display', 'block');
        $(".popup[data-modal=" + id + "] input[name=form_name").val(txt);
        $("body").css({ "overflow": "hidden", "padding-right": "17px" });

    });
    $(".modal").click(function(e) {
        e.preventDefault();
        var id = $(this).data('modal');
        var txt = $(this).data('info');
        $(".popup5[data-modal=" + id + "]").toggle("fade", 500).find("form").css('display', 'block');
        $(".popup5[data-modal=" + id + "] input[name=form_name").val(txt);
        $("body").css({ "overflow": "hidden", "padding-right": "17px" });

    });
    $(".modal").click(function(e) {
        e.preventDefault();
        var id = $(this).data('modal');
        var txt = $(this).data('info');
        $(".popup4[data-modal=" + id + "]").toggle("fade", 500).find("form").css('display', 'block');
        $(".popup4[data-modal=" + id + "] input[name=form_name").val(txt);
        $("body").css({ "overflow": "hidden", "padding-right": "17px" });

    });
    $(".overlay").click(function() {
        $(this).parent().toggle("fade", 500);
        $("body").css({ "overflow": "inherit", "padding-right": "0" });
    });
    // закрываем модальное окно
    $("#win .close").click(function(e) {
        e.preventDefault();
        $(".popup").hide("clip", 500);
        $("body").css({ "overflow": "inherit", "padding-right": "0" });
    });
    $("#win4 .close").click(function(e) {
        e.preventDefault();
        $(".popup4").hide("clip", 500);
        $("body").css({ "overflow": "inherit", "padding-right": "0" });
    });
    $("#win .close").click(function(e) {
        e.preventDefault();
        $(".popup5").hide("clip", 500);
        $("body").css({ "overflow": "inherit", "padding-right": "0" });
    });




    // закрываем модальное окно
    $("#win3 .close").click(function(e) {
        e.preventDefault();
        $(".popup3").hide("clip", 500);
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
        TweenMax.staggerFrom($('.tabs-wrap[data-tab=' + data + '] .starting-work-item'), 0.5, { y: 100, autoAlpha: 0},0.1);
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
