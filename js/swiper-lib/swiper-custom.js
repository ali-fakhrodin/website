const swiper = new Swiper('.swiper', {
     // Optional parameters
     // direction: 'vertical',
     loop: true,
   
     // If we need pagination
   
     // Navigation arrows
     navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
     },
     keyboard: true,
     // And if we need scrollbar
     scrollbar: {
       el: '.swiper-scrollbar',
     },
   });