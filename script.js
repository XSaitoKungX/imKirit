$(window).on('load', function() {
    $('#page-loader').fadeOut('slow');
})

$(document).ready(function(){

    $(".nav_link").click(function() {
        // remove classes from all
        $(".nav_link").removeClass("active");
        // add class to the one we clicked
        $(this).addClass("active");
    });

    window.sr = ScrollReveal();
    sr.reveal('.menu', {
        duration: 4000,
        origin: 'bottom',
        distance: '-50px'
    });

    sr.reveal('.home-content .text-1', {
        duration: 6000,
        origin: 'right',
        distance: '5px'
    });

    sr.reveal('.home-content .text-2', {
        duration: 6000,
        origin: 'left',
        distance: '5px'
    });

    sr.reveal('.home-content .button-text-3', {
        duration: 4000,
        origin: 'top',
        distance: '-50px'
    });

    sr.reveal('.home-content .text-fe', {
        duration: 6000,
        origin: 'right',
        distance: '5px'
    });

    sr.reveal('.home-perfil', {
        duration: 4000,
        origin: 'top',
        distance: '-50px'
    });

    sr.reveal('.home-social', {
        duration: 4000,
        origin: 'right',
        distance: '-5px'
    });

    sr.reveal('.about .title', {
        duration: 6000,
        origin: 'bottom',
        distance: '-50px'
    });

    sr.reveal('.about .subtitle', {
        duration: 6000,
        origin: 'top',
        distance: '-50px'
    });

    sr.reveal('.about .column-left', {
        duration: 4000,
        origin: 'top',
        distance: '-50px'
    });

    sr.reveal('.about .column-right h2', {
        duration: 4000,
        origin: 'bottom',
        distance: '-50px'
    });

    sr.reveal('.about .column-right p', {
        duration: 4000,
        origin: 'bottom',
        distance: '-5px'
    });

    sr.reveal('.about .column-right .btncv', {
        duration: 5000,
        origin: 'top',
        distance: '-100px'
    });

    sr.reveal('.skills .title', {
        duration: 4000,
        origin: 'right',
        distance: '-5px'
    });

    sr.reveal('.skills .subtitle', {
        duration: 4000,
        origin: 'left',
        distance: '-5px'
    });

    sr.reveal('.skills .description', {
        duration: 4000,
        origin: 'top',
        distance: '-100px'
    });

    sr.reveal('.skills .skill-cont', {
        duration: 5000,
        origin: 'bottom',
        distance: '-100px'
    });

    sr.reveal('.projects .title', {
        duration: 4000,
        origin: 'right',
        distance: '-5px'
    });

    sr.reveal('.projects .subtitle', {
        duration: 4000,
        origin: 'left',
        distance: '-5px'
    });

    sr.reveal('.projects .subtitle', {
        duration: 4000,
        origin: 'left',
        distance: '-5px'
    });

    sr.reveal('.projects .card', {
        duration: 4000,
        origin: 'bottom',
        distance: '-50px'
    });

    sr.reveal('.contact .title', {
        duration: 4000,
        origin: 'right',
        distance: '-5px'
    });

    sr.reveal('.contact .subtitle', {
        duration: 4000,
        origin: 'left',
        distance: '-5px'
    });

    sr.reveal('.contact .column-left', {
        duration: 5000,
        origin: 'left',
        distance: '-5px'
    });

    sr.reveal('.contact .column-right', {
        duration: 5000,
        origin: 'right',
        distance: '-5px'
    });



    $(window).scroll(function(){

        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 300){
            $('.scroll-up').addClass("show");
        }else{
            $('.scroll-up').removeClass("show");
        }
    });

    //slip-up script//
    $('.scroll-up').click(function(){
        $('html, body').animate({ scrollTop: 0 });
    });

    //formular//
    $('#btnSedn').click(function(){

        var errors = '';

        // Validated Name ==============================
        if( $('#names').val() == '' ){
            errors += '<p>write a name</p>';
            $('#names').css("border-color", "var(--rojo)")
        } else{
            $('#names').css("border-color", "var(--verde)")
        }

        // Validated Mail ==============================
        if( $('#email').val() == '' ){
            errors += '<p>Enter an email</p>';
            $('#email').css("border-color", "var(--rojo)")
        } else{
            $('#email').css("border-color", "var(--verde)")
        }

        // Validated Subject ==============================
        if( $('#asunto').val() == '' ){
            errors += '<p>Enter a subject</p>';
            $('#asunto').css("border-color", "var(--rojo)")
        } else{
            $('#asunto').css("border-color", "var(--verde)")
        }

        // Validated Message ==============================
        if( $('#mensaje').val() == '' ){
            errors += '<p>write a message</p>';
            $('#mensaje').css("border-color", "var(--rojo)")
        } else{
            $('#mensaje').css("border-color", "var(--verde)")
        }

        // SENDING MESSAGE ============================
        if( errors == '' == false){
            var mensajeModal = '<div class="modal-form">'+
                '<div class="mensaje-modal">'+
                '<h3>errors found</h3>'+
                errors+
                '<span id="btnclose">Close</span>'+
                '</div>'+
                '</div>'

            $('body').append(mensajeModal);
        }

        // CERRANDO MODAL ==============================
        $('#btnclose').click(function(){
            $('.modal-form').remove();
        });


    });


    //typing animation script//
    var typed = new Typed(".typing",{
        strings: ["Kirit", "Content Creator", "TikToker"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true

    });


    //toggle menu/ navbar active//
    $('.menu-btn').click(function(){
        $('.navbar .menu').addClass("active");
        $('#burger').hide();
    });
    //nav menu close//
    $('#menu-close').click(function(){
        $('.navbar .menu').removeClass('active');
        $('#burger').show();
    })
    //nav menu close icons//
    $('.nav_link').click(function(){
        $('.navbar .menu').removeClass('active');
        $('#burger').show();
    });

    //img animation//
    $('#mi_imagen').hover(function(){
        $(this).attr('src','https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/911e6da6-8a23-4051-bc16-3fc9c0c5acf7/defe7gn-c482fcfa-a6ed-44f4-be92-fbae4c30685b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzkxMWU2ZGE2LThhMjMtNDA1MS1iYzE2LTNmYzljMGM1YWNmN1wvZGVmZTdnbi1jNDgyZmNmYS1hNmVkLTQ0ZjQtYmU5Mi1mYmFlNGMzMDY4NWIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Le_vJKFyJwky98KzKGVD4d8pjH2PXnwLMfJF78yEawA');
    },function(){
        $(this).attr('src','https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/80c84657-ccb5-449f-9680-b0a3a9dd3bef/dezbwze-5dff9a7c-abff-4080-864d-a0f7ca3166da.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgwYzg0NjU3LWNjYjUtNDQ5Zi05NjgwLWIwYTNhOWRkM2JlZlwvZGV6Ynd6ZS01ZGZmOWE3Yy1hYmZmLTQwODAtODY0ZC1hMGY3Y2EzMTY2ZGEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.xTj1ML-8h-WqbpEAMDKQe7cWr36bgCIUANU9o1spmLM');
    });



});

//SCROLL SECTION//

// SKILLS//
const skillContent = document.getElementsByClassName('skill-cont'),
    skillHeader = document.querySelectorAll('.skill-header')

function toggleskill(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillContent.length; i++ ){
        skillContent[i].className = 'skill-cont skill-close'
    }
    if(itemClass === 'skill-cont skill-close'){
        this.parentNode.className = 'skill-cont skill-open'
    }
}

skillHeader.forEach((el) =>{
    el.addEventListener('click', toggleskill)
});
