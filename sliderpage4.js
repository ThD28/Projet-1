function slider(sliderClass) {

    let img_slider = document.querySelectorAll(`.${sliderClass} .img_slider`);


    let etape = 0;

    let nbr_img = img_slider.length;

    let precedent = document.querySelector(`.${sliderClass}  .precedent`);
    let suivant = document.querySelector(`.${sliderClass} .suivant`);

    function enleverActiveImages() {
        for (let i = 0; i < nbr_img; i++) {
            img_slider[i].classList.remove('active');
        }
    }

    suivant.addEventListener('click', function () {
        etape++;
        if (etape >= nbr_img) {
            etape = 0;
        }
        enleverActiveImages();
        img_slider[etape].classList.add('active');
    })

    precedent.addEventListener('click', function () {
        etape--;
        if (etape < 0)
            etape = nbr_img - 1;
        enleverActiveImages();
        img_slider[etape].classList.add('active')
    })

    setInterval(function () {
        etape++;
        if (etape >= nbr_img) {
            etape = 0;
        }
        enleverActiveImages();
        img_slider[etape].classList.add('active');
    }, 3000)
}

slider("slider1");
slider("slider2");
slider("slider3");
slider("slider4");