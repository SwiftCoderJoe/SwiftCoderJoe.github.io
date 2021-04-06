$(window).on("scroll touchmove", function() 
{
	if ($(document).scrollTop() >= $("#M3K").position().top && $(document).scrollTop() < $("#Aer").position().top  ) 
	{
		$('body').css('background-image', 'url(https://4.bp.blogspot.com/-Ivk46EkgQfk/WWjbo4TdJbI/AAAAAAAAFUo/gUD7JABklsIA1gWIr5LS1slyY4QuTMkEwCLcBGAs/s1600/gambar%2Bwallpaper%2Bmobil.jpg)')
    };
	if ($(document).scrollTop() >= $("#Aer").position().top && $(document).scrollTop() < $("#Aer2").position().top)
	{
		$('body').css('background-image', 'url(https://i1.wp.com/cdn.catawiki.net/assets/marketing/uploads-files/45485-8bdcc8479f93d5a247ab844321b8b9d5e53c49a9-story_inline_image.jpg)')
    };
   if ($(document).scrollTop() >= $("#Portfolio").position().top) 
   {
		$('body').css('background-image', 'url(https://s-media-cache-ak0.pinimg.com/originals/e1/7a/03/e17a0385726db90de1854177d4af2b4f.jpg)')
   };
  
});