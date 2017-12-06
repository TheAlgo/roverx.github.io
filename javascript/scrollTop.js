window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        $('#Totop').removeClass('scale-out');
        $(".brand-logo img").stop(true,true).animate({width:"200px"},400).css('margin-top','-13px').removeClass('hide-on-med-and-down');
        $("nav").css({'background-color':'#212121'});
    } else {
        $('#Totop').addClass('scale-transition scale-out');
        $(".brand-logo img").animate({width:"300px"},400).css('margin-top','');
        $("nav").css('background-color','transparent');
        if(indexPage)
        {
            $(".brand-logo img").addClass('hide-on-med-and-down');
        }
    }
}