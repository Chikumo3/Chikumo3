// Function to get and auto play YouTube video from datatag
var initModal = function(){
    let elts = document.querySelectorAll('body button[data-bs-toggle="modal"]');

    elts.forEach(function(node) {
        node.addEventListener('click', function(){
            let videoSrc = node.getAttribute( "data-theVideo");
            let modalId = node.getAttribute("data-bs-target");

            let iframeSrc = document.querySelector(modalId + " iframe")
            iframeSrc.setAttribute("src", videoSrc);
        });
    });
};

document.addEventListener("DOMContentLoaded", function() {
    initModal();

    // Arrêter la vidéo YouTube à la fermeture du modal
    let modals = document.querySelectorAll('.modal');
    modals.forEach(function(modal) {
        modal.addEventListener('hidden.bs.modal', function () {
            let iframe = modal.querySelector('iframe');
            if (iframe) {
                iframe.setAttribute('src', '');
            }
        });
    });
});
