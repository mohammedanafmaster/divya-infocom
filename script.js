// Progress bar

document.addEventListener('scroll', function () {

    // Calculate the scroll progress
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;

    // Update the width of progress bar
    document.getElementById('progress-bar').style.width = progress + '%';
});

// Navigation bar

document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById("navbar");
    var landingSection = document.querySelector(".landing-section");
    var sticky = landingSection.offsetTop;

    window.onscroll = function() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    };
});

// Contact button

document.getElementById("contactButton").addEventListener("click", function() {
    window.location.href = "contact.html";
});

// Products button

document.getElementById("productsButton").addEventListener("click", function() {
    window.location.href = "products.html";
});

// Services button

function redirectToServices() {
    window.location.href = "services.html";
};

document.getElementById("servicesButton1").addEventListener("click", function() {
    window.location.href = "services.html";
});

// Testimonials slider

$(document).ready(function () {
    $(".next").on("click", function () {
        $(".testimonial-slider").animate({scrollLeft: "+=275%"}, "medium");
    });

    $(".prev").on("click", function () {
        $(".testimonial-slider").animate({scrollLeft: "-=275%"}, "medium");
    });
});