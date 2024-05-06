$(document).ready(function () {
    var zindex = 10;

    $("div.card").click(function (e) {
        e.preventDefault();

        var isShowing = false;

        if ($(this).hasClass("show")) {
            isShowing = true
        }

        if ($("div.cards").hasClass("showing")) {
            // a card is already in view
            $("div.card.show")
                .removeClass("show");

            if (isShowing) {
                // this card was showing - reset the grid
                $("div.cards")
                    .removeClass("showing");
            } else {
                // this card isn't showing - get in with it
                $(this)
                    .css({ zIndex: zindex })
                    .addClass("show");

            }

            zindex++;

        } else {
            // no cards in view
            $("div.cards")
                .addClass("showing");
            $(this)
                .css({ zIndex: zindex })
                .addClass("show");

            zindex++;
        }

    });
});


window.onload = () => {
    const cursor = document.querySelector(".cursor");

    window.addEventListener("mousemove", (event) => {
        cursor.style.top = event.pageY + "px";
        cursor.style.left = event.pageX + "px";
    });



    const loop = () => {

        if (document.body.clientWidth > 1400) {

        }
        else if (document.body.clientWidth > 1023) {


        } else if (document.body.clientWidth > 767) {

        } else {

        }


        window.requestAnimationFrame(loop);
    };
    loop();
}



$('#logo').click(function () {
    window.location.href = '/';
});
