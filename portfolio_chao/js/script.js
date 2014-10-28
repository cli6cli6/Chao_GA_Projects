var feed = new Instafeed({
       get: 'user',
       userId: 1461868111,
       accessToken:'3170161.467ede5.cf899850aa6042f889a1798043004e99',
       clientId: '3a196ebb091e4c7483c6e6d0b45821f5',
       template: '<div class="row image"><div class="span4"><a href="{{link}}"><img src="{{image}}" /></a><p class="caption">{{caption}}</p></div></div>'
   });
   feed.run();