

$(".modal-video-control-icon").hover(
    function () {
        $(this).attr({
            "src": "assets/images/modal_video/play-icon-white-freepik.svg"
        });
        $(this).animate(
            {
                //top: "-=5px",
                //left: "-=5px",
                height: "+=10px",
                width: "+=10px"
            }
        );
    },
    function () {
        $(this).attr({
            "src": "assets/images/modal_video/play-icon-black-freepik.svg"
        });
        $(this).animate(
            {
                //top: "+=5px",
                //left: "+=5px",
                height: "-=10px",
                width: "-=10px"
            }
        );
    });
$(".js-video-btn").modalVideo();
$(".js-video-btn").click(function() {
    console.log("clicked!");
});