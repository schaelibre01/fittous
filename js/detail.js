window.onload = () => {
    const cursor = document.querySelector(".cursor");
    const date = localStorage.getItem('date');
    const title = localStorage.getItem('title');
    const desc = localStorage.getItem('desc');
    const image = localStorage.getItem('image');

    const detailDate = document.querySelector('.detail-date');
    const detailTitle = document.querySelector('.detail-title');
    const detailImage = document.querySelector('.detail-image');
    const detailDesc = document.querySelector('.detail-desc');

    if (title !== null) {
        detailTitle.innerHTML = title;
    };
    if (date !== null) {
        detailDate.innerHTML = date;
    }
    if (desc !== null) {
        detailDesc.innerHTML = desc;
    }
    if (image !== null) {
        detailImage.src = image;
    }



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


$('.backDiv').click(function () {
    window.location.href = 'news.html';
});