$(document).ready(function(){
	
	$('#submenu-one').click(function(){	$('.submenu-one').toggle(300);	});
	$('#submenu-two').click(function(){	$('.submenu-two').toggle(300);	});
	
	$('.deploy-left-sidebar, .close-sidebar-left, .close-bottom-left, .close-bottom-right').click(function(){	
        return false;	
    });
	

	///////////////////////
	//Deploy Left Sidebar//
	///////////////////////
    $(".content").click(function(){
        $('.sidebar-left').animate({
            left: '-270',
        }, 300, 'easeOutExpo', function () {});
        $('.sidebar-right').animate({
            right: '-280px',
        }, 300, 'easeInOutExpo', function () {});
        return false;
    });
	


	
	///////////////////////
	//Deploy Left Sidebar//
	///////////////////////
    $(".deploy-left-sidebar").click(function(){
        $('.sidebar-left').delay(300).animate({
            left: '0',
        }, 300, 'easeOutExpo', function () {});
        $('.sidebar-right').animate({
            right: '-280px',
        }, 300, 'easeInOutExpo', function () {});
        return false;
    });
	
	
	//////////////////////
	//Close Left Sidebar//
	//////////////////////

    $(".close-sidebar-left, .close-bottom-left, .content-box, .header").click(function(){        
        $('.sidebar-left').animate({
            left: '-270px',
        }, 300, 'easeInOutExpo', function () {});
        return false;
    });
});












