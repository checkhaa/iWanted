$(document).ready(function(){
	
	$('#submenu-one').click(function(){	$('.submenu-one').toggle(300);	});
	$('#submenu-two').click(function(){	$('.submenu-two').toggle(300);	});    
    
	$('.deploy-left-sidebar, .close-sidebar-left, .header, .close-bottom-left, .close-bottom-right').click(function(){	
        return false;	
    });

    
    $(".deploy-left-sidebar, .header").click(function(){
        $('.header').addClass('close_nav');
        $('.sidebar-left').animate({
            left: '0',
        }, 500, 'easeOutExpo', function () {});
        $('.sidebar-right').animate({
            right: '-280px',
        }, 500, 'easeInOutExpo', function () {});
        return false;
    });

    $(".close-sidebar-left, .close-bottom-left, .container").click(function(){
        $('.header').removeClass('close_nav');
        $('.sidebar-left').animate({
            left: '-270px',
        }, 500, 'easeInOutExpo', function () {});
        return false;
    });
    
    $('button#login').click(function(){
        var $btn = $(this).button('loading')
        var uname = $('input#user_name').val();
        var pwd = $('input#user_pwd').val();
        var dataString = 'login=true&user_name='+uname+'&user_pwd='+pwd;
        
        $.post('http://wanted.setcode.de/scripts/login.php', dataString)
        .success(function(result){
            // Wenn richtig eingeloggt Setze Storage und zeige die Maske nach dem erfolgreichem Login
            if(result == 'TRUE'){
                var success_login = 'login_success';
                window.localStorage.setItem('user_name', uname); 
                window.localStorage.setItem('login', success_login);
                
                // Login Maske ausblenden
                $('div#loged_out').remove();
                
                // Eingeloggte Maske anzeigen
                $('div#loged_in').fadeIn();
                
                // Sidebar laden
                $('#loged_sidebar').load( "tpl/tpl.sidebar.html");
                
            } else if(result == 'FALSE'){
                $('#output').html('<div class="alert alert-danger"><strong>Benutzername oder Passwort falsch!</strong> Versuchen Sie es erneut</div>');   
            }
            
            $btn.button('reset')
        });
        
        return false;
    });
});