$(document).ready(function(){
	
	$('#submenu-one').click(function(){	$('.submenu-one').toggle(300);	});
	$('#submenu-two').click(function(){	$('.submenu-two').toggle(300);	});
	
	$('.deploy-left-sidebar, .close-sidebar-left, .close-bottom-left, .close-bottom-right').click(function(){	
        return false;	
    });
	
    $(".content").click(function(){
        $('.sidebar-left').animate({
            left: '-270',
        }, 300, 'easeOutExpo', function () {});
        $('.sidebar-right').animate({
            right: '-280px',
        }, 300, 'easeInOutExpo', function () {});
        return false;
    });

    $(".deploy-left-sidebar").click(function(){
        $('.sidebar-left').delay(300).animate({
            left: '0',
        }, 300, 'easeOutExpo', function () {});
        $('.sidebar-right').animate({
            right: '-280px',
        }, 300, 'easeInOutExpo', function () {});
        return false;
    });

    $(".close-sidebar-left, .close-bottom-left, .content-box, .header").click(function(){        
        $('.sidebar-left').animate({
            left: '-270px',
        }, 300, 'easeInOutExpo', function () {});
        return false;
    });
    
    $('button#login').click(function(){
        var $btn = $(this).button('loading')
        var uname = $('input#user_name').val();
        var pwd = $('input#user_pwd').val();
        var dataString = 'login=true&user_name='+uname+'&user_pwd='+pwd;
        
        $.post('http://wanted.setcode.de/scripts/login.php', dataString)
        .success(function(result){
            if(result == 'TRUE'){
                var success_login = 'login_success';
                window.localStorage.setItem('user_name', uname); 
                window.localStorage.setItem('login', success_login);
                window.location.href = "page/page.dashboard.html";
            } else if(result == 'FALSE'){
                $('#output').html('<div class="alert alert-danger"><strong>Benutzername oder Passwort falsch!</strong> Versuchen Sie es erneut</div>');   
            }
            
            $btn.button('reset')
        });
        
        return false;
    });
});

$(function(){
    var get_storage = window.localStorage.getItem("login");
    if(get_storage == 'login_success'){
        window.location.href = "page/page.dashboard.html";    
    }
});












