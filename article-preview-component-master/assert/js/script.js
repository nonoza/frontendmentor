let shareIcon = document.querySelector('.share-icon img');
let shareContent = document.querySelector('.share-content');

shareIcon.addEventListener('click',()=> {
    // console.log('clicked');
    shareContent.classList.toggle('show');
})

//function in sharing on facebook
document.getElementById('facebook-share').addEventListener('click', function() {
    const navUrlFacebook = 'https://www.facebook.com/sharer/sharer.php?u=';
    window.open(navUrlFacebook , '_blank');
})
//function in sharing on twitter
document.getElementById('twitter-share').addEventListener('click', function() {
    const navUrlTwitter = 'https://twitter.com/intent/tweet?text=';
    window.open(navUrlTwitter , '_blank');
})
//function in sharing on pinerest
document.getElementById('pinterest-share').addEventListener('click', function() {
    const navUrlPinterest = 'https://pinterest.com/pin/create/button/?url=';
    window.open(navUrlPinterest , '_blank');
})

