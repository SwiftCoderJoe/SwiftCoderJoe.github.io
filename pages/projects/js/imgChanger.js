document.addEventListener('scroll', function() {
    var newImageUrl = stickyImageDOM.src;
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 100) {
       newImageUrl = "../../img/2.jpg"
    }
    if (scrollTop > 200) {
       newImageUrl = "../../img/3.jpg"
    }
    if (scrollTop > 300) {
       newImageUrl = "../../img/4.jpg"
    }

    stickyImageDOM.src = newImageUrl;
});