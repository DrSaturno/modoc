<script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit&hl=en" async defer></script>
<script type="text/javascript">
    var recaptchaResponse1, recaptchaResponse2 = "";
    var verifyCallback1 = function(response) {
        $("input[name=recaptchaResponse1").val(response);
        recaptchaResponse1 = response;
    };
    var verifyCallback2 = function(response) {
        $("input[name=recaptchaResponse2").val(response);
        recaptchaResponse2 = response;
    };
    var recaptcha1, recaptcha2;
    var onloadCallback = function() {
        if (document.getElementById('recaptcha1') !== null) {
            recaptcha1 = grecaptcha.render('recaptcha1', {
                'sitekey' : '6LeRUmAhAAAAACcHxUIdOfmX9-oj0X9_LdNuQY0U',
                'callback' : verifyCallback1,
            });
        }
        if (document.getElementById('recaptcha2') !== null) {
            recaptcha2 = grecaptcha.render('recaptcha2', {
                'sitekey' : '6LeRUmAhAAAAACcHxUIdOfmX9-oj0X9_LdNuQY0U',
                'callback' : verifyCallback2,
            });
        }
    };
    $(document).ready(function() {
        $("input#submit-form-1").click(function(e) {
            e.preventDefault();
            console.log(recaptchaResponse1);
            if (recaptchaResponse1 == "") {
                alert("Complete the captcha");
            }
            else {
                $(this).parent().submit();
            }
        });
        $("input#submit-form-2").click(function(e) {
            e.preventDefault();
            console.log(recaptchaResponse1);
            if (recaptchaResponse2 == "") {
                alert("Complete the captcha");
            }
            else {
                $(this).parent().submit();
            }
        });
        $('.menuContacto').click(function(){
            var topContacto = $('.datos2').offset().top - 100;
            $('html, body').animate({
                scrollTop: topContacto,
            }, 300);
            return false;
        });    
        $('.menuNuestrosPar').click(function(){
            var topContacto = $('.contenerPartners').offset().top - 100;
            $('html, body').animate({
                scrollTop: topContacto,
            }, 300);
            return false;
        });
    });
</script>
