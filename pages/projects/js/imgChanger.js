$(window).on("scroll touchmove", function() 
{

   var newImageUrl = stickyImageDOM.src

	if ($(document).scrollTop() >= $("#M3K").position().top && $(document).scrollTop() < $("#Aer").position().top  ) {
		newImageUrl = "../../img/m3k.png"
   }

	if ($(document).scrollTop() >= $("#Aer").position().top && $(document).scrollTop() < $("#Aer2").position().top)
	{
		newImageUrl = "../../img/2.jpg"
    };
   if ($(document).scrollTop() >= $("#Aer2").position().top && $(document).scrollTop() < $("#Portfolio").position().top ) 
   {
		newImageUrl = "../../img/3.jpg"
   };
   if ($(document).scrollTop() >= $("#Portfolio").position().top) 
   {
		newImageUrl = "../../img/4.jpg"
   };
  
   stickyImageDOM.src = newImageUrl

});