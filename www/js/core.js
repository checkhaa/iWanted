$(document).ready(function(){
	
    $('#submenu-one').on('click', function(){
        $('.submenu-one').toggle(300);   
    });
    
    $('#submenu-two').on('click', function(){
        $('.submenu-two').toggle(300);   
    });
    
    $(".header").on('click', function(){
        $('.sidebar-left').animate({
            left: '0',
        }, 500, 'easeOutExpo', function () {});
        $('.sidebar-right').animate({
            right: '-280px',
        }, 500, 'easeInOutExpo', function () {});
        return false;
    });

    $(".close-sidebar-left, .close-bottom-left, .container, .loged_in").on('click', function(){
        $('.sidebar-left').animate({
            left: '-270px',
        }, 500, 'easeInOutExpo', function () {});
        return false;
    });
    
    $('.sidebar-left a').on('click', function(){
        $('.sidebar-left').animate({
            left: '-270px',
        }, 500, 'easeInOutExpo', function () {});
    });
    

    $('button#login').on('click', function() {
        var $btn = $(this).button('loading')
        var uname = $('input#user_name').val();
        var pwd = $('input#user_pwd').val();
        var dataString = 'login=true&user_name='+uname+'&user_pwd='+pwd;

        $.post('http://wanted.setcode.de/scripts/login.php', dataString)
        .success(function(result){
            // Wenn richtig eingeloggt Setze Storage und zeige die Maske nach dem erfolgreichem Login
            if(result == 'TRUE'){
                $.cookie('username', uname, { expires: 14 });
                $.cookie('login', true, { expires: 14 });

                // Login Maske ausblenden
                $('div#loged_out').remove();

                // Eingeloggte Maske anzeigen
                $('div#loged_in').fadeIn();

                // Sidebar laden
                $.get('tpl/tpl.sidebar.html', function(result){
                    $('#loged_sidebar').html(result);  
                });

            } else if(result == 'FALSE'){
                $('#output').html('<div class="alert alert-danger"><strong>Benutzername oder Passwort falsch!</strong> Versuchen Sie es erneut</div>');   
            }

            $btn.button('reset')
        });

        return false;
    });
});