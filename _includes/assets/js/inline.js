if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
        if (!user) {
            window.netlifyIdentity.on("login", () => {
                document.location.href = "/admin/";
            });
        }
    });
}

$(document).ready(function() {
    
    var $hamburger = $(".hamburger");
    $hamburger.on("click", function(e) {
        $hamburger.toggleClass("is-active");
        // Do something else, like open/close menu
        $("#site-navigation").toggleClass("is-active");
        $("#cls-1").toggleClass("is-active");
    });

    $("#contact-form").submit(function(e) {
        e.preventDefault();

        var $form = $(this);
        $.post($form.attr("action"), $form.serialize()).then(function() {
            alert("Thank you!");
        });
    });

    $(document).on('change', '#chair-covers', function() {
        var category = $(this).val();
        console.log(category);
        $.get('/rentals/chair-covers/' + category + '/index.html', function(data) {
            $('#results').html(data);
            $('.grid-container').magnificPopup({
                type: 'image',
                delegate: 'a',
                gallery: {
                    enabled: true,
                    preload: [0, 2],
                    navigateByImgClick: true,
                    arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                    tPrev: 'Previous (Left arrow key)',
                    tNext: 'Next (Right arrow key)',
                    tCounter: '<span class="mfp-counter">%curr% of %total%</span>'
                },
                image: {
                    markup: '<div class="mfp-figure">' +
                            '<div class="mfp-close"></div>' +
                            '<div class="mfp-img"></div>' +
                            '<div class="mfp-bottom-bar">' +
                            '<div class="mfp-title"></div>' +
                            '<div class="mfp-counter"></div>' +
                            '</div>' +
                            '</div>',
                    titleSrc: 'title',
                    verticalFit: true,
                    tError: '<a href="%url%">The image</a> could not be loaded.'
                }
            });
        });
    });

    $(document).on('change', '#table-linens', function() {
        var category = $(this).val();
        console.log(category);
        $.get('/rentals/table-linens/' + category + '/index.html', function(data) {
            $('#results').html(data);
            $('.grid-container').each(function() {
                $(this).magnificPopup({
                    type: 'image',
                    delegate: 'a',
                    gallery: {
                        enabled: true,
                        preload: [0, 1],
                        navigateByImgClick: true,
                        arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                        tPrev: 'Previous (Left arrow key)',
                        tNext: 'Next (Right arrow key)',
                    },
                    image: {
                        markup: '<div class="mfp-figure">' +
                                '<div class="mfp-close"></div>' +
                                '<div class="mfp-img"></div>' +
                                '<div class="mfp-bottom-bar">' +
                                '<div class="mfp-title"></div>' +
                                '<div class="mfp-counter"></div>' +
                                '</div>' +
                                '</div>',
                        titleSrc: 'title',
                        verticalFit: true,
                        tError: '<a href="%url%">The image</a> could not be loaded.'
                    }
                });
            });
        });
    });

    /******* Rental Filter Function *******/
    $("#filter-button").click(function (){
        $(".side-filter").css("left", "0px");
    });

    $("#x").click(function (){
        $(".side-filter").css("left", "-357px");
    });

    $("#rent-submit").click(function (){
        $(".side-filter").css("left", "-357px");
    });

    $("#chair-covers-rent").click(function (){
        console.log($(this).is(":checked"))
        var checked = $(this).is(":checked");
        if(checked === false){
            $("#spandex-rouched").prop("checked", false);
            $("#spandex-fitted").prop("checked", false);
            $("#universal-wrap-lamoure").prop("checked", false);
        }
    });

    $("#table-linens-rent").click(function (){
        console.log($(this).is(":checked"))
        var checked = $(this).is(":checked");
        if(checked === false){
            $("#bengaline-moire").prop("checked", false);
            $("#crinkles").prop("checked", false);
            $("#bichon-satin").prop("checked", false);
            $("#damasks").prop("checked", false);
            $("#glitz-sequins").prop("checked", false);
            $("#lame").prop("checked", false);
            $("#lamour").prop("checked", false);
            $("#pintucks").prop("checked", false);
            $("#poly-cotton-blend").prop("checked", false);
            $("#sheers").prop("checked", false);
            $("#spandex").prop("checked", false);
            $("#taffeta").prop("checked", false);
            $("#tinsels").prop("checked", false);
            $("#velvet").prop("checked", false);
        }
    });

    // $(document).on('change', '#rentals', function() {
    //     var category = $(this).val();
    //     console.log(category);
    //     $.get('/rentals/rentals/' + category + '/index.html', function(data) {
    //         $('#results').html(data);
    //         $('.grid-container').each(function() {
    //             $(this).magnificPopup({
    //                 type: 'image',
    //                 delegate: 'a',
    //                 gallery: {
    //                     enabled: true,
    //                     preload: [0, 1],
    //                     navigateByImgClick: true,
    //                     arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
    //                     tPrev: 'Previous (Left arrow key)',
    //                     tNext: 'Next (Right arrow key)',
    //                 },
    //                 image: {
    //                     markup: '<div class="mfp-figure">' +
    //                             '<div class="mfp-close"></div>' +
    //                             '<div class="mfp-img"></div>' +
    //                             '<div class="mfp-bottom-bar">' +
    //                             '<div class="mfp-title"></div>' +
    //                             '<div class="mfp-counter"></div>' +
    //                             '</div>' +
    //                             '</div>',
    //                     titleSrc: 'title',
    //                     verticalFit: true,
    //                     tError: '<a href="%url%">The image</a> could not be loaded.'
    //                 }
    //             });
    //         });
    //     });
    // });
});