var app = {

    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener('backbutton', this.onBackKeyDown, false);
    },
    
    onBackKeyDown: function() {
        app.receivedEvent('backbutton');   
    },

    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },

    receivedEvent: function(id) {
        
        if(id == 'deviceready'){
            $(function(){
                var login_cookie = $.cookie('login');
                if (login_cookie == true) {            
                    alert(1);
                } else {
                    $.get('tpl/tpl.login.html', function(result){
                        $('#loged_out').html(result);  
                    });
                }
            });
        }
        
        if(id == 'backbutton'){

        }
        
    }
};
