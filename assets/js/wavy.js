

(function() {
    isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;

    if (isWindows) {
        // if we are on windows OS we activate the perfectScrollbar function
        $('.frmleft_wrapper, .dispright_wrapper, .r-panel-body').perfectScrollbar();

        $('html').addClass('perfect-scrollbar-on');
    } else {
        $('html').addClass('perfect-scrollbar-off');
    }
})();


var searchVisible = 0;
var transparent = true;

var transparentDemo = true;
var fixedTop = false;

var mobile_menu_visible = 0,
    mobile_menu_initialized = false,
    toggle_initialized = false,
    bootstrap_nav_initialized = false;

var seq = 0,
    delays = 80,
    durations = 500;
var seq2 = 0,
    delays2 = 80,
    durations2 = 500;


$(document).ready(function() {

         $('#feel-the-wave').wavify({
  height: 80,
  bones: 4,
  amplitude: 60,
  color: '#00aff0',
  speed: .15
});
$('#feel-the-wave-two').wavify({
  height: 60,
  bones: 3,
  amplitude: 40,
  color: '#0471c985',
  speed: .25
});

  $('#feel-the-wavez').wavify({
  height: 40,
  bones: 4,
  amplitude: 60,
  color: '#04427e',
  speed: .15
});
$('#feel-the-wave-twoz').wavify({
  height: 90,
  bones:5,
  amplitude: 40,
  color: 'rgb(4, 39, 92)',
  speed: .25
});

    //  Activate the tooltips
    $('[rel="tooltip"]').tooltip();

    $('.form-control').on("focus", function() {
        $(this).parent('.input-group').addClass("input-group-focus");
    }).on("blur", function() {
        $(this).parent(".input-group").removeClass("input-group-focus");
    });

});

$(document).on('click', '.navbar-toggle', function() {
    $toggle = $(this);

    if (mobile_menu_visible == 1) {
        $('html').removeClass('nav-open');

        $('.close-layer').remove();
        setTimeout(function() {
            $toggle.removeClass('toggled');
        }, 400);

        mobile_menu_visible = 0;
    } else {
        setTimeout(function() {
            $toggle.addClass('toggled');
        }, 430);

        div = '<div id="bodyClick"></div>';
        $(div).appendTo('body').click(function() {
            $('html').removeClass('nav-open');
            mobile_menu_visible = 0;
            setTimeout(function() {
                $toggle.removeClass('toggled');
                $('#bodyClick').remove();
            }, 550);
        });

        $('html').addClass('nav-open');
        mobile_menu_visible = 1;

    }
});

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.


 $('#fin').change(function () {
        var filename = $(this).val().split('\\').pop();
        var idname = $(this).attr('at_label');
        alert(filename);
        console.log($(this));
        console.log(filename);
        console.log(idname);
        document.getElementById('at_label').value = filename;
    }); 

  function showT() {

        $(".frm_content").addClass("slideRight");
        $(".dispright_loader").addClass ("HideActivity")
    }

$(".menu-card").hover( function (e) {
    $(this).addClass('animated pulse');
 }, function(e){
    $(this).removeClass('animated pulse');
 });
 

  $(".hlp_bar").click(function () {
        $("#help_barpnl").slideDown(50), $("#help_barpnl").toggleClass("shw-rside");
    });
    $(".right-side-toggle").click(function () {
        $(".Output_Panel").slideDown(500), $(".Output_Panel").toggleClass("shw-Outputpnl");
    });

