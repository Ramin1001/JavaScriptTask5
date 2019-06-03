 jQuery(document).ready(function($){
     

    // тег header с чего все начнется
        jQuery('<header/>', { class: 'nav'}).appendTo('.container');
   
     // Создаем название        
        jQuery('<span/>', {class: 'title',text:'JsWEB'}).appendTo('.nav');
       
     // создаем навбар 
        jQuery('<div/>',{class:'menulist', id: 'menu'}).appendTo('.nav');
     
     // создаем ссылки на другие страницы
        jQuery('<ul/>', {id:'ul-list'}).appendTo('.menulist');
      
        for(var i=0; i<4; i++)
        {
            jQuery('<li/>',{id:'li-list'+i+1}).appendTo('#ul-list');
            jQuery('<a/>',{href:'#', text:'Page'+i}).appendTo('#li-list'+i+1);
        }
     
        $('#li-list01 a').text('Home');
     
     // Создаем кнопку регистрации и входа
        jQuery('<div/>',{class:'log'}).appendTo('.nav');
        jQuery('<span/>').appendTo('.log');
        jQuery('<a/>',{href:'#',text:'Login'}).appendTo('.log span');
        jQuery('<span/>').appendTo('.log');
        jQuery('<a/>',{href:'#',text:'Registration'}).appendTo('.log span:last-child');
     
     // Создаем текст приветствия
        jQuery('<div/>',{class: 'weltext'}).appendTo('.contentwrapper');
        jQuery('<h1/>',{text:'Здравтвуйте'}).appendTo('.weltext');
        jQuery('<span/>',{text:'Добро пожаловать в JsWEB'}).appendTo('.weltext');
     
     // Создаем место для картинок
        jQuery('<div/>',{class:'pictures'}).appendTo('.contentwrapper');
      
        for(var i=0; i<3; i++)
        {
           jQuery('<div/>',{class:'box'}).appendTo('.pictures');
        }
            
      // Добавляем картинки
        $('.pictures .box:first-child').append('<img src="image/xxx.jpg" alt="img1">');
        $('.pictures .box:nth-child(2)').append('<img src="image/sss.jpg" alt="img2">');
        $('.pictures .box:last-child').append('<img src="image/ooo.jpg" alt="img3">');
     
 
     // Добавляем видео.
        $('.ytb').append('<iframe width="640" height="360" src="https://www.youtube.com/embed/IF_021eJ5SA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
     
     // конец первой страницы
     
    });

//  пока еще полностью недоделана


