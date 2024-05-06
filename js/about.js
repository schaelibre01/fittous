window.onload = () => {
    const cursor = document.querySelector(".cursor");
    const aboutBox1 = document.querySelector(".about-box1");
    const aboutBox2 = document.querySelector(".about-box2");
    const aboutBox3 = document.querySelector(".about-box3");
    window.addEventListener("mousemove", (event) => {
        cursor.style.top = event.pageY + "px";
        cursor.style.left = event.pageX + "px";
    });



    const loop = () => {
        aboutBox1.style.opacity = '1';
        aboutBox2.style.opacity = '1';
        aboutBox3.style.opacity = '1';
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
