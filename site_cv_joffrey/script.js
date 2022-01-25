//NAVBAR

let lastScrollTop = 0;
navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageTOffset ||
    this.document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        navbar.style.top="-50px";
    } else {
        navbar.style.top="0";
    }
    lastScrollTop = scrollTop;
});



// TYPED

var typed = new Typed('.typed', {
    strings: ['Bonjour je m\'appelle Joffrey COINTRE, je vous transmet ce CV aujourdh\'ui car je suis à la recherche d\'une alternance dans le domaine du développement web. Je suis une personne très dynamique et toujours à la recherche de nouveaux challenges. Je pense pouvoir être un atout de choix pour votre équipe et je ferais en sorte de tout donner pour mener à bien les projets qui me seront confiés. Si vous avez pris un moment pour lire ceci je vous remercie de votre attention et vous souhaite une excellente fin de journée/soirée.'],
    typeSpeed: 20,
    backSpeed: 5,
});

//COMPEUR LIVE

let compteur = 0;

$(window).scroll(function() {

    const top = $('.counter').offset().top - window.innerHeight;

    if (compteur == 0 && $(window).scrollTop() > top) {
        $('.counter-value').each(function() {
            let $this = $(this),
            countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum : countTo
            },
            {
                duration: 20000,
                easing: 'swing',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                }
            });
        });
        compteur = 1;
    }
})

// AOS
AOS.init();