
// Nav
(function nav() {

    const nav = document.querySelector('nav');
    const menuIcon = nav.querySelector('.menu-icon');
    const navLink = nav.querySelectorAll('.nav-link');
    let sweep = false;

    menuIcon.addEventListener('click', function() {
        if (!sweep) {
            for (let i = 0; i < navLink.length; i++ ) {
            navLink[i].style.left = '0px';
        }
        sweep = true;
        } else {
            for (let i = 0; i < navLink.length; i++ ) {
            navLink[i].style.left = '162px';
        }
        sweep = false;
        }

    })


}());

// Notes
(function notes() {
    const notes = document.querySelector('#notes');
    const cardSatu = notes.querySelector('.card:first-child');
    const xCardSatu = cardSatu.querySelector('p:first-child');
    const cardDua = notes.querySelector('.card:nth-child(2)');
    const xCardDua = cardDua.querySelector('p:first-child');
    const cardTiga = notes.querySelector('.card:nth-child(3)');
    const xCardTiga = cardTiga.querySelector('p:first-child');

    xCardSatu.addEventListener('click', function() {
        cardSatu.style.dispaly = 'none';
    })

}());