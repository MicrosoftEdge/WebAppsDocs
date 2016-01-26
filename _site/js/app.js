$(function () {

    $('img:not(.nr)').addClass('img-responsive');

    var filename = window.location.pathname.split('/').pop();
    $("a[href*='" + filename + "'] h3").toggleClass('active');

    var platformToggle = $("[name=platform]");

    if (platformToggle.length > 0) {
        var prevPlatform = platformToggle[0].checked ? platformToggle[0].value : platformToggle[1].value;

        if (window.location.hash) {
            var hash = window.location.hash.substring(1);

            if (hash != prevPlatform) {
                if (hash == platformToggle[0].value) {
                    platformToggle[0].checked = true;
                    platformToggle[1].checked = false;
                    prevPlatform = hash;
                }

                if (hash == platformToggle[1].value) {
                    platformToggle[1].checked = true;
                    platformToggle[0].checked = false;
                    prevPlatform = hash;
                }
            }
        }

        $("#reqs-" + prevPlatform).show();
        $("#steps-" + prevPlatform).show();

        platformToggle.click(function () {
            var curPlatform = $(this).val();

            if (curPlatform != prevPlatform) {
                $(".reqs").hide();
                $(".steps").hide();
                $("#reqs-" + curPlatform).show();
                $("#steps-" + curPlatform).show();
                prevPlatform = curPlatform;
                window.location = "#" + curPlatform;
            }
        });
    }
});
