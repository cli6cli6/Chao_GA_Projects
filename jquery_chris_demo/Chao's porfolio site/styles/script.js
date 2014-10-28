var feed = new Instafeed({
       get: 'user',
       userId: 1461868111,
       accessToken:'3170161.467ede5.cf899850aa6042f889a1798043004e99',
       clientId: '3a196ebb091e4c7483c6e6d0b45821f5',
       limit: 5,
       useHttp: true,
       after: function () {
          var images = $("#instafeed").find('a');
          $.each(images, function(index, image) {
            var delay = (index * 75) + 'ms';
            $(image).css('-webkit-animation-delay', delay);
            $(image).css('-moz-animation-delay', delay);
            $(image).css('-ms-animation-delay', delay);
            $(image).css('-o-animation-delay', delay);
            $(image).css('animation-delay', delay);
            $(image).addClass('animated flipInX');
          });
        },
       template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /><div class="likes">&hearts; {{likes}}</div></a>'
       
   });
   feed.run();