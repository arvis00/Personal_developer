let navItemList = Array.from(document.querySelectorAll('.nav-item'))
let growthBtn = document.querySelector('.growth')
let lineAnimation = document.querySelector('.lineBold')
let ambitionsBtn = document.querySelector('.ambitions')
let ambitionsCard = Array.from(document.querySelectorAll('.ambitionsCard'))
let growthCard = Array.from(document.querySelectorAll('.growthCard'))
let inputField = document.querySelector('.typeText_')





function onScroll(event) {
    var sections = document.querySelectorAll('.forScroll a');
    var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    for (var i = 0; i < sections.length; i++) {
        var currLink = sections[i];
        var val = currLink.getAttribute('href');
        val = val.substr(1)
        var refElement = document.getElementById(val);

        if (refElement.offsetTop - 110 <= scrollPos && (refElement.offsetTop + refElement.offsetHeight - 110 > scrollPos)) {
            document.querySelector('.nav-link').classList.remove('active');

            currLink.classList.add('active');
        } else {
            currLink.classList.remove('active');

        }
    }

};

window.addEventListener("scroll", onScroll);



const changeToAmbitions = () => {
    growthCard.forEach(el => {
        el.style.display = 'none'
    })
    ambitionsCard.forEach(el => {
        el.style.display = 'flex';
        el.style.flexDirection = 'column';
        el.style.alignItems = 'center';
        el.style.justifyContent = 'space-between'

    })
    lineAnimation.style.transform = 'translateX(175px)'
    lineAnimation.style.transition = 'transform 0.3s'

}

const changeToGrowth = () => {
    growthCard.forEach(el => {
        el.style.display = 'flex'
        el.style.flexDirection = 'column';
        el.style.alignItems = 'center';
        el.style.justifyContent = 'space-between';
    })
    ambitionsCard.forEach(el => {
        el.style.display = 'none'
    })

    if (lineAnimation.hasAttribute('style')) {

        lineAnimation.style.transform = 'translateX(0px)'
        lineAnimation.style.transition = 'transform 0.3s'

    }
}

growthBtn.addEventListener('click', changeToGrowth)

ambitionsBtn.addEventListener('click', changeToAmbitions)


function parallax() {

    var parallax = document.querySelectorAll(".parallax"),
        speed = 0.05;

    window.onscroll = function () {
        [].slice.call(parallax).forEach(function (el, i) {

            var windowYOffset = window.pageYOffset,
                elBackgroundPos = "50% " + (windowYOffset * speed) + "px";

            el.style.backgroundPosition = elBackgroundPos;

        });
    };

}

parallax();




const showSendBtn = () => {

    let value = inputField.value


    if (value.length >= 1) {
        document.querySelector('.attach').style.display = 'none'
        document.querySelector('.sendChat').style.display = 'block'

    } else {
        document.querySelector('.attach').style.display = 'block'
        document.querySelector('.sendChat').style.display = 'none'
    }
}

inputField.onkeyup = showSendBtn

window.openForm = function () {
    document.getElementById("myForm").style.display = "block";
    document.getElementById("myForm").style.transition = "1s";
}



document.querySelector('.closeChat').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById("myForm").style.display = "none";
})

$("#homeBtn, #logoName, #logoBottom, #scrollUp").click(function (e) {
    e.preventDefault();
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#home").offset().top - 110
    }, 500);
});

$("#aboutBtn").click(function (e) {
    e.preventDefault();
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#about").offset().top - 110
    }, 500);
});
$("#servicesBtn").click(function (e) {
    e.preventDefault();
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#services").offset().top - 110
    }, 500);
});
$("#contactBtn").click(function (e) {
    e.preventDefault();
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#contact").offset().top - 110
    }, 500);
});

function mediaQuerryListener(x) {
    if (window.matchMedia("(max-width: 992px)").matches) {
        

        $(window).scroll(function () {
            if (x.matches) {
                clearTimeout($.data(this, 'scrollTimer'));
                $.data(this, 'scrollTimer', setTimeout(function () {
                    $('#scrollUp').removeClass('show-flex');
                    $('#scrollUp').addClass('hide');
                }, 3000));
            } else {
                clearTimeout($.data(this, 'scrollTimer'));
                $('#scrollUp').removeClass('show-flex');
                $('#scrollUp').addClass('hide');
            }
        });

        $(window).scroll(function () {
            let y = $(this).scrollTop();
            const homeElement = document.getElementById('home');

            // $('#scrollUp').removeClass('hide');
            // $('#scrollUp').addClass('show-flex');

            if (y < homeElement.offsetHeight) {
                $('#scrollUp').removeClass('show-flex');

                $('#scrollUp').addClass('hide');

            } else {

                $('#scrollUp').removeClass('hide');
                $('#scrollUp').addClass('show-flex');
            }
        });
    }
}


let maxWidth992px = window.matchMedia("(max-width: 992px)")

maxWidth992px.addListener(mediaQuerryListener)
mediaQuerryListener(maxWidth992px)